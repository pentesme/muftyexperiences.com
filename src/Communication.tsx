import { useState } from "react";

const Communication = () => {
  const [form, setForm] = useState({ title: "", message: "", email: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.title && form.message && form.email) {
      setTimeout(() => {
        setSuccess(true);
      }, 500);
    }
  };

  const handleReset = () => {
    setForm({ title: "", message: "", email: "" });
    setSuccess(false);
  };

  return (
    <div className="section-container animate-fade-in text-textgelap dark:text-textterang">
      {/* Seksi 2 */}
      {!success ? (
        <section className="max-w-xl mx-auto bg-hijaulakeabu dark:bg-hijaulakeabu p-6 rounded-lg shadow-md space-y-6 animate-slide-down">
          <h2 className="heading-main text-center">Terima Kasih.</h2>
          <p className="text-center">
            Karena kamu sudah sampai halaman ini, kami percaya bahwa ada yang ingin disampaikan pada kami. <br />
            <span className="italic">Feel free</span> untuk menyampaikan:
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm text-hijautua dark:text-kuninglidah">Judul</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-hijautua dark:border-kuninglidah rounded bg-white dark:bg-gelapagelap text-textgelap dark:text-textterang focus:outline-none focus:ring-2 focus:ring-kuninglidah"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-hijautua dark:text-kuninglidah">Pesan</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-hijautua dark:border-kuninglidah rounded bg-white dark:bg-gelapagelap text-textgelap dark:text-textterang focus:outline-none focus:ring-2 focus:ring-kuninglidah"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-hijautua dark:text-kuninglidah">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-hijautua dark:border-kuninglidah rounded bg-white dark:bg-gelapagelap text-textgelap dark:text-textterang focus:outline-none focus:ring-2 focus:ring-kuninglidah"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 rounded-md bg-kuninglidah text-tomboltext font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-300 transition-colors"
            >
              Submit
            </button>
          </form>
        </section>
      ) : (
        <section className="max-w-md mx-auto bg-hijaulakeabu dark:bg-hijaulakeabu p-6 rounded-lg shadow-md text-center space-y-4 animate-fade-in">
          <h3 className="text-2xl font-semibold text-hijautua dark:text-kuninglidah">
            Pesan Berhasil Disampaikan
          </h3>
          <p>Terima Kasih</p>
          <button
            onClick={handleReset}
            className="px-6 py-2 rounded-md bg-kuninglidah text-tomboltext font-semibold hover:bg-yellow-400 dark:hover:bg-yellow-300 transition-colors"
          >
            OK
          </button>
        </section>
      )}
    </div>
  );
};

export default Communication;
