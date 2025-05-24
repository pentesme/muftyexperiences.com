import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg("Login gagal: " + error.message);
    } else {
      navigate("/admin");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-hijautua text-white px-4 animate-fade-in">
      <div className="w-full max-w-md bg-hijaulakeabu dark:bg-hijaulakeabu p-6 rounded-lg shadow space-y-6 text-center">
        <h1 className="text-3xl font-bold text-hijautua dark:text-kuninglidah">Login Admin</h1>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 rounded border border-hijautua text-textgelap bg-white dark:bg-gelapagelap focus:outline-none focus:ring-2 focus:ring-kuninglidah"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Password"
          className="w-full px-4 py-2 rounded border border-hijautua text-textgelap bg-white dark:bg-gelapagelap focus:outline-none focus:ring-2 focus:ring-kuninglidah"
        />

        {errorMsg && (
          <p className="text-sm text-red-800 bg-red-100 rounded px-3 py-1">{errorMsg}</p>
        )}

        <button
          type="button"
          onClick={handleLogin}
          className="w-full px-6 py-2 rounded-md bg-kuninglidah text-tomboltext font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-300 transition-colors"
        >
          Masuk
        </button>

        <p className="text-xs text-textgelap/60 dark:text-textterang/60">
          Hanya untuk admin terverifikasi.
        </p>
      </div>
    </div>
  );
};

export default Login;
