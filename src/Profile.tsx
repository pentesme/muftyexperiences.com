// src/Profile.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Section2Intro from "./components/profile/Section2Intro";
import Section3FormalEducation from "./components/profile/Section3FormalEducation";
import Section4WorkLearning from "./components/profile/Section4WorkLearning";
import Section5Organization from "./components/profile/Section5Organization";
import Section6CreativeLearning from "./components/profile/Section6CreativeLearning";
import { ArrowUp } from "lucide-react";

const Profile = () => {
  const exportRef = useRef<HTMLDivElement>(null);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div
        ref={exportRef}
        className="section-container space-y-10 animate-fade-in relative print:space-y-6 text-textgelap dark:text-textterang"
      >
        <Section2Intro />
        <Section3FormalEducation />
        <Section4WorkLearning />
        <Section5Organization />
        <Section6CreativeLearning />
      </div>

      {showScroll && (
        <button
          className="fixed bottom-6 right-6 bg-hijautua text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition no-print"
          onClick={scrollToTop}
          title="Kembali ke Atas"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default Profile;
