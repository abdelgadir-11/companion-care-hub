
import { useState } from "react";
import { Search, MapPin, Star, Phone, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

export default VetFinder;
