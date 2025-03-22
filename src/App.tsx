
import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Check, ChevronDown, X, Menu, Facebook, Instagram, Twitter, Search, Eye, EyeOff, 
  MapPin, Star, Phone, Clock, ArrowRight, Heart, Stethoscope, MessageCircle, Video, AlertTriangle } from "lucide-react";

// Utility functions
const cn = (...inputs: any[]) => {
  return inputs.filter(Boolean).join(" ");
};

// Theme Provider
const ThemeProvider = ({ 
  children, 
  attribute = "data-theme",
  defaultTheme = "light" 
}: { 
  children: React.ReactNode; 
  attribute?: string;
  defaultTheme?: string;
}) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute(attribute, theme);
  }, [theme, attribute]);

  return <>{children}</>;
};

// Button Component
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// Label Component
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
);
Label.displayName = "Label";

// Checkbox Component
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// Tabs Components
const Tabs = ({ defaultValue, className, children, ...props }: { 
  defaultValue: string; 
  className?: string; 
  children: React.ReactNode; 
  [key: string]: any;
}) => {
  const [value, setValue] = useState(defaultValue);
  
  return (
    <div className={cn("w-full", className)} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { value, setValue });
        }
        return child;
      })}
    </div>
  );
};

const TabsList = ({ className, children, value, setValue }: { 
  className?: string; 
  children: React.ReactNode;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className={cn("flex", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { value, setValue });
        }
        return child;
      })}
    </div>
  );
};

const TabsTrigger = ({ value, setValue, children, className, ...props }: { 
  value: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  const isActive = props.value === value;
  
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
        className
      )}
      onClick={() => setValue && setValue(props.value)}
      {...props}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, children, className, ...props }: { 
  value: string; 
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  const isActive = props.value === value;
  
  if (!isActive) return null;
  
  return (
    <div
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Accordion Components
const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// Collapsible Components
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

// Dialog Components
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// Auth Buttons Component
interface AuthButtonsProps {
  fullWidth?: boolean;
}

const AuthButtons = ({ fullWidth = false }: AuthButtonsProps) => {
  return (
    <>
      <Button
        variant="ghost"
        className={cn(
          "text-foreground/80 hover:text-foreground",
          fullWidth && "w-full justify-center"
        )}
        asChild
      >
        <Link to="/auth/sign-in">Sign In</Link>
      </Button>
      <Button
        variant="default"
        className={cn(fullWidth && "w-full justify-center")}
        asChild
      >
        <Link to="/auth/sign-up">Sign Up</Link>
      </Button>
    </>
  );
};

// Search Bar Component
interface SearchBarProps {
  fullWidth?: boolean;
}

const SearchBar = ({ fullWidth = false }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn(
        "relative group",
        fullWidth ? "w-full" : "w-48 md:w-64"
      )}
    >
      <div className={cn(
        "flex items-center bg-secondary/50 rounded-full transition-all duration-300",
        isFocused ? "bg-background border-primary ring-1 ring-primary/30" : "border-transparent",
        fullWidth ? "w-full" : ""
      )}>
        <span className="absolute left-3 text-muted-foreground">
          <Search size={18} />
        </span>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full py-2 pl-10 pr-8 rounded-full bg-transparent focus:outline-none text-sm"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </form>
  );
};

// Service Card Component
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon, path, className }: ServiceCardProps) => {
  return (
    <Link 
      to={path} 
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20",
        className
      )}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" />
      
      <div className="relative">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
          <ArrowRight className="text-primary opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
        </div>
        
        <h3 className="text-xl font-display font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
};

// Page Transition Component
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      setDisplayLocation(location);
      
      // Scroll to top on page change
      window.scrollTo(0, 0);
    }
  };

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${
        transitionStage === "fadeIn" ? "opacity-100" : "opacity-0"
      }`}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
};

// Header Component
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

// Footer Component
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

// Layout Component
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
};

// Sign In Page
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    // Handle sign in logic
  };

  return (
    <div className="page-container max-w-md mx-auto py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-display font-medium tracking-tight mb-2">Welcome Back</h1>
        <p className="text-muted-foreground">Sign in to access your PetPal account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <Link to="/auth/forgot-password" className="text-sm text-primary hover:text-primary/80 transition-colors">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Input 
              id="password" 
              type={showPassword ? "text" : "password"} 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="remember-me" 
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
          />
          <Label htmlFor="remember-me" className="text-sm cursor-pointer">Remember me for 30 days</Label>
        </div>

        <Button type="submit" className="w-full">
          Sign In
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" type="button" className="w-full">
            Google
          </Button>
          <Button variant="outline" type="button" className="w-full">
            Apple
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Don't have an account?{" "}
          <Link to="/auth/sign-up" className="text-primary hover:text-primary/80 transition-colors">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

// Sign Up Page
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password, agreedToTerms });
    // Handle sign up logic
  };

  return (
    <div className="page-container max-w-md mx-auto py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-display font-medium tracking-tight mb-2">Create an Account</h1>
        <p className="text-muted-foreground">Join PetPal to access all our pet care services</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input 
            id="name" 
            type="text" 
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input 
              id="password" 
              type={showPassword ? "text" : "password"} 
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Password must be at least 8 characters long with a mix of letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox 
            id="terms" 
            checked={agreedToTerms}
            onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            required
          />
          <Label htmlFor="terms" className="text-sm cursor-pointer">
            I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
          </Label>
        </div>

        <Button type="submit" className="w-full">
          Create Account
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" type="button" className="w-full">
            Google
          </Button>
          <Button variant="outline" type="button" className="w-full">
            Apple
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Already have an account?{" "}
          <Link to="/auth/sign-in" className="text-primary hover:text-primary/80 transition-colors">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

// Services Page
const Services = () => {
  const services = [
    {
      title: "Pet Grooming",
      description: "Our professional grooming services include bathing, haircuts, nail trimming, ear cleaning, and more. We use premium, pet-safe products and provide a stress-free environment for your pet.",
      icon: <Heart className="h-6 w-6" />,
      path: "/services/pet-grooming",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Vet Finder",
      description: "Find and book appointments with trusted veterinarians in your area. Our platform connects you with qualified professionals specializing in various areas of pet healthcare.",
      icon: <Stethoscope className="h-6 w-6" />,
      path: "/services/vet-finder",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Chat With Vets",
      description: "Get expert advice through our telemedicine platform. Connect with licensed veterinarians via video, voice, or text chat for non-emergency concerns, follow-ups, or quick questions.",
      icon: <MessageCircle className="h-6 w-6" />,
      path: "/services/chat-with-vets",
      image: "https://images.unsplash.com/photo-1594559287908-d600a423705f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Emergency Pet Locator",
      description: "Quickly find emergency pet care services near you when every second counts. Our tool helps you locate the nearest 24/7 emergency clinics, provides directions, and displays contact information.",
      icon: <MapPin className="h-6 w-6" />,
      path: "/services/emergency-locator",
      image: "https://images.unsplash.com/photo-1597633575560-8fe1585b0525?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="page-container">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Our Services
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
          Premium Pet Services
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          We offer a wide range of comprehensive services designed to meet all your pet care needs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {services.map((service, index) => (
          <div key={service.title} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl blur-xl opacity-60"></div>
              <img
                src={service.image}
                alt={service.title}
                className="relative w-full h-64 md:h-96 object-cover rounded-2xl shadow-md"
              />
            </div>
            <div>
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
                path={service.path}
                className="h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// PetGrooming Page
const PetGrooming = () => {
  const groomingServices = [
    { name: "Bath & Brush", price: "$40+", description: "Deep cleaning shampoo, conditioning, and brushing" },
    { name: "Full Grooming", price: "$65+", description: "Bath, haircut, nail trim, ear cleaning, and more" },
    { name: "Nail Trim", price: "$15", description: "Professional nail trimming for your pet's comfort" },
    { name: "Teeth Cleaning", price: "$25", description: "Maintain your pet's dental health" },
    { name: "De-shedding Treatment", price: "$35+", description: "Reduces shedding by up to 90%" },
    { name: "Flea & Tick Treatment", price: "$30", description: "Eliminate parasites and prevent infestations" }
  ];

  const benefits = [
    "Professional, certified groomers",
    "Stress-free environment for your pet",
    "Premium, pet-safe products",
    "Breed-specific grooming techniques",
    "Special care for senior pets",
    "Convenient scheduling"
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden mb-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent"></div>
        <div className="relative py-20 px-8 md:px-12 max-w-2xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium">
            Pet Grooming Services
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
            Professional Grooming For Your Pet
          </h1>
          <p className="text-xl mb-8 max-w-lg">
            Our skilled groomers provide professional services tailored to your pet's specific needs, breed, and coat type.
          </p>
          <Button size="lg" className="rounded-full px-8">
            Book Appointment
          </Button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-display font-medium mb-8">Our Grooming Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groomingServices.map((service) => (
            <div key={service.name} className="bg-card border border-border rounded-xl p-6 transition-all hover:shadow-md hover:border-primary/20">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">{service.name}</h3>
                <span className="text-primary font-medium">{service.price}</span>
              </div>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-display font-medium mb-6">Why Choose Our Grooming Services</h2>
          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start">
                <span className="mr-3 mt-1 bg-primary/10 rounded-full p-1 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl blur-xl opacity-60"></div>
          <img
            src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Happy groomed pet"
            className="relative rounded-2xl shadow-md w-full h-80 object-cover"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h3 className="text-2xl font-display font-medium mb-2">Ready to book a grooming session?</h3>
          <p className="text-muted-foreground mb-6 md:mb-0">Give your pet the care they deserve with our professional grooming services.</p>
        </div>
        <Button size="lg" className="rounded-full px-8 group whitespace-nowrap">
          Book Now
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

// VetFinder Page
const VetFinder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock data for vets
  const vets = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "General Veterinarian",
      rating: 4.9,
      reviews: 127,
      address: "123 Pet Care Lane, New York, NY",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 8am-6pm, Sat: 9am-2pm",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Veterinary Surgeon",
      rating: 4.8,
      reviews: 98,
      address: "456 Animal Health Ave, New York, NY",
      phone: "(555) 234-5678",
      hours: "Mon-Fri: 9am-7pm, Sat: 10am-3pm",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Feline Specialist",
      rating: 4.7,
      reviews: 112,
      address: "789 Whisker Street, New York, NY",
      phone: "(555) 345-6789",
      hours: "Mon-Fri: 8am-5pm, Sat: 9am-1pm",
      image: "https://images.unsplash.com/photo-1559839914-17aae19cec71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="page-container">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Vet Finder
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
          Find & Book Trusted Veterinarians
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connect with qualified veterinarians in your area and book appointments with ease.
        </p>
      </div>

      {/* Search Box */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-12 shadow-sm">
        <form className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by veterinarian name or specialty"
              className="pl-10 h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative md:w-80">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Location"
              className="pl-10 h-12"
              defaultValue="New York, NY" 
            />
          </div>
          <Button className="h-12 px-8">Search</Button>
        </form>
      </div>

      {/* Results */}
      <div className="mb-16">
        <h2 className="text-2xl font-display font-medium mb-6">Available Veterinarians</h2>
        <div className="space-y-6">
          {vets.map((vet) => (
            <div key={vet.id} className="bg-card border border-border rounded-xl overflow-hidden transition-all hover:shadow-md hover:border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-1">
                  <img 
                    src={vet.image} 
                    alt={vet.name}
                    className="w-full h-full object-cover aspect-square md:aspect-auto"
                  />
                </div>
                <div className="p-6 md:col-span-3">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-medium">{vet.name}</h3>
                      <p className="text-muted-foreground">{vet.specialty}</p>
                    </div>
                    <div className="flex items-center bg-primary/10 px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 text-primary mr-1 fill-primary" />
                      <span className="text-sm font-medium">{vet.rating} ({vet.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                      <span>{vet.address}</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                      <span>{vet.phone}</span>
                    </div>
                    <div className="flex items-start md:col-span-2">
                      <Clock className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                      <span>{vet.hours}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="group">
                      Book Appointment
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
        <h3 className="text-2xl font-display font-medium mb-4">Are you a veterinarian?</h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Join our platform to connect with pet owners in your area and grow your practice.
        </p>
        <Button variant="outline" className="rounded-full px-8">
          Join as a Veterinarian
        </Button>
      </div>
    </div>
  );
};

// Main App Component
const MainApp = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout><div>Home Page</div></Layout>} />
            <Route path="/services" element={<Layout><Services /></Layout>} />
            <Route path="/pet-shop" element={<Layout><div>Pet Shop</div></Layout>} />
            <Route path="/pet-care" element={<Layout><div>Pet Care</div></Layout>} />
            <Route path="/about-us" element={<Layout><div>About Us</div></Layout>} />
            
            {/* Service Pages */}
            <Route path="/services/pet-grooming" element={<Layout><PetGrooming /></Layout>} />
            <Route path="/services/vet-finder" element={<Layout><VetFinder /></Layout>} />
            <Route path="/services/chat-with-vets" element={<Layout><div>Chat With Vets</div></Layout>} />
            <Route path="/services/emergency-locator" element={<Layout><div>Emergency Locator</div></Layout>} />
            
            {/* Auth Pages */}
            <Route path="/auth/sign-in" element={<Layout><SignIn /></Layout>} />
            <Route path="/auth/sign-up" element={<Layout><SignUp /></Layout>} />
            
            {/* 404 Page */}
            <Route path="*" element={<Layout><div>Page Not Found</div></Layout>} />
          </Routes>
        </HashRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default MainApp;
