const Footer = () => {
  const quickLinks = [
    { name: "Courses", href: "#courses" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" }
  ];

  const socialLinks = [
    { name: "YouTube", icon: "📺", href: "#" },
    { name: "Instagram", icon: "📸", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" }
  ];

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                CineSlice
              </span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering the next generation of creative technologists with cutting-edge courses 
              and industry mentorship.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-xl hover:bg-electric-orange hover:scale-110 transition-all duration-300 hover:shadow-glow-orange"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-electric-orange transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>Email: hello@cineslice.com</p>
              <p>Phone: +91 9876543210</p>
              <p>Address: Hyderabad, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © 2024 CineSlice Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-electric-orange transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-electric-orange transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;