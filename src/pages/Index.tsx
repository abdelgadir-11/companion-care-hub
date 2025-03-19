
import { ArrowRight, Heart, Stethoscope, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/services/ServiceCard";

const Index = () => {
  const services = [
    {
      title: "Pet Grooming",
      description: "Professional grooming services for all breeds, from bathing to styling.",
      icon: <Heart className="h-6 w-6" />,
      path: "/services/pet-grooming"
    },
    {
      title: "Vet Finder",
      description: "Find and book appointments with trusted veterinarians in your area.",
      icon: <Stethoscope className="h-6 w-6" />,
      path: "/services/vet-finder"
    },
    {
      title: "Chat With Vets",
      description: "Get expert advice through our telemedicine platform, anytime, anywhere.",
      icon: <MessageCircle className="h-6 w-6" />,
      path: "/services/chat-with-vets"
    },
    {
      title: "Emergency Locator",
      description: "Quickly find emergency pet care services near you when every second counts.",
      icon: <MapPin className="h-6 w-6" />,
      path: "/services/emergency-locator"
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Your Pet's Health & Happiness
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-6">
                Premium Pet Care At Your Fingertips
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                We offer comprehensive pet services designed to improve the wellbeing of your beloved companions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full px-8" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                  <Link to="/pet-shop">Visit Shop</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-2xl opacity-60"></div>
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Happy dog with owner"
                className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Our Services
            </div>
            <h2 className="section-heading">
              Comprehensive Care For Your Pet
            </h2>
            <p className="section-subheading mx-auto">
              Discover our range of premium pet services designed to keep your companions healthy, happy, and well-groomed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                className={`animate-fade-in [animation-delay:${index * 100}ms]`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full group" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary/80 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
                  Ready to give your pet the care they deserve?
                </h2>
                <p className="text-white/80 mb-8 max-w-md text-lg">
                  Join thousands of pet owners who trust us with their furry family members.
                </p>
                <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90" asChild>
                  <Link to="/auth/sign-up">Get Started Today</Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Happy cat"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
