import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo-main.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Logo" className="h-20 w-20" />
              <div>
                <div className="font-display text-lg font-bold">Akwa Ibom State</div>
                <div className="text-xs opacity-90">Hotels & Tourism Board</div>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Your gateway to discovering the beauty, culture, and hospitality of Nigeria's land of promise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#destinations" className="hover:text-secondary transition-colors">Destinations</a></li>
              <li><a href="#hotels" className="hover:text-secondary transition-colors">Hotels</a></li>
              <li><a href="#culture" className="hover:text-secondary transition-colors">Culture</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Akwa Ibom State Hotels & Tourism Board, Uyo, Nigeria</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0" />
                <span>+234 (0) 803 XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@akwaibomtourism.ng</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <p className="text-sm opacity-90 mb-4">
              Stay connected for the latest updates and travel inspiration
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-primary-foreground/10 hover:bg-secondary p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-primary-foreground/10 hover:bg-secondary p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-primary-foreground/10 hover:bg-secondary p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Akwa Ibom State Hotels and Tourism Board. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
