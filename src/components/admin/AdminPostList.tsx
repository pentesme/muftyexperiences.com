import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import AdminPostForm from "./AdminPostForm";

interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  description: string;
}

const AdminPostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState<string | null>(null);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const loadPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("id, title, slug, date, description")
        .order("date", { ascending: false });

      if (error) {
        console.error("Gagal memuat artikel:", error.message);
        setLoading(false);
        return;
      }

      const formatted = data.map((post) => ({
        ...post,
        date: new Date(post.date).toLocaleDateString("id-ID"),
      }));

      setPosts(formatted);
      setLoading(false);
    };

    loadPosts();
  }, [refresh]);

  const handleEditClick = (id: string) => {
    setEditId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteClick = async (id: string) => {
    const confirmed = confirm("Yakin ingin menghapus artikel ini?");
    if (!confirmed) return;

    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) {
      alert("Gagal menghapus: " + error.message);
    } else {
      alert("✅ Artikel berhasil dihapus.");
      setRefresh((r) => r + 1);
    }
  };

  const handleDoneEditing = () => {
    setEditId(null);
    setRefresh((r) => r + 1); // refresh post list
  };

  return (
    <div className="space-y-12">
      <AdminPostForm editId={editId} />

      <section className="bg-hijaulakeabu dark:bg-hijaulakeabu p-6 rounded-lg shadow-md animate-slide-up">
        <h2 className="text-lg font-semibold text-hijautua dark:text-kuninglidah mb-4">
          Daftar Artikel
        </h2>

        {loading ? (
          <p className="text-sm italic text-center">Memuat data artikel...</p>
        ) : posts.length === 0 ? (
          <p className="text-sm italic text-center text-textgelap/60 dark:text-textterang/60">
            Belum ada artikel.
          </p>
        ) : (
          <ul className="space-y-4 text-sm">
            {posts.map((post) => (
              <li key={post.id} className="border-b border-hijautua/30 pb-2">
                <h3 className="font-bold text-hijautua dark:text-kuninglidah">{post.title}</h3>
                <p className="text-xs text-textgelap/60 dark:text-textterang/60">{post.date}</p>
                <p className="mt-1">{post.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex gap-4">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-kuninglidah hover:underline text-sm"
                    >
                      Buka →
                    </Link>
                    <button
                      onClick={() => handleEditClick(post.id)}
                      className="text-xs text-hijautua hover:text-kuninglidah font-semibold"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(post.id)}
                      className="text-xs text-red-700 hover:text-red-500 font-semibold"
                    >
                      🗑️ Hapus
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {editId && (
        <div className="text-center text-sm mt-4">
          <button
            onClick={handleDoneEditing}
            className="text-hijautua hover:text-kuninglidah underline"
          >
            ✅ Selesai Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminPostList;
