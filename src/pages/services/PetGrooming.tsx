
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

export default PetGrooming;
