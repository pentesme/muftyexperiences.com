import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Youtube",
    image: "/assets/images/youtube.png",
    buttonText: "Lihat Video",
    link: "https://youtube.com/@muftyexperiences",
  },
  {
    title: "Blog",
    image: "/assets/images/blog.png",
    buttonText: "Baca Artikel",
    link: "/blog",
  },
  {
    title: "Karya",
    image: "/assets/images/mysaldo.png",
    buttonText: "Coba Aplikasi",
    link: "https://mysaldo.app",
  },
  {
    title: "Instagram",
    image: "/assets/images/instagram.png",
    buttonText: "Jalin Sosialisasi",
    link: "https://www.instagram.com/@muftyexperiences",
  },
  {
    title: "Coming Soon",
    image: "/assets/images/coming.png",
    buttonText: "Coming Soon",
    link: "#",
  },
];

const SliderCard = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Auto-scroll loop
  useEffect(() => {
    const autoScroll = () => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scroll("right");
      }
    };

    intervalRef.current = setInterval(autoScroll, 3500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="relative">
      {/* Judul */}
      <h2 className="heading-main text-center mb-8">Perjalanan Belajar</h2>

      {/* Slider */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide snap-x snap-mandatory px-2 py-4"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[250px] sm:min-w-[280px] border border-hijaulakeabu dark:border-hijaulakeabu rounded-lg p-4 flex-shrink-0 snap-start bg-transparent"
            >
              <div className="flex flex-col items-center text-center w-full">
                <h3 className="text-lg font-semibold text-hijautua dark:text-kuninglidah mb-2">
                  {card.title}
                </h3>
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-20 w-20 mb-3 object-contain"
                />
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {card.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol panah kiri */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-hijautua/10 hover:bg-hijautua/30 text-hijautua dark:text-kuninglidah p-2 rounded-full z-10 transition"
          aria-label="Scroll Left"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Tombol panah kanan */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-hijautua/10 hover:bg-hijautua/30 text-hijautua dark:text-kuninglidah p-2 rounded-full z-10 transition"
          aria-label="Scroll Right"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SliderCard;
