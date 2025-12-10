import { Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const TopBar = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/akwaibomtourism", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/akwaibomtourism", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/akwaibomtourism", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/akwaibomtourism", label: "YouTube" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-3 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm">
          {/* Left - Email */}
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <Mail size={14} />
            <span>Mail us on: </span>
            <a 
              href="mailto:info@akwaibomtourism.com" 
              className="hover:text-secondary transition-colors underline-offset-2 hover:underline"
            >
              info@akwaibomtourism.com
            </a>
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline">Follow us on:</span>
            <div className="flex items-center space-x-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hover:text-secondary transition-all duration-300 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
