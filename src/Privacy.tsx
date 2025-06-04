import { useState } from "react";
import {
  User,
  Eye,
  Database,
  Trash,
  Cookie,
  FileCheck,
  Megaphone,
  Edit3,
  CheckCircle,
  ChevronDown,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Informasi Yang Dapat Kami Kumpulkan",
      icon: <User className="text-hijautua" size={20} />,
      content: (
        <div className="text-sm text-justify leading-relaxed text-textgelap dark:text-textterang space-y-2">
          <p><strong>1. Informasi yang Kamu berikan.</strong> Kamu mungkin mengisi informasi melalui formulir pendaftaran maupun melalui korespondensi.</p>
          <p><strong>2. Informasi yang kami kumpulkan.</strong> Kami dapat mengumpulkan informasi seperti:</p>
          <ul className="list-disc list-inside">
            <li>Nama Pengguna</li>
            <li>Alamat Email</li>
            <li>Informasi Tanggal Lahir</li>
            <li>Informasi Gender</li>
            <li>Informasi Lokasi</li>
            <li>Informasi Zona Waktu</li>
            <li>Informasi Sistem Operasi</li>
          </ul>
          <p><strong>3. Informasi dari sumber lain.</strong> Kami dapat menerima informasi Kamu dari layanan lain yang terintegrasi.</p>
        </div>
      ),
    },
    {
      title: "Penggunaan Informasi Pribadi",
      icon: <Eye className="text-hijautua" size={20} />,
      content: (
        <p className="text-sm text-justify text-textgelap dark:text-textterang">
          Kami menggunakan <strong>Informasi Pribadi</strong> Kamu untuk meningkatkan pengalaman terhadap Layanan Kami dan tidak akan pernah menjual atau mengalihdayakan data secara melanggar hukum. Kami dapat mengungkapkan data jika diminta oleh pemerintah sesuai regulasi.
        </p>
      ),
    },
    {
      title: "Pengungkapan Informasi Pribadi",
      icon: <Database className="text-hijautua" size={20} />,
      content: (
        <ul className="list-decimal list-inside text-sm text-justify text-textgelap dark:text-textterang space-y-1">
          <li>Ke grup usaha kami seperti cabang dan anak perusahaan</li>
          <li>Ke pemasang iklan atau penyedia analitik yang memerlukan data agregat</li>
        </ul>
      ),
    },
    {
      title: "Penyimpanan Informasi Pribadi",
      icon: <FileCheck className="text-hijautua" size={20} />,
      content: (
        <p className="text-sm text-justify text-textgelap dark:text-textterang">
          Seluruh <strong>Informasi Pribadi</strong> disimpan dengan aman. Kami berusaha melindungi data tersebut, namun transmisi internet tidak sepenuhnya aman, sehingga tanggung jawab risiko tetap di tangan Pengguna.
        </p>
      ),
    },
    {
      title: "Penghapusan Informasi Pribadi",
      icon: <Trash className="text-hijautua" size={20} />,
      content: (
        <p className="text-sm text-justify text-textgelap dark:text-textterang">
          Pengguna memiliki hak untuk menghapus data mereka. Data akan dihapus dalam waktu <strong>2 tahun</strong> setelah permohonan pengakhiran layanan.
        </p>
      ),
    },
    {
      title: "Kebijakan Cookies",
      icon: <Cookie className="text-hijautua" size={20} />,
      content: (
        <p className="text-sm text-justify text-textgelap dark:text-textterang">
          Kami dapat menempatkan <strong>Cookies</strong> untuk analitik, preferensi, dan iklan. Beberapa cookies dapat dikontrol oleh pihak ketiga. Anda dapat menghapus cookies melalui pengaturan browser.
        </p>
      ),
    },
    {
      title: "Pengakuan dan Persetujuan",
      icon: <CheckCircle className="text-hijautua" size={20} />,
      content: (
        <p className="text-sm text-justify text-textgelap dark:text-textterang">
          Dengan mengakses halaman ini, Anda mengakui bahwa Anda telah membaca dan menyetujui isi Kebijakan Privasi ini, termasuk pengumpulan dan pemrosesan <strong>Informasi Pribadi</strong>.
        </p>
      ),
    },
    {
      title: "Materi Pemasaran",
      icon: <Megaphone className="text-hijautua" size={20} />,
      content: (
        <p className="text-sm text-justify text-textgelap dark:text-textterang">
          Kami dan mitra dapat mengirimkan <strong>Materi Pemasaran</strong> jika Anda setuju. Anda bisa berhenti menerima kapan saja melalui kontak yang tersedia.
        </p>
      ),
    },
    {
      title: "Perubahan Dalam Kebijakan Privasi",
      icon: <Edit3 className="text-hijautua" size={20} />,
      content: (
        <p className="text-sm text-justify text-textgelap dark:text-textterang">
          Kami berhak mengubah kebijakan ini kapan saja. Dengan terus menggunakan layanan kami, Anda menyetujui perubahan tersebut.
        </p>
      ),
    },
  ];

  return (
    <div className="section-container space-y-12 animate-fade-in text-textgelap dark:text-textterang">
      {/* Seksi 2 – Intro */}
      <section className="max-w-3xl mx-auto text-sm leading-relaxed text-justify animate-slide-down space-y-4">
        <p>
          Terima Kasih telah mengunjungi <strong>Mufty Experiences</strong> (Kami) dan atau salah satu karya kami (Layanan Kami): muftyexperiences.com, youtube.com/@muftyexperiences, instagram.com/@muftyexperiences, MySaldo, Rawat Komputer #PianDirumahAja.
        </p>
        <p>
          Dengan mengakses dan menggunakan layanan kami, Kamu telah menerima dan menyetujui Ketentuan dan <strong>Kebijakan Privasi</strong> kami.
        </p>
        <p>
          Kebijakan ini menjelaskan cara kami mengumpulkan, menggunakan, menyimpan, dan mengungkap informasi Kamu. Bacalah dengan seksama agar Kamu memahami pendekatan kami.
        </p>
      </section>

      {/* Accordion */}
      <section className="max-w-3xl mx-auto space-y-6">
        {accordionItems.map((item, index) => {
          const isOpen = index === openIndex;
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

      {/* Seksi 3 – CTA */}
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
    </div>
  );
};

export default Privacy;
