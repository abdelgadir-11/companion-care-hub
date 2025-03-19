
import { Heart, Stethoscope, MessageCircle, MapPin } from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";

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

export default Services;
