
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-display font-semibold">PetPal</span>
            </Link>
            <p className="text-muted-foreground max-w-xs mb-4">
              Providing exceptional care for your furry, feathered, and scaled companions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/pet-grooming" className="text-muted-foreground hover:text-primary transition-colors">Pet Grooming</Link></li>
              <li><Link to="/services/vet-finder" className="text-muted-foreground hover:text-primary transition-colors">Vet Finder</Link></li>
              <li><Link to="/services/chat-with-vets" className="text-muted-foreground hover:text-primary transition-colors">Chat with Vets</Link></li>
              <li><Link to="/services/emergency-locator" className="text-muted-foreground hover:text-primary transition-colors">Emergency Pet Locator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/pet-shop" className="text-muted-foreground hover:text-primary transition-colors">Pet Food</Link></li>
              <li><Link to="/pet-shop" className="text-muted-foreground hover:text-primary transition-colors">Accessories</Link></li>
              <li><Link to="/pet-shop" className="text-muted-foreground hover:text-primary transition-colors">Toys</Link></li>
              <li><Link to="/pet-shop" className="text-muted-foreground hover:text-primary transition-colors">Health Products</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/about-us" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} PetPal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
