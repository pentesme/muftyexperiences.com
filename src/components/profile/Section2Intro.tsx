import { Mail, Phone, Calendar, User } from "lucide-react";

const Section2Intro = () => {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-start bg-white dark:bg-black p-6 rounded-lg shadow transition-all">
      {/* Kiri: Foto + Identitas */}
      <div className="space-y-6 text-sm text-textgelap dark:text-textterang">
        <div className="flex justify-center">
          <img
            src="/assets/images/ajmufti.png"
            alt="Profil Mufty"
            className="h-52 w-52 rounded-full border-4 border-hijautua object-cover"
          />
        </div>
        <div className="space-y-2 pl-6">
          <div className="flex items-center gap-2">
            <User size={18} />
            <span>Abdul Jabbar. M</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>Januari, 1992</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <span>mufty@muftyexperiences.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <span>+62 852-4817-3622</span>
          </div>
        </div>
      </div>

      {/* Kanan: The Learner + Deskripsi */}
      <div className="text-textgelap dark:text-textterang space-y-4 text-sm">
        <h2 className="text-2xl font-bold text-hijautua dark:text-kuninglidah">"The Learner"</h2>
        <p className="leading-relaxed">
          Halaman Profil ini dibuat untuk Journaling, atas apa-apa yang pernah aku pelajari sepanjang hidup. Ini bukan menjelaskan bahwa aku bisa banyak hal, ini semua tentang apa yang sudah aku pelajari. Sehingga, kalau perlu dikotak-kotakkan seperti kebanyakan orang melakukannya, aku bisa dibilang "Generalist" karena banyaknya macam hal yang sudah dilakukan. Namun begitu disaat bersamaan, aku juga bisa dibilang "Specialist" Pembelajar, dengan alasan yang sama, karena banyaknya macam hal yang sudah dilakukan. Bagiku sendiri, pengkotakkan itu tidak lebih dari sekedar label, itu perlu, tapi bukan yang terpenting.
        </p>
        <p className="text-quote font-semibold mt-6">Perilakuku Adalah Jawabanku</p>
      </div>
    </section>
  );
};

export default Section2Intro;
