import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useProyectos } from "../hooks/useProyectos";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { metaEvents } from "@/lib/metaPixel";

interface ContactForm {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  proyecto: string;
  mensaje: string;
}

const contactInfo = [
  {
    icon: <Phone size={20} />,
    texto: "+56 9 4943 7974",
    ref: "https://wa.me/56949437974",
    onclick: () => metaEvents.contactWhatsapp(),
  },
  {
    icon: <Mail size={20} />,
    texto: "contacto@elavellano.cl",
    ref: "https://mail.google.com/mail/?view=cm&fs=1&to=contacto@elavellano.cl&su=Consulta&body=Hola,%20me%20interesa...",
    onClick: () => metaEvents.contactEmail()
  },
  {
    icon: <MapPin size={20} />,
    texto: "Bandera 206, Oficina 401, Santiago Centro",
  },
];

export const Contactenos = () => {
  const {proyectos} = useProyectos();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError]     = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSuccess(false);
    setIsError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        metaEvents.lead()
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    }
  };

  return (
    <section
      id="contactanos"
      className="py-20 bg-[#fff8f5] relative overflow-hidden px-5 md:px-16"
    >
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">

          {/* ── Columna izquierda (5/12) ── */}
          <div className="w-full lg:w-5/12">

            <h2 className="font-libre font-normal text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] text-stone-900 mb-6">
              Estamos aquí<br />para ti
            </h2>

            <p className="font-manrope text-[16px] leading-[26px] text-stone-500 mb-10 max-w-sm">
              Queremos ayudarte a hacer realidad tu proyecto. Escríbenos y
              descubre todo lo que este terreno tiene para ofrecerte, sin
              compromiso y con atención personalizada.
            </p>

            {/* Ítems de contacto */}
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="flex-shrink-0 text-[#A67C52] transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="font-manrope text-[15px] leading-[24px] text-stone-700">
                    <a href={item.ref} target="_blank" rel="noopener noreferrer" onClick={item.onclick}>
                      {item.texto}
                    </a>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Columna derecha (7/12): formulario ── */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-[#E5E7E6] shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="space-y-8">

                {/* Nombre + Apellido */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="font-manrope font-semibold text-[11px] leading-[16px] tracking-[0.12em] text-stone-900 uppercase block">
                      Nombre
                    </label>
                    <input
                      {...register("nombre", { required: true })}
                      type="text"
                      placeholder="Tu nombre completo"
                      className={`contact-input ${errors.nombre ? "contact-input-error" : ""}`}
                    />
                    {errors.nombre && (
                      <span className="text-red-400 text-[11px]">Requerido</span>
                    )}
                  </div>
                  <div className="space-y-3">
                    <label className="font-manrope font-semibold text-[11px] leading-[16px] tracking-[0.12em] text-stone-900 uppercase block">
                      Apellido
                    </label>
                    <input
                      {...register("apellido", { required: true })}
                      type="text"
                      placeholder="Tu apellido"
                      className={`contact-input ${errors.apellido ? "contact-input-error" : ""}`}
                    />
                    {errors.apellido && (
                      <span className="text-red-400 text-[11px]">Requerido</span>
                    )}
                  </div>
                </div>

                {/* Email + Teléfono */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="font-manrope font-semibold text-[11px] leading-[16px] tracking-[0.12em] text-stone-900 uppercase block">
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Email inválido",
                        },
                      })}
                      type="email"
                      placeholder="correo@ejemplo.com"
                      className={`contact-input ${errors.email ? "contact-input-error" : ""}`}
                    />
                    {errors.email && (
                      <span className="text-red-400 text-[11px]">
                        {errors.email.message || "Requerido"}
                      </span>
                    )}
                  </div>
                  <div className="space-y-3">
                    <label className="font-manrope font-semibold text-[11px] leading-[16px] tracking-[0.12em] text-stone-900 uppercase block">
                      Teléfono
                    </label>
                    <input
                      {...register("telefono", {
                        required: "Requerido",
                        minLength: {
                          value: 8,
                          message: "Mínimo 8 caracteres",
                        },
                      })}
                      type="tel"
                      placeholder="+56 9 ..."
                      className={`contact-input ${errors.telefono ? "contact-input-error" : ""}`}
                    />
                    {errors.telefono && (
                      <span className="text-red-400 text-[11px]">{errors.telefono.message}</span>
                    )}
                  </div>
                </div>

                {/* Proyecto de interés */}
                <div className="space-y-3">
                  <label className="font-manrope font-semibold text-[11px] leading-[16px] tracking-[0.12em] text-stone-900 uppercase block">
                    Proyecto de interés
                  </label>
                  <Controller
                    name="proyecto"
                    control={control}
                    rules={{
                      validate: (v) => (v && v !== "") || "Debes seleccionar un proyecto",
                    }}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value ?? ""}>
                        <SelectTrigger
                          className={errors.proyecto ? "border-red-400 focus:border-red-400 focus:shadow-[0_0_0_3px_rgba(248,113,113,0.10)]" : ""}
                        >
                          <SelectValue placeholder="Selecciona un proyecto" />
                        </SelectTrigger>
                        <SelectContent>
                          {proyectos.map((p) => (
                            <SelectItem key={p.id} value={p.name}>
                              {p.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.proyecto && (
                    <span className="text-red-400 text-[11px]">{errors.proyecto.message}</span>
                  )}
                </div>

                {/* Mensaje */}
                <div className="space-y-3">
                  <label className="font-manrope font-semibold text-[11px] leading-[16px] tracking-[0.12em] text-stone-900 uppercase block">
                    Mensaje
                  </label>
                  <textarea
                    {...register("mensaje", { required: true })}
                    rows={4}
                    placeholder="¿En qué podemos ayudarte?"
                    className={`contact-input resize-none ${errors.mensaje ? "contact-input-error" : ""}`}
                  />
                  {errors.mensaje && (
                    <span className="text-red-400 text-[11px]">Requerido</span>
                  )}
                </div>

                {/* Feedback */}
                {isSuccess && (
                  <p className="text-green-600 font-manrope text-[13px] text-center">
                    ✓ Mensaje enviado. ¡Pronto nos pondremos en contacto!
                  </p>
                )}
                {isError && (
                  <p className="text-red-400 font-manrope text-[13px] text-center">
                    Ocurrió un error al enviar. Inténtalo de nuevo.
                  </p>
                )}

                {/* Botón enviar */}
                <button
                  onClick={handleSubmit(onSubmit)}
                  disabled={isSubmitting}
                  className="w-full bg-[#A67C52] text-white py-5 rounded-lg font-manrope font-semibold text-[13px] leading-[20px] uppercase tracking-[0.2em] hover:bg-[#79542e] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};