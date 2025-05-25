import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Section4WorkLearning = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="kerja"
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
        <span>Perjalanan Belajar Bekerja</span>
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
        {/* 1. Manajemen Bisnis */}
        <div className="space-y-4 text-sm">
          <h4 className="font-bold">1. Manajemen Bisnis</h4>

          <div>
            <p className="font-semibold">bisnis: Gibran Printing</p>
            <p>posisi: Pengelola Penuh</p>
            <p>waktu: Juli 2018 - Januari 2020</p>
            <p>pelajaran:</p>
            <ul className="list-disc ml-6">
              <li>Pentingnya Modal Ditahan</li>
              <li>Pentingnya Mengelola Cashflow</li>
              <li>Pentingnya Kejelasan Hak & Kewajiban</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">bisnis: RAYA Stationery</p>
            <p>posisi: undefined</p>
            <p>waktu: Januari 2018 - April 2018</p>
            <p>pelajaran:</p>
            <ul className="list-disc ml-6">
              <li>Pentingnya Penetapan Struktur</li>
              <li>Pentingnya Pembagian Tugas</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">bisnis: Boost Event Organizer</p>
            <p>posisi: Tim Produksi</p>
            <p>waktu: Januari 2016 - Juli 2017</p>
            <p>pelajaran:</p>
            <ul className="list-disc ml-6">
              <li>Pentingnya Kesejahteraan Tim</li>
              <li>Pentingnya Kejelasan Waktu Kerja</li>
              <li>Pentingnya Pembagian Tugas</li>
              <li>Pentingnya Penindakan Atas Kesalahan</li>
            </ul>
          </div>
        </div>

        {/* 2. Manajemen Event */}
        <div className="mt-6 space-y-4 text-sm">
          <h4 className="font-bold">2. Manajemen Event</h4>

          <div>
            <p>status: Freelancer of Event Organizer</p>
            <p>waktu: 2018 - Sekarang</p>
            <p>pengalaman:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Runner of Bold Banjazzbanar - 2024</li>
              <li>Runner of Fasilitator Daerah Kementerian Agama Kal-Sul - 2021</li>
              <li>Runner & Drone Pilots of Sasirangan Festival - 2020</li>
              <li>Runner & Drone Pilots of Panglima Batur Festival - 2020</li>
              <li>PIC Sosialisasi PILKADA Kalsel - 2020</li>
              <li>Runner of Tabalong Expo - 2019</li>
              <li>Runner of Calendar Event (Bali) - 2019</li>
              <li>Runner of Calendar Event (Yogyakarta) - 2018</li>
              <li>Runner of Murdjani Festival - 2018 & 2019</li>
              <li>Runner of MTQ Nasional Regional Kalsel - 2016–2018</li>
              <li>Runner & Drone Pilots of PORPROV Kalsel - 2018</li>
            </ul>
          </div>

          <div>
            <p>perusahaan: Boost Event Organizer</p>
            <p>status: Staff</p>
            <p>waktu: Januari 2016 - Juli 2017</p>
            <p>pengalaman:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>PIC of Family Gathering KPP Buhut - 2017</li>
              <li>PIC of Family Gathering KPP Tanjung - 2017</li>
              <li>Runner of Kongres Sungai Indonesia III - 2017</li>
              <li>Runner of Kalsel Book Fair - 2017</li>
              <li>Runner of Sasirangan Festival - 2017</li>
              <li>Runner of Gathering KPP Asam-Asam - 2016</li>
              <li>PIC Gudang Garam Suryanation, Kotabaru - 2016</li>
              <li>Runner Gudang Garam Suryanation (lintas kota) - 2016</li>
              <li>PIC Roadshow Stanley & Dewalt - 2016</li>
            </ul>
          </div>
        </div>

        {/* 3. Riset */}
        <div className="mt-6 text-sm space-y-2">
          <h4 className="font-bold">3. Riset</h4>

          <div>
            <p>lembaga: Charta Politika Indonesia</p>
            <p>status: Assistant Supervisor Regional Kalsel</p>
            <p>waktu: 2020 - Sekarang</p>
            <p>tanggung jawab:</p>
            <ul className="list-disc ml-6">
              <li>Membantu Supervisor Membentuk Tim Surveyor</li>
              <li>Memastikan Data Akurat</li>
              <li>Melakukan Pembekalan</li>
              <li>Menangani Kendala Lapangan</li>
            </ul>
          </div>

          <div>
            <p>status: Surveyor</p>
            <p>waktu: 2014 - Sekarang</p>
            <p>pelajaran:</p>
            <ul className="list-disc ml-6">
              <li>Mengelola Administrasi</li>
              <li>Mempersuasi Responden</li>
              <li>Membaca Pola Preferensi Masyarakat</li>
            </ul>
          </div>
        </div>

        {/* 4. Administrasi */}
        <div className="mt-6 text-sm space-y-2">
          <h4 className="font-bold">4. Administrasi</h4>
          <p>perusahaan: PT. HM Sampoerna, Tbk</p>
          <p>status: Admin Kontrak</p>
          <p>waktu: Agustus 2015 - September 2015</p>
          <p>tanggung jawab: Input Data dari Tim Lapangan</p>
          <p>program: Bedah Rumah</p>
          <p>status: Admin</p>
          <p>tanggung jawab: Digitalisasi Data Lapangan</p>
        </div>

        {/* 5. Pemenangan Pemilu */}
        <div className="mt-6 text-sm space-y-2">
          <h4 className="font-bold">5. Pemenangan Pemilu</h4>
          <ul className="list-disc ml-6">
            <li>
              agenda: Pemenangan Caleg DPR RI Dapil I (2024)  
              <br />
              status: Tim Support  
              <br />
              tanggung jawab: Memenuhi kebutuhan Perlengkapan Tim dan Pengawalan Rekapitulasi Suara
            </li>
            <li>
              agenda: Pemenangan Caleg DPRD Kabupaten (2024)  
              <br />
              status: Tim Support  
              <br />
              tanggung jawab: Pengawalan Rekapitulasi Suara
            </li>
            <li>
              agenda: Pemenangan Caleg DPRD Kabupaten (2019)  
              <br />
              status: Tim Support  
              <br />
              tanggung jawab: Asistensi Caleg
            </li>
            <li>
              agenda: Relawan Pemenangan PILWALI Kota (2015)  
              <br />
              status: Koordinator Lapangan  
              <br />
              tanggung jawab:  
              <ul className="list-disc ml-6">
                <li>Melakukan Koordinasi Untuk Melaksanakan Program Pemenangan</li>
                <li>Memastikan Semua Perlengkapan Tersedia</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section4WorkLearning;
