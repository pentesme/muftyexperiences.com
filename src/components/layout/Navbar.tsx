import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Communication", href: "/communication" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="bg-hijautua border-b border-hijaulakeabu px-4 py-3 shadow-sm transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img src="/assets/images/logo.png" alt="Logo" className="h-10 w-10" />
          <div className="leading-tight">
            <div className="text-lg font-bold text-kuninglidah">Mufty Experiences</div>
            <div className="text-sm text-hijaulakeabu italic">The Learning’s Journey</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-hijaulakeabu font-bold"
                    : "text-hijaulakeabu hover:text-kuninglidah"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-4 text-kuninglidah hover:text-white transition-colors duration-300"
            title="Toggle Theme"
            aria-label="Toggle Theme"
          >
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="text-kuninglidah hover:text-white transition-colors duration-300"
            title="Toggle Theme"
            aria-label="Toggle Theme"
          >
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-hijaulakeabu focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2 px-4 pb-3 animate-slide-down">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)} // ✅ auto minimize
              className={({ isActive }) =>
                `block text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-hijaulakeabu font-bold"
                    : "text-hijaulakeabu hover:text-kuninglidah"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
