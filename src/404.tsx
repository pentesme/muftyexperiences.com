import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-hijautua text-white animate-fade-in">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-xl md:text-2xl mb-6">Halaman tidak ditemukan</p>
      <p className="text-sm md:text-base max-w-md mb-8 text-hijaulakeabu">
        Sepertinya halaman yang kamu tuju tidak tersedia atau telah dipindahkan.
      </p>
      <button
        type="button"
        onClick={() => navigate("/")}
        className="inline-flex items-center gap-2 bg-hijaukeabu hover:bg-hijaukeabu/80 text-tomboltext font-semibold px-6 py-2 rounded-lg shadow transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default NotFound;
