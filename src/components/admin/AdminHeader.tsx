const AdminHeader = () => {
  return (
    <section className="text-center animate-slide-down space-y-2">
      <h1 className="text-3xl md:text-4xl font-extrabold text-hijautua dark:text-kuninglidah transition-colors">
        Halaman Admin
      </h1>
      <p className="text-sm text-textgelap dark:text-textterang max-w-2xl mx-auto leading-relaxed">
        Selamat datang di pusat kendali <strong>Mufty Experiences</strong>.
        Di halaman ini kamu bisa menulis artikel blog, mengakses dashboard CMS,
        melihat statistik pengunjung, dan mengelola dokumentasi belajar dengan lebih mudah.
      </p>
    </section>
  );
};

export default AdminHeader;
