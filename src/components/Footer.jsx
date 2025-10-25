const Footer = () => {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-foreground/60 mb-4 md:mb-0">
            © 2024 Jake Marlon Destura. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground/60 hover:text-foreground transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;