// src/components/profile/Section7ExportPDF.tsx
import React from "react";

interface Section7ExportPDFProps {
  sections: {
    formal: boolean;
    kerja: boolean;
    organisasi: boolean;
    kreatif: boolean;
  };
  setSections: React.Dispatch<
    React.SetStateAction<{
      formal: boolean;
      kerja: boolean;
      organisasi: boolean;
      kreatif: boolean;
    }>
  >;
  onExport: () => void;
}

const Section7ExportPDF = ({
  sections,
  setSections,
  onExport,
}: Section7ExportPDFProps) => {
  const handleCheckboxChange = (key: keyof typeof sections) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="no-print mt-10 border-t border-hijaulakeabu pt-6 text-sm text-textgelap dark:text-textterang">
      <h2 className="text-xl font-semibold text-hijautua dark:text-kuninglidah mb-4">
        Export to PDF
      </h2>
      <p className="mb-4">
        Pilih bagian mana saja yang ingin disertakan dalam PDF. Seksi 2 wajib dan tidak bisa dihapus.
      </p>
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked
            disabled
            className="mr-2 accent-kuninglidah"
          />
          <label className="select-none">Seksi 2 – Identitas (wajib)</label>
        </div>
        {(["formal", "kerja", "organisasi", "kreatif"] as const).map(
          (key) => (
            <div key={key} className="flex items-center">
              <input
                type="checkbox"
                checked={sections[key]}
                onChange={() => handleCheckboxChange(key)}
                className="mr-2 accent-kuninglidah"
              />
              <label className="select-none">
                {key === "formal"
                  ? "Seksi 3 – Perjalanan Belajar Formal"
                  : key === "kerja"
                  ? "Seksi 4 – Perjalanan Belajar Bekerja"
                  : key === "organisasi"
                  ? "Seksi 5 – Perjalanan Belajar Organisasi"
                  : "Seksi 6 – Pembelajaran Kreatif"}
              </label>
            </div>
          )
        )}
      </div>
      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={() => {
            console.log("Tombol Export diklik");
            onExport();
          }}
          className="px-6 py-2 rounded-lg shadow-md transition-colors bg-hijautua text-hijaulakeabu hover:bg-green-900 dark:hover:bg-green-800"
        >
          Export to PDF
        </button>
      </div>
    </section>
  );
};

export default Section7ExportPDF;
