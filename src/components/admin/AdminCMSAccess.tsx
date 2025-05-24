import { PenTool } from "lucide-react";

const AdminCMSAccess = () => {
  return (
    <section className="bg-hijaulakeabu dark:bg-hijaulakeabu p-6 rounded-lg shadow-md text-center space-y-4 animate-fade-in">
      <h2 className="text-lg font-semibold text-hijautua dark:text-kuninglidah">
        Tulis Artikel Baru
      </h2>
      <p className="text-sm text-textgelap dark:text-textterang">
        Buka dashboard CMS untuk membuat, mengedit, atau menghapus artikel blog. CMS ini berbasis Git dan langsung tersambung ke folder <code>src/posts</code>.
      </p>
      <a
        href="/admin/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Buka Dashboard CMS"
        className="inline-flex items-center gap-2 bg-kuninglidah text-tomboltext hover:bg-yellow-400 dark:hover:bg-yellow-300 px-4 py-2 rounded-md font-semibold transition-colors"
      >
        <PenTool size={18} />
        Buka CMS Dashboard
      </a>
      <p className="text-xs text-textgelap/70 dark:text-textterang/70">
        Login menggunakan akun terverifikasi diperlukan untuk mengakses dashboard.
      </p>
    </section>
  );
};

export default AdminCMSAccess;
