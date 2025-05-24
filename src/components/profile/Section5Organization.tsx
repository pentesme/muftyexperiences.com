import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Section5Organization = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section
      id="organisasi"
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
        <span>Perjalanan Belajar Organisasi</span>
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
          isExpanded ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        } text-textgelap dark:text-textterang`}
      >
        <ol className="list-decimal ml-5 space-y-4 text-sm">
          <li>
            <p>
              <strong>Ketua Umum</strong>: Lingkar Studi Ilmu Sosial Kerakyatan – LSISK (2013/2014)
            </p>
            <p>program:</p>
            <ul className="list-disc ml-6">
              <li>Merangkul & Memfasilitasi Senior Dalam Pelaksanaan Kaderisasi – Inisiasi</li>
              <li>Melaksanakan Pelatihan Menulis Opini – Inisiasi</li>
              <li>Melaksanakan Parlemen Jalanan Tentang Kelangkaan Gas LPG 3 Kg – Inisiasi</li>
              <li>Melaksanakan Diskusi Internal Sebagai Wadah Latihan Menjadi Pemateri, Moderator Hingga Peserta Diskusi Yang Baik – Rutinitas</li>
              <li>Menghidupkan Kembali Forum Diskusi Kecil Terukur (Halaqah) – Rutinitas</li>
              <li>Melaksanakan Penerimaan Anggota Baru (PASB) – Rutinitas</li>
            </ul>
          </li>

          <li>
            <p>
              <strong>Ketua Bidang</strong>: Penelitian & Pengembangan – BEM Fakultas Syariah (2013/2014)
            </p>
            <p>program:</p>
            <ul className="list-disc ml-6">
              <li>Mempelopori Orientasi Mahasiswa Fakultas Syariah Tanpa Perpeloncoan – Ketua SC</li>
              <li>Melaksanakan Pelatihan Kepemimpinan Mahasiswa Tingkat Dasar Fakultas Syariah – Ketua SC</li>
              <li>Melaksanakan Pekan Olahraga & Seni Fakultas Syariah – Ketua SC</li>
            </ul>
          </li>

          <li>
            <p>
              <strong>Anggota Bidang</strong>: Isu & Aksi – LSISK (2011/2012)
            </p>
            <p>program:</p>
            <ul className="list-disc ml-6">
              <li>Melaksanakan Dialog Publik "Sengketa Kepemilikan Pulau Lari-Larian Oleh Sulbar-Kalsel" – Ketua Pelaksana</li>
            </ul>
          </li>

          <li>
            <p>
              <strong>Staf Ahli Bidang</strong>: Isu & Aksi – BEM Fakultas Syariah (2011/2012)
            </p>
            <p>program:</p>
            <ul className="list-disc ml-6">
              <li>Melaksanakan Orientasi Mahasiswa Fakultas Syariah – Sekretaris OC</li>
              <li>Melaksanakan Dialog Publik "Analisis Wacana PILKADA Oleh Legislatif" – Ketua Pelaksana</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Section5Organization;
