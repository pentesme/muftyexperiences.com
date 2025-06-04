import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-textgelap dark:bg-black dark:text-textterang">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-grow px-4 py-6 animate-fade-in">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
