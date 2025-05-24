import { useEffect, useState } from "react";
import { BarChart3 } from "lucide-react";

const AdminStats = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [blogReadCount, setBlogReadCount] = useState<number | null>(null);

  useEffect(() => {
    // Simulasi tracking dari localStorage (sementara)
    const visitors = localStorage.getItem("mufty_visitor_count");
    const blogReads = localStorage.getItem("mufty_blog_read_count");

    if (visitors) setVisitorCount(Number(visitors));
    if (blogReads) setBlogReadCount(Number(blogReads));
  }, []);

  return (
    <section className="bg-hijaulakeabu dark:bg-hijaulakeabu p-6 rounded-lg shadow-md space-y-4 animate-slide-up">
      <h2 className="text-lg font-semibold text-hijautua dark:text-kuninglidah flex items-center gap-2">
        <BarChart3 size={20} />
        Statistik Pengunjung
      </h2>
      <ul className="space-y-2 text-sm">
        <li>
          📈 Total Pengunjung:{" "}
          <strong>{visitorCount ?? "--"}</strong>{" "}
          {visitorCount === null && "(belum tersedia)"}
        </li>
        <li>
          📖 Total Pembaca Blog:{" "}
          <strong>{blogReadCount ?? "--"}</strong>{" "}
          {blogReadCount === null && "(belum tersedia)"}
        </li>
      </ul>
      <p className="text-xs text-textgelap/70 dark:text-textterang/70">
        Statistik ini akan terhubung otomatis dengan Google Analytics atau database kamu.
      </p>
    </section>
  );
};

export default AdminStats;
