
export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f5f0eb]/85 backdrop-blur-sm">
      <div className="relative flex h-24 w-24 items-center justify-center">

        {/* Anillo exterior */}
        <div className="absolute inset-0 rounded-full border-[3.5px] border-transparent border-t-[#A67C52] border-r-[#A67C52] animate-spin" />

        {/* Anillo interior (gira al revés) */} 
        <div
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#79542e] border-l-[#79542e]"
          style={{ animation: 'spin-reverse 1.4s cubic-bezier(0.6,0.2,0.4,0.8) infinite' }}
        />

        {/* Logo */}
        <img
          src="/favicon.ico"
          alt="Cargando..."
          className="relative z-10 h-11 w-11 rounded-full object-contain"
        />
      </div>
    </div>
  );
};