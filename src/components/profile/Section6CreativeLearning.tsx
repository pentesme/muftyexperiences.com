import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Section6CreativeLearning = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section
      id="kreatif"
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
        <span>Perjalanan Belajar Kreatif</span>
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
          isExpanded ? "max-h-[3000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        } text-textgelap dark:text-textterang`}
      >
        <ol className="list-decimal ml-5 space-y-4 text-sm">
          <li>
            <p className="font-semibold">Webinar</p>
            <ul className="list-disc ml-6">
              <li>
                program: Dale Carnegie Training Webinar  
                <br />
                tema: How to Build Agility in Your Organization  
                <br />
                tahun: 2022
              </li>
              <li>
                program: Ngobrol Bareng Yukbisnis & Biznis.id  
                <br />
                tema: Membangun Tim di Bisnis Pemula – with Budi Satria Isman  
                <br />
                tahun: 2021
              </li>
            </ul>
          </li>

          <li>
            <p className="font-semibold">E-Course</p>
            <ul className="list-disc ml-6">
              <li>
                program: Akademi UKM Saat Pandemi (AKUSAPA)  
                <br />
                tema: Mentoring Re-Branding UKM  
                <br />
                tahun: 2021
              </li>
              <li>
                program: Milenial Fest Talenta Juara Regional Kal-Sul  
                <br />
                kelas: CEO (kelas tersedia: CEO, CMO, CTO)  
                <br />
                tahun: 2020
              </li>
            </ul>
          </li>

          <li>
            <p className="font-semibold">Course</p>
            <ul className="list-disc ml-6">
              <li>
                program: Training of Trainer (ToT)  
                <br />
                pelaksana: Lingkar Studi Ilmu Sosial Kerakyatan  
                <br />
                tahun: 2011
              </li>
              <li>
                program: Pelatihan Kepemimpinan Mahasiswa Tingkat Menengah  
                <br />
                pelaksana: BEM IAIN Antasari  
                <br />
                tahun: 2011
              </li>
              <li>
                program: Pelatihan Kepemimpinan Mahasiswa Tingkat Dasar  
                <br />
                pelaksana: BEM Fakultas Syariah IAIN Antasari  
                <br />
                tahun: 2011
              </li>
            </ul>
          </li>

          <li>
            <p className="font-semibold">Book</p>
            <ul className="list-disc ml-6">
              <li>Judul: Alquran – Allah</li>
              <li>Judul: Atomic Habits – James Clear</li>
              <li>Judul: Inspirasi – Marty Cagan</li>
              <li>Judul: 80/20 – Richard Koch</li>
              <li>Judul: Zero to One – Peter Thiel</li>
              <li>Judul: Start With Why – Simon Sinek</li>
              <li>Judul: Business is Fun – Yohanes G. Pauly</li>
              <li>Judul: The Cashflow Quadrant – Robert T. Kiyosaki</li>
              <li>Judul: Rich Dad Poor Dad – Robert T. Kiyosaki</li>
              <li>Judul: Berpikir dan Berjiwa Besar – David J. Schwartz</li>
              <li>Judul: Bicara Itu Ada Seninya – Oh Su Hyang</li>
              <li>Judul: 5 Bahasa Apresiasi Dalam Dunia Kerja – Gary Chapman</li>
              <li>Judul: The Secret – Rhonda Byrne</li>
              <li>Judul: Kau Bakar Aku Bakar – Damien Dematra</li>
              <li>Judul: The Power of Water – Masaru Emoto</li>
              <li>Judul: Ayat-Ayat Cinta – Habiburrahman El Shirazy</li>
              <li>Judul: Ipung 2 – Prie GS</li>
              <li>Judul: Ipung 1 – Prie GS</li>
            </ul>
          </li>

          <li>
            <p className="font-semibold">Content</p>
            <ul className="list-disc ml-6">
              <li>Bisa Jadi Anda Salah Paham Tentang Berpikir Kritis – Bagus Muljadi</li>
              <li>Imajinasi Buatan dan Pengembaraan Manusia – Gita Wirjawan</li>
              <li>Susahnya Jadi Perempuan – Part 2 – Najwa Shihab</li>
              <li>Masa Depan Uang, Masa Depan Sabrang – Sujiwo Tejo</li>
              <li>Dari Being Menjadi Becoming – CakNun.com</li>
              <li>Ada Kebenaran Yang Tidak Bisa Dibuktikan – CakNun.com</li>
            </ul>
          </li>

          <li>
            <p className="font-semibold">Music</p>
            <ul className="list-disc ml-6">
              <li>Tabassam – Sholawat Merdu Indonesia</li>
              <li>Berita Kepada Kawan – Ebiet G. Ade</li>
              <li>Bumi Kelangit – Bondan Prakoso dan Fade2Black</li>
              <li>Indonesia Sayang – Tipe-X</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Section6CreativeLearning;
