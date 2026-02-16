const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="mono text-xs text-muted-foreground">
        © 2025 Priyanshu Sahu. Built with passion & code.
      </p>
      <div className="flex gap-6">
        <a href="https://github.com/Priyanshups07" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors neon-underline">
          GitHub
        </a>
        <a href="mailto:iampriyanshusahu@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors neon-underline">
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
