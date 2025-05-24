import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { supabase } from "../../lib/supabaseClient";
import { getCurrentUser } from "../../features/auth/authHelpers";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

const AdminPostForm = ({ editId = null }: { editId?: string | null }) => {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    date: new Date().toISOString().slice(0, 10),
    description: "",
    image: "",
    content: "",
  });

  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      if (!editId) return;
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", editId)
        .single();

      if (error || !data) {
        setMessage("Gagal memuat artikel untuk edit.");
        return;
      }

      setForm({
        title: data.title,
        slug: data.slug,
        date: new Date(data.date).toISOString().slice(0, 10),
        description: data.description,
        image: data.image,
        content: data.content,
      });
    };

    loadPost();
  }, [editId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };

    if (name === "title") {
      updatedForm.slug = slugify(value);
    }

    setForm(updatedForm);
  };

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const filename = `${Date.now()}-${file.name}`;
    setUploading(true);
    const { error } = await supabase.storage
      .from("blog-images")
      .upload(filename, file);

    if (error) {
      setMessage("Gagal upload gambar: " + error.message);
    } else {
      const { data: publicUrl } = supabase.storage
        .from("blog-images")
        .getPublicUrl(filename);

      setForm((prev) => ({
        ...prev,
        image: publicUrl?.publicUrl || "",
      }));
      setMessage("✅ Gambar berhasil diupload.");
    }

    setUploading(false);
  };

  const handleSubmit = async () => {
    const user = await getCurrentUser();
    if (!user) {
      setMessage("Gagal: tidak ada user login.");
      return;
    }

    if (!editId) {
      const { data: existing } = await supabase
        .from("posts")
        .select("slug")
        .eq("slug", form.slug)
        .single();

      if (existing) {
        setMessage("❌ Slug sudah digunakan. Silakan ubah judul atau slug.");
        return;
      }
    }

    const payload = {
      ...form,
      date: new Date(form.date),
      author_id: user.id,
    };

    let error;
    if (editId) {
      ({ error } = await supabase.from("posts").update(payload).eq("id", editId));
    } else {
      ({ error } = await supabase.from("posts").insert([payload]));
    }

    if (error) {
      setMessage("Gagal menyimpan artikel: " + error.message);
    } else {
      setMessage(editId ? "✅ Artikel berhasil diperbarui!" : "✅ Artikel berhasil ditambahkan!");
      setForm({
        title: "",
        slug: "",
        date: new Date().toISOString().slice(0, 10),
        description: "",
        image: "",
        content: "",
      });
    }
  };

  return (
    <section className="bg-hijaulakeabu dark:bg-hijaulakeabu p-6 rounded-lg shadow-md animate-fade-in space-y-6">
      <h2 className="text-lg font-semibold text-hijautua dark:text-kuninglidah">
        {editId ? "Edit Artikel" : "Tulis Artikel Baru"}
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Judul"
          value={form.title}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-hijautua text-black"
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug (tanpa spasi)"
          value={form.slug}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-hijautua text-black"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-hijautua text-black"
        />
        <input
          type="text"
          name="image"
          placeholder="URL Gambar (atau upload di bawah)"
          value={form.image}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-hijautua text-black"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full text-sm text-gray-500 bg-white"
          disabled={uploading}
        />
        {uploading && <p className="text-xs italic">Mengunggah gambar...</p>}

        <textarea
          name="description"
          placeholder="Deskripsi Singkat"
          value={form.description}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-hijautua text-black"
        />
        <textarea
          name="content"
          placeholder="Isi Artikel (Markdown)"
          value={form.content}
          onChange={handleChange}
          className="w-full px-4 py-2 h-40 rounded border border-hijautua text-black"
        />

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-kuninglidah text-tomboltext px-6 py-2 rounded hover:bg-yellow-400 transition"
        >
          {editId ? "Perbarui Artikel" : "Simpan Artikel"}
        </button>

        {message && <p className="text-sm mt-2">{message}</p>}
      </div>

      {/* 🔍 Preview Artikel */}
      <div className="pt-8 border-t border-hijautua mt-6">
        <h3 className="text-base font-semibold text-hijautua dark:text-kuninglidah mb-2">
          Preview Artikel
        </h3>
        {form.image && (
          <img
            src={form.image}
            alt="Preview Gambar"
            className="w-full max-h-60 object-cover rounded mb-4"
          />
        )}
        <h1 className="text-xl font-bold mb-2">{form.title}</h1>
        <p className="text-sm text-textgelap/70 dark:text-textterang/70 mb-2">
          {new Date(form.date).toLocaleDateString("id-ID")}
        </p>
        <div className="prose max-w-none prose-p:mb-4 prose-p:leading-relaxed text-textgelap dark:prose-invert">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {form.content || "*Tidak ada konten*"}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default AdminPostForm;
