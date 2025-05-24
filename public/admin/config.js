window.CMS.init({
  config: {
    backend: {
      name: "git-gateway", // atau "github" kalau kamu hosting di GitHub Pages
      branch: "main" // atau "mufty-experiences" sesuai repo kamu
    },
    media_folder: "public/uploads",
    public_folder: "/uploads",

    collections: [
      {
        name: "posts",
        label: "Blog Posts",
        folder: "src/posts",
        create: true,
        slug: "{{slug}}",
        fields: [
          { label: "Title", name: "title", widget: "string" },
          { label: "Slug", name: "slug", widget: "string" },
          { label: "Date", name: "date", widget: "datetime" },
          { label: "Description", name: "description", widget: "text" },
          { label: "Image", name: "image", widget: "image" },
          { label: "Body", name: "body", widget: "markdown" }
        ]
      }
    ]
  }
});
