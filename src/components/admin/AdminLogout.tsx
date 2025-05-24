import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { logoutUser } from "../../features/auth/authHelpers";

const AdminLogout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  return (
    <section className="text-center animate-fade-in mt-6">
      <button
        onClick={handleLogout}
        className="inline-flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded shadow transition"
        aria-label="Keluar dari Admin"
      >
        <LogOut size={16} />
        Logout
      </button>
    </section>
  );
};

export default AdminLogout;
