import imageLogo from "@/assets/Снимок экрана 2026-01-09 112513.png";

const Loading = () => {
  return (
    <div className=" xl:mt-[150px] mt-[130px] inset-0 z-50 flex items-center justify-center bg-white/70">
      <div className="relative w-[140px] h-[140px] flex items-center justify-center">
        {/* SPINNER */}
        <div className="absolute inset-0 rounded-full border-4 border-orange-300 border-t-orange-600 animate-spin"></div>

        {/* IMAGE */}
        <img
          src={imageLogo}
          alt="Loading..."
          className="w-[110px] h-[100px] object-contain z-10"
        />
      </div>
    </div>
  );
};

export default Loading;
