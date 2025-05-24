const Footer = () => {
  const yearNow = new Date().getFullYear();

  return (
    <footer className="bg-hijautua text-sm text-hijaulakeabu">
      {/* Link section */}
      <div className="py-4 flex justify-center">
        <ul className="flex flex-wrap gap-6 list-disc list-inside">
          <li>
            <a
              href="/terms"
              className="hover:underline hover:text-kuninglidah text-hijaulakeabu"
            >
              Term & Conditions
            </a>
          </li>
          <li>
            <a
              href="/privacy"
              className="hover:underline hover:text-kuninglidah text-hijaulakeabu"
            >
              Privacy Policies
            </a>
          </li>
          <li>
            <a
              href="/faq"
              className="hover:underline hover:text-kuninglidah text-hijaulakeabu"
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="bg-hijaulakeabu text-center py-3 text-xs text-hijautua">
        © Mufty Experiences by{" "}
        <a
          href="https://zahrohcorp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-kuninglidah hover:underline"
        >
          Zahroh Corp
        </a>
        : 2021 - {yearNow}
      </div>
    </footer>
  );
};

export default Footer;
