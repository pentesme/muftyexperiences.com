// src/components/profile/Section3FormalEducation.tsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Section3FormalEducation = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="formal"
      className={`transition-all duration-500 ease-in-out rounded-lg shadow p-6 ${
        isExpanded
          ? "bg-white dark:bg-black"
          : "bg-white/60 dark:bg-black/30"
      }`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex justify-between w-full items-center text-left text-hijautua text-xl font-semibold"
      >
        <span>Perjalanan Belajar Formal</span>
        <span
          className={`transform transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          <ChevronDown />
        </span>
      </button>

      <div
        className={`transition-all duration-500 overflow-hidden ${
          isExpanded ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        } text-textgelap dark:text-textterang`}
      >
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>
            <strong>IAIN Antasari Banjarmasin</strong>
            <div className="ml-4">
              Jurusan: Hukum Keluarga  
              <br />
              Tahun: 2010 – 2015
            </div>
          </li>
          <li>
            <strong>MA Darul Hijrah Putera</strong>
            <div className="ml-4">Tahun: 2007 – 2010</div>
          </li>
          <li>
            <strong>MTs Darul Hijrah Putra</strong>
            <div className="ml-4">Tahun: 2004 – 2007</div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section3FormalEducation;
