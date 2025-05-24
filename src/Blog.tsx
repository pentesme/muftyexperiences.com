import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./lib/supabaseClient";
import { Search } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  description: string;
  image: string;
  category: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filtered, setFiltered] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("id, title, slug, date, description, image, category")
        .order("date", { ascending: false });

      if (error) {
        console.error("Gagal mengambil artikel:", error.message);
        setLoading(false);
        return;
      }

      const formatted = data.map((post) => ({
        ...post,
        date: new Date(post.date).toLocaleDateString("id-ID"),
      }));

      setPosts(formatted);
      setFiltered(formatted);
      setLoading(false);

      // Kategori unik
      const uniqueCategories = Array.from(
        new Set(formatted.map((post) => post.category).filter(Boolean))
      );
      setCategories(uniqueCategories);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const lowerQuery = query.toLowerCase().trim();
    const result = posts.filter(
      (post) =>
        (post.title.toLowerCase().includes(lowerQuery) ||
          post.description.toLowerCase().includes(lowerQuery)) &&
        (categoryFilter ? post.category === categoryFilter : true)
    );
    setFiltered(result);
  }, [query, posts, categoryFilter]);

  return (
    <div className="section-container animate-fade-in text-textgelap dark:text-textterang">
      {/* 🔍 Search Bar + Filter */}
      <div className="max-w-2xl mx-auto mt-6 mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari artikel..."
            className="w-full pl-10 pr-4 py-2 border border-hijautua rounded bg-white text-sm text-black placeholder:text-gray-400"
          />
        </div>

        {categories.length > 0 && (
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full px-4 py-2 border border-hijautua rounded bg-white text-sm text-black"
          >
            <option value="">Semua Kategori</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        )}
      </div>

      <h1 className="heading-main text-center mb-12">Blog</h1>

      {loading ? (
        <div className="grid gap-8 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-hijaulakeabu dark:bg-hijaulakeabu rounded-lg shadow p-4 space-y-4"
            >
              <div className="w-full h-48 bg-hijautua/30 rounded"></div>
              <div className="h-4 bg-hijautua/40 w-3/4 rounded"></div>
              <div className="h-3 bg-hijautua/40 w-2/3 rounded"></div>
              <div className="h-3 bg-hijautua/20 w-full rounded"></div>
              <div className="h-8 bg-kuninglidah/50 w-1/3 rounded"></div>
            </div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-sm italic">Tidak ditemukan hasil untuk pencarian.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {filtered.map((post) => (
            <article
              key={post.id}
              className="bg-hijaulakeabu dark:bg-hijaulakeabu rounded-lg shadow overflow-hidden animate-slide-up transition"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6 space-y-3">
                <h2 className="text-xl font-semibold text-hijautua dark:text-kuninglidah">
                  {post.title}
                </h2>
                <p className="text-sm text-textgelap/60 dark:text-textterang/60">
                  {post.date}
                </p>
                {post.category && (
                  <span className="text-xs font-medium bg-kuninglidah text-tomboltext px-2 py-1 rounded">
                    {post.category}
                  </span>
                )}
                <p className="text-sm">{post.description}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-block mt-3 bg-hijautua text-hijaulakeabu px-4 py-2 rounded hover:bg-green-900 transition-colors"
                  aria-label={`Baca selengkapnya tentang ${post.title}`}
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
