// Contactenos.tsx
import { useForm } from "react-hook-form";
import { useState } from "react";

interface ContactForm {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export const Contactenos = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
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

  const inputClass = (hasError: boolean) =>
    `border rounded-lg px-4 py-2.5 text-[14px] text-stone-700 placeholder:text-stone-400 focus:outline-none transition-colors ${
      hasError
        ? "border-red-400 focus:border-red-500"
        : "border-stone-200 focus:border-[#a07030]"
    }`;

  return (
    <section id="contactanos" className="relative py-15 px-6">
      <div
        className="max-w-6xl mx-auto bg-cover bg-center bg-no-repeat rounded-3xl p-10 max-sm:p-3 md:p-16"
        style={{ backgroundImage: "url('/fondoContactenos.webp')" }}
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Columna izquierda */}
          <div>
            <h2 className="font-bold text-[#a07030] max-sm:text-2xl max-sm:px-3 max-sm:py-1 max-sm:text-center text-4xl md:text-5xl leading-tight mb-6">
              Estamos<br />aquí para ti
            </h2>
            <p className="text-stone-600 max-sm:text-[13px] max-sm:px-3 text-[15px] leading-relaxed max-w-sm">
              Queremos ayudarte a hacer realidad tu proyecto.{" "}
              <strong className="text-stone-800">
                Escríbenos y descubre todo lo que este terreno tiene para
                ofrecerte, sin compromiso y con atención personalizada.
              </strong>
            </p>
          </div>

          {/* Columna derecha — formulario */}
          <div className="bg-white rounded-2xl p-5 md:p-8 shadow-md">
            <h3 className="font-bold text-stone-900 text-xl mb-6">
              Escríbenos{" "}
              <span className="text-[#a07030]">tu mensaje</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-1">
                <input
                  {...register("nombre", { required: true })}
                  placeholder="Nombre"
                  className={inputClass(!!errors.nombre)}
                />
                {errors.nombre && <span className="text-red-400 text-[11px]">Requerido</span>}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  {...register("apellido", { required: true })}
                  placeholder="Apellido"
                  className={inputClass(!!errors.apellido)}
                />
                {errors.apellido && <span className="text-red-400 text-[11px]">Requerido</span>}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Email inválido",
                    },
                  })}
                  placeholder="Email"
                  type="email"
                  className={inputClass(!!errors.email)}
                />
                {errors.email && (
                  <span className="text-red-400 text-[11px]">
                    {errors.email.message || "Requerido"}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <input
                  {...register("telefono", { required: true })}
                  placeholder="Teléfono"
                  type="tel"
                  className={inputClass(!!errors.telefono)}
                />
                {errors.telefono && <span className="text-red-400 text-[11px]">Requerido</span>}
              </div>
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <textarea
                {...register("mensaje", { required: true })}
                placeholder="Mensaje"
                rows={5}
                className={`w-full resize-none ${inputClass(!!errors.mensaje)}`}
              />
              {errors.mensaje && <span className="text-red-400 text-[11px]">Requerido</span>}
            </div>

            {isSuccess && (
              <p className="text-green-600 text-[13px] mb-3 text-center">
                ✓ Mensaje enviado. ¡Pronto nos pondremos en contacto!
              </p>
            )}
            {isError && (
              <p className="text-red-400 text-[13px] mb-3 text-center">
                Ocurrió un error al enviar. Inténtalo de nuevo.
              </p>
            )}

            <div className="flex justify-end">
              <button
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="text-[#a07030] font-bold text-[18px] py-2 px-6 rounded-full hover:bg-[#8a5f28] hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};