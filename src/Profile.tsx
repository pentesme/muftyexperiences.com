// src/Profile.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import * as html2pdf from "html2pdf.js";
import Section2Intro from "./components/profile/Section2Intro";
import Section3FormalEducation from "./components/profile/Section3FormalEducation";
import Section4WorkLearning from "./components/profile/Section4WorkLearning";
import Section5Organization from "./components/profile/Section5Organization";
import Section6CreativeLearning from "./components/profile/Section6CreativeLearning";
import Section7ExportPDF from "./components/profile/Section7ExportPDF";
import { ArrowUp } from "lucide-react";

const Profile = () => {
  const exportRef = useRef<HTMLDivElement>(null);
  const [showScroll, setShowScroll] = useState(false);
  const [sections, setSections] = useState({
    formal: true,
    kerja: true,
    organisasi: true,
    kreatif: true,
  });

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const handleExport = () => {
    try {
      if (!exportRef.current) return;
      const clone = exportRef.current.cloneNode(true) as HTMLElement;

      // Hapus elemen kontrol/tombol
      clone.querySelectorAll(".no-print").forEach(el => el.remove());

      // Hapus seksi yang tidak dipilih
      if (!sections.formal)     clone.querySelector("#formal")?.remove();
      if (!sections.kerja)      clone.querySelector("#kerja")?.remove();
      if (!sections.organisasi) clone.querySelector("#organisasi")?.remove();
      if (!sections.kreatif)    clone.querySelector("#kreatif")?.remove();

      // Force-expand setiap seksi yang dipilih
      (["formal", "kerja", "organisasi", "kreatif"] as const).forEach(id => {
        if (sections[id]) {
          const el = clone.querySelector<HTMLElement>(`#${id}`);
          el?.querySelectorAll("[class*='max-h-0']").forEach(e => {
            e.classList.remove("max-h-0");
            e.classList.add("max-h-[1000px]", "opacity-100", "mt-4");
          });
          el?.querySelectorAll("[class*='opacity-0']").forEach(e => {
            e.classList.remove("opacity-0");
            e.classList.add("opacity-100");
          });
        }
      });

      // Hapus semua kelas "dark:*"
      clone.querySelectorAll<HTMLElement>("[class]").forEach(node => {
        Array.from(node.classList)
          .filter(c => c.startsWith("dark:"))
          .forEach(darkCls => node.classList.remove(darkCls));
      });

      // Atur style tiap <section> untuk PDF
      clone.querySelectorAll<HTMLElement>("section").forEach(el => {
        el.style.minHeight       = "3.5in";         // ~30% tinggi A4
        el.style.backgroundColor = "#ffffff";       // latar putih
        el.style.color           = "#000000";       // teks hitam
      });

      // Tempatkan clone off-screen (tetap dapat dirender oleh html2canvas)
      const wrapper = document.createElement("div");
      wrapper.style.position = "absolute";
      wrapper.style.left     = "-9999px";
      wrapper.style.top      = "0";
      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);

      // Ekspor hanya dari clone, bukan dari wrapper
      html2pdf
        .default()
        .set({
          margin:       0.5,
          filename:     "Mufty-Profile.pdf",
          image:        { type: "jpeg", quality: 0.98 },
          html2canvas:  { scale: 2 },
          jsPDF:        { unit: "in", format: "a4", orientation: "portrait" },
        })
        .from(clone)
        .save()
        .then(() => {
          document.body.removeChild(wrapper);
        });
    } catch (error) {
      console.error("Error saat mengekspor PDF:", error);
    }
  };

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
        <div className="max-w-3xl mx-auto w-full">
          <Section7ExportPDF
            sections={sections}
            setSections={setSections}
            onExport={handleExport}
          />
        </div>
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
