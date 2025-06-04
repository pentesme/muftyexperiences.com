import { useEffect, useState } from "react";
import {
  HelpCircle,
  UserPlus,
  ShieldCheck,
  Globe,
  ChevronDown,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ✅ Tambahkan canonical untuk halaman /faq
  useEffect(() => {
    const link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", "https://muftyexperiences.com/faq");
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      icon: <HelpCircle className="text-hijautua" size={20} />,
      question: "Apa itu Mufty Experiences?",
      answer:
        "Mufty Experiences merupakan dokumentasi perjalanan belajar. Semua yang dilakukan dan dipublikasi diniatkan untuk memperdalam pembelajaran sekaligus membagikannya kepada siapapun yang merasakan manfaat yang sama.",
    },
    {
      icon: <UserPlus className="text-hijautua" size={20} />,
      question: "Apakah Aku juga bisa membagikan perjalanan belajarku?",
      answer:
        'Tentu saja bisa, dan bahkan kami memang mengharapkan itu, sebagaimana prinsip kami "We Learned, We Share. You Shared, We Learn".',
    },
    {
      icon: <Globe className="text-hijautua" size={20} />,
      question: "Bagaimana caranya untuk Aku membagikan perjalanan belajarku?",
      answer: (
        <>
          Kamu bisa sampaikan kisah perjalanan belajar kamu melalui halaman{" "}
          <Link to="/communication" className="underline text-hijautua dark:text-kuninglidah">
            Communication
          </Link>
          .
        </>
      ),
    },
    {
      icon: <ShieldCheck className="text-hijautua" size={20} />,
      question: "Apakah Mufty Experiences menjaga privacy?",
      answer: (
        <>
          Kami sangat menghormati Privasi setiap orang, sebagaimana kami ingin Privasi kami dihormati. Kamu bisa melihat
          detailnya di halaman{" "}
          <Link to="/privacy" className="underline text-hijautua dark:text-kuninglidah">
            Privacy Policies
          </Link>
          .
        </>
      ),
    },
  ];

  return (
    <div className="section-container space-y-10 animate-fade-in text-textgelap dark:text-textterang">
      {/* Seksi 2 – FAQ */}
      <section className="max-w-3xl mx-auto space-y-6 animate-slide-down">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-lg shadow border border-hijaulakeabu dark:border-hijaulakeabu transition bg-hijaulakeabu/20 dark:bg-hijaulakeabu/10"
            >
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-left text-hijautua dark:text-kuninglidah font-semibold text-base transition-colors"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center gap-3">
                  {faq.icon}
                  <span>{faq.question}</span>
                </div>
                <ChevronDown
                  className={`transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 text-sm px-4 ${
                  isOpen ? "max-h-[400px] py-4 opacity-100" : "max-h-0 opacity-0"
                } italic`}
              >
                {faq.answer}
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

export default FAQ;
