import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  description: string;
  image: string;
  content: string;
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error || !data) {
        console.error("Gagal mengambil artikel:", error?.message || "tidak ditemukan");
        setPost(null);
      } else {
        setPost({
          ...data,
          date: new Date(data.date).toLocaleDateString("id-ID"),
        });
        document.title = `${data.title} | Mufty Experiences`;
      }

      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="section-container text-center animate-fade-in text-textgelap dark:text-textterang">
        <p>Memuat konten...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="section-container text-center animate-fade-in text-textgelap dark:text-textterang">
        <p className="text-sm italic">Artikel tidak ditemukan.</p>
        <Link
          to="/blog"
          className="inline-block mt-4 bg-hijautua text-hijaulakeabu px-4 py-2 rounded hover:bg-green-900 transition-colors"
        >
          ← Kembali ke Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="section-container max-w-3xl mx-auto space-y-8 animate-fade-in text-textgelap dark:text-textterang">
      <h1 className="text-3xl font-bold text-hijautua dark:text-kuninglidah">{post.title}</h1>
      <p className="text-sm text-textgelap/60 dark:text-textterang/60">{post.date}</p>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md shadow"
        />
      )}

      <div className="prose max-w-none prose-p:mb-4 prose-p:leading-relaxed text-textgelap dark:prose-invert dark:text-textterang animate-slide-up">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content || "*Konten kosong.*"}
        </ReactMarkdown>
      </div>

      <div className="pt-8 text-center">
        <Link
          to="/blog"
          className="bg-hijautua text-hijaulakeabu px-4 py-2 rounded hover:bg-green-900 transition-colors"
        >
          ← Kembali ke Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
