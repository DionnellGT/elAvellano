export const Footer = () => {
  return (
    <footer className="bg-[#2D4636] text-[#F9F6F1] pt-10 pb-5 px-5 md:px-16">
      <div className="max-w-[1280px] mx-auto">

        {/* ── Bloque superior: logo + tagline | Social ── */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 border-b border-white/10 pb-10">

          {/* Logo + tagline */}
          <div className="max-w-xs">
            <a href="/">
              <img
                src="/logo1.png"
                alt="El Avellano"
                className="h-12 w-auto mb-5 brightness-0 invert"
              />
            </a>
            <p className="font-manrope text-[15px] leading-[24px] text-[#E5E7E6]/70">
              Comprometidos con el desarrollo sustentable y la seguridad
              patrimonial de las familias chilenas.
            </p>
          </div>

          {/* Sección Social */}
          <div>
            <h4 className="font-manrope font-semibold text-[11px] leading-[16px] tracking-[0.15em] uppercase text-[#F9F6F1] mb-6">
              Social
            </h4>
            <div className="flex gap-4">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/fundoelavellano"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#A67C52] hover:border-[#A67C52] hover:scale-110 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-[#F9F6F1]"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61575818940479"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#A67C52] hover:border-[#A67C52] hover:scale-110 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#F9F6F1]"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* ── Copyright ── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[#E5E7E6]/50 font-manrope text-[13px] leading-[20px]">
          <p>© 2026 El Avellano Propiedades. Todos los derechos reservados.</p>
          <p>Diseñado para la paz y la inversión segura.</p>
        </div>

      </div>
    </footer>
  );
};