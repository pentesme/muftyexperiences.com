import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminHeader from "./AdminHeader";
import AdminCMSAccess from "./AdminCMSAccess";
import AdminPostList from "./AdminPostList";
import AdminLogout from "./AdminLogout";

import { isLoggedIn, isAdmin } from "../../features/auth/authHelpers";

const Admin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAccess = async () => {
      const loggedIn = await isLoggedIn();
      const admin = await isAdmin();

      if (!loggedIn || !admin) {
        navigate("/login");
      } else {
        setLoading(false);
      }
    };

    checkAccess();
  }, [navigate]);

  if (loading) {
    return (
      <div className="section-container text-center text-sm animate-fade-in">
        Mengecek akses admin...
      </div>
    );
  }

  return (
    <div className="section-container max-w-3xl mx-auto space-y-12 animate-fade-in text-textgelap dark:text-textterang">
      <AdminHeader />
      <AdminCMSAccess />
      <AdminPostList />
      <AdminLogout />
    </div>
  );
};

export default Admin;
