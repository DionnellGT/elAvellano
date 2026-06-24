import { useState, useEffect, useCallback } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router";

const LOGO = "/logo1.png";

const NAV_LINKS = [
  { label: "Somos", href: "#somos" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Testimonios", href: "#testimonios" },
];

export const NavbarAvellano = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isProyectoPage = location.pathname.startsWith("/proyectos/");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const pending = sessionStorage.getItem("scrollTo");
    if (pending && !isProyectoPage) {
      sessionStorage.removeItem("scrollTo");
      const timer = setTimeout(() => {
        const el = document.getElementById(pending);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, isProyectoPage]);

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        sessionStorage.setItem("scrollTo", id);
        navigate("/");
      }
    },
    [navigate]
  );

  /* El navbar del stitch siempre tiene fondo glass crema; al hacer scroll
     se añade sombra. En ProyectoPage se comporta igual. */
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-glass",
        isScrolled || isProyectoPage ? "py-3 shadow-md" : "py-4"
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={LOGO}
            alt="El Avellano"
            className="h-10 w-auto transition-all duration-300"
          />
        </a>

        {/* Desktop links + CTA */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="nav-link-avellano font-manrope font-semibold text-[14px] leading-[20px] tracking-[0.05em] text-stone-800 hover:text-[#A67C52] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contactanos"
            onClick={(e) => handleAnchorClick(e, "#contactanos")}
            className="bg-[#A67C52] text-white px-6 py-2 rounded-lg font-manrope font-semibold text-[14px] leading-[20px] tracking-[0.05em] hover:bg-[#79542e] transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            Contáctanos
          </a>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Abrir menú"
                className="p-2 rounded-md text-[#A67C52] transition-colors"
              >
                <Menu size={22} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#fff8f5] border-none w-72 [&>button]:text-stone-700 [&>button]:hover:text-stone-900"
            >
              <div className="px-2 mt-6 mb-10">
                <img src={LOGO} alt="El Avellano" className="h-10 w-auto" />
              </div>
              <nav className="flex flex-col gap-6 px-2" aria-label="Menú móvil">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      setMobileOpen(false);
                      handleAnchorClick(e, link.href);
                    }}
                    className="font-manrope font-semibold text-[15px] tracking-[0.05em] uppercase text-stone-700 hover:text-[#A67C52] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contactanos"
                  onClick={(e) => {
                    setMobileOpen(false);
                    handleAnchorClick(e, "#contactanos");
                  }}
                  className="mt-2 inline-block px-6 py-3 rounded-lg bg-[#A67C52] text-white font-manrope font-semibold text-[14px] tracking-[0.05em] uppercase text-center hover:bg-[#79542e] transition-colors duration-200"
                >
                  Contáctanos
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
};