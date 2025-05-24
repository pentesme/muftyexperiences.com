import { useState } from "react";
import {
  CheckCircle,
  ListChecks,
  ChevronDown,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const terms = [
    {
      icon: <CheckCircle className="text-hijautua" size={20} />,
      title: "Persetujuan",
      content: (
        <p className="text-sm text-justify leading-relaxed text-textgelap dark:text-textterang">
          Setiap Pengguna yang melanjutkan mengakses dan atau menggunakan Layanan Kami, berarti menyatakan setuju pada Ketentuan Pengguna dan Kebijakan Privasi yang kami sajikan.
        </p>
      ),
    },
    {
      icon: <ListChecks className="text-hijautua" size={20} />,
      title: "Apa Saja Yang Disetujui",
      content: (
        <ol className="list-decimal list-inside space-y-2 text-sm text-justify text-textgelap dark:text-textterang">
          <li>
            Setuju untuk memandang semua karya Kami (dalam semua bentuk, seperti dan tidak terbatas pada: Tulisan, Video, Audio, Layanan, Aplikasi) sebagai proses belajar-mengajar.
          </li>
          <li>
            Setuju untuk tidak menjadikan semua karya kami (Layanan Kami) sebagai bahan tuntutan hukum, sebagai apapun. Jika memang apa yang kami lakukan benar-benar tidak sesuai bagi Kamu, Kamu bersedia menghubungi kami dengan cara kekeluargaan melalui jalur yang sudah kami sediakan.
          </li>
          <li>
            Hanya membagikan perjalanan belajar yang otentik milik Kamu sendiri. dan jika dikemudian hari ditemukan terbukti melanggar, Kamu akan menyelesaikannya dengan tanggung jawab sendiri.
          </li>
        </ol>
      ),
    },
  ];

  return (
    <div className="section-container space-y-12 animate-fade-in text-textgelap dark:text-textterang">
      {/* Seksi 2 – Intro */}
      <section className="max-w-3xl mx-auto space-y-2 text-sm animate-slide-down leading-relaxed text-justify">
        <p>
          <strong>Mufty Experiences</strong> dan atau akun sosial media, kanal youtube, aplikasi hasil karya, dan hasil karya lainnya,
          selanjutnya disebut <strong>"Layanan Kami"</strong> atau <strong>"Kami"</strong>.
        </p>
        <p>
          Setiap Pengguna, selanjutnya disebut <strong>"Kamu"</strong> atau <strong>"Pengguna"</strong>.
        </p>
      </section>

      {/* Seksi 3 – Accordion */}
      <section className="max-w-3xl mx-auto space-y-6">
        {terms.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-lg shadow border border-hijaulakeabu dark:border-hijaulakeabu transition bg-hijaulakeabu/20 dark:bg-hijaulakeabu/10"
            >
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-left text-hijautua dark:text-kuninglidah font-semibold text-base"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                <ChevronDown
                  className={`transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 px-4 ${
                  isOpen ? "max-h-[1000px] py-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {item.content}
              </div>
            </div>
          );
        })}
      </section>

      {/* Seksi 4 – CTA */}
      <section className="text-center space-y-4 animate-fade-in">
        <p className="text-base">
          Kamu punya hal spesifik yang ingin disampaikan?
        </p>
        <Link
          to="/communication"
          className="inline-flex items-center gap-2 px-6 py-2 rounded-md bg-kuninglidah text-tomboltext font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-300 transition-colors"
        >
          <Send size={16} />
          Sampaikan di sini
        </Link>
      </section>

      {/* Seksi 5 – Footer Hak Cipta */}
      <footer className="text-center text-xs text-textgelap/60 dark:text-textterang/60 mt-10 animate-fade-in">
        © 2025 Mufty Experiences. All rights reserved.
      </footer>
    </div>
  );
};

export default Terms;
