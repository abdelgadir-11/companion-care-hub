
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/ui/SearchBar";
import AuthButtons from "@/components/auth/AuthButtons";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're on a service page to handle active states
  const isServicePage = location.pathname.startsWith("/services/");
  
  // Handle scroll event for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pet Shop", path: "/pet-shop" },
    { name: "Pet Care", path: "/pet-care" },
    { name: "About Us", path: "/about-us" },
  ];

  // Determine if a nav link is active
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    if (path !== "/" && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            aria-label="Go to homepage"
          >
            <span className="text-xl font-display font-semibold text-foreground">PetPal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "nav-link",
                  isActive(link.path) && "active"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search, Auth buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchBar />
            <AuthButtons />
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 animate-fade-in">
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-between items-center mb-8">
              <Link 
                to="/" 
                className="text-xl font-display font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PetPal
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4 mb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-lg py-2",
                    isActive(link.path) ? "text-primary font-medium" : "text-foreground/80"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto space-y-4">
              <SearchBar fullWidth />
              <div className="flex flex-col space-y-3">
                <AuthButtons fullWidth />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
