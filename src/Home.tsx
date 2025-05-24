import { Link } from "react-router-dom";
import SliderCard from "./components/home/SliderCard";

const Home = () => {
  return (
    <div className="animate-fade-in text-textgelap dark:text-textterang">
      {/* Hero Section */}
      <header className="section-container text-center space-y-6 animate-slide-down">
        <h1 className="heading-main">MUFTY EXPERIENCES</h1>
        <p className="heading-sub">The Learning's Journey</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          <strong>Mufty Experiences</strong> merupakan dokumentasi perjalanan belajar. Semua yang dilakukan dan dipublikasi diniatkan
          untuk memperdalam pembelajaran sekaligus membagikannya kepada siapapun yang merasakan manfaat yang sama.
          <br />
          Sebagai Pembelajar, kami terbuka untuk belajar dari Kamu dalam bentuk apapun (sharing, saran bahkan kritik).
          Jika dan hanya jika, Kamu merasa apa yang Mufty Experiences lakukan melalui media manapun, membuat Kamu tidak
          nyaman, maka itu artinya Kamu bukan audiens Mufty Experiences. Namun begitu, kami tetap meminta maaf, karena
          kami sudah sampai ke Kamu.
        </p>
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          <Link to="/communication" className="btn-primary" aria-label="Jalin Komunikasi">
            Jalin Komunikasi
          </Link>
          <Link to="/terms" className="btn-secondary" aria-label="Ketentuan Pengguna">
            Ketentuan Pengguna
          </Link>
        </div>
      </header>

      {/* Slider Section */}
      <section className="section-container mt-12">
        <SliderCard />
      </section>

      {/* Quote Section */}
      <section className="mt-16 px-6 text-center">
        <p className="text-base mb-2 text-textgelap dark:text-textterang">Satu filosofi utama kami:</p>
        <blockquote className="text-quote italic">
          “We Learned, We Share<br />
          You Shared, We Learn”
        </blockquote>
      </section>
    </div>
  );
};

export default Home;
