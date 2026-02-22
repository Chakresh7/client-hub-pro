const links = ["Features", "Pricing", "Blog", "Privacy Policy", "Terms"];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-heading font-bold text-foreground">Hublo</span>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <span className="text-sm text-muted-foreground">
          Made with ❤️ in Gujarat, India
        </span>
      </div>
    </footer>
  );
}
