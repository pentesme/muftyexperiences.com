import { Lightbulb, Globe, RefreshCw } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2007",
      text: "Ide Mufty Experiences Lahir (Baru Nama Tanpa Konsep)",
      icon: <Lightbulb size={20} className="text-hijautua" />,
    },
    {
      year: "2021",
      text: "Website Mufty Experience Dibangun",
      icon: <Globe size={20} className="text-hijautua" />,
    },
    {
      year: "2025",
      text: "Mufty Experience Berubah Nama Menjadi Mufty Experiences",
      icon: <RefreshCw size={20} className="text-hijautua" />,
    },
  ];

  return (
    <div className="section-container space-y-12 animate-fade-in text-textgelap dark:text-textterang">
      {/* Seksi 1 – Paragraf Awal */}
      <section className="text-center max-w-3xl mx-auto animate-slide-down">
        <p className="text-lg md:text-xl leading-relaxed">
          <strong className="text-hijautua dark:text-kuninglidah">Mufty Experiences</strong> (sebelumnya: Mufty Experience), awalnya hanyalah impian spontan anak berusia 15 tahun yang belum mengenal banyak hal tentang komponen dunia.
          Seiring berjalannya waktu, bukannya hilang, impian ini seolah kian memperjelas dirinya sendiri.
        </p>
      </section>

      {/* Seksi 2 – Timeline */}
      <section className="max-w-3xl mx-auto relative">
        <div className="border-l-4 border-hijautua dark:border-kuninglidah pl-6 space-y-10">
          {timeline.map((item, index) => (
            <div key={index} className="relative group">
              {/* Titik */}
              <div className="absolute -left-[30px] top-1.5 w-5 h-5 rounded-full bg-hijaulakeabu dark:bg-hijaulakeabu border-2 border-hijautua dark:border-kuninglidah flex items-center justify-center transition transform group-hover:scale-110">
                {item.icon}
              </div>
              <div className="animate-slide-up">
                <h4 className="text-hijautua dark:text-kuninglidah font-bold text-lg">{item.year}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seksi 3 – Paragraf Penutup */}
      <section className="max-w-3xl mx-auto animate-fade-in text-center">
        <p className="text-lg leading-relaxed italic text-quote">
          Mufty Experiences yang lahir dari hanya berupa Nama. <br />
          Kami tidak terlalu ingin dikenang karena Nama. <br />
          Untuk Kamu, semoga perjalanan belajar ini bisa menjadi <strong>Makna</strong>.
        </p>
      </section>
    </div>
  );
};

export default About;
