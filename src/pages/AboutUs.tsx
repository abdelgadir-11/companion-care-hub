
import { Check, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  // Team members
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & Chief Veterinarian",
      bio: "With over 15 years of experience in veterinary medicine, Dr. Johnson founded PetPal with a vision to make quality pet care accessible to all.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Michael brings 10+ years of tech expertise, developing our telemedicine platform and emergency location services for pet owners.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Pet Nutrition",
      bio: "A certified animal nutritionist, Emily ensures our shop offers only the highest quality, nutritionally balanced pet food and treats.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Company values
  const values = [
    {
      title: "Compassionate Care",
      description: "We treat every pet with the same care and attention we would give to our own beloved companions."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every service we provide, from grooming to veterinary telemedicine."
    },
    {
      title: "Innovation",
      description: "We continuously seek innovative solutions to improve pet care and make it more accessible."
    },
    {
      title: "Integrity",
      description: "We operate with honesty and transparency in all our interactions with pet owners and partners."
    }
  ];

  return (
    <div className="page-container">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
          About Us
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
          Our Mission & Story
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Dedicated to enhancing the lives of pets and their owners through exceptional care and innovative services.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl blur-xl opacity-60"></div>
          <img
            src="https://images.unsplash.com/photo-1536500152107-01ab1422f932?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Happy pets"
            className="relative rounded-2xl shadow-md w-full h-96 object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-display font-medium mb-6">Our Mission</h2>
          <p className="text-lg mb-6">
            At PetPal, our mission is to enhance the lives of pets and their owners by providing exceptional care, innovative services, and accessible pet health solutions.
          </p>
          <p className="text-lg mb-8">
            We believe every pet deserves the highest quality care, and every owner deserves peace of mind. Through our comprehensive suite of services, we aim to strengthen the bond between pets and their human companions.
          </p>
          <div className="flex items-center">
            <Heart className="h-10 w-10 text-primary mr-4" />
            <span className="text-xl font-medium">Caring for pets since 2015</span>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <h2 className="text-3xl font-display font-medium mb-6 text-center">Our Story</h2>
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <p className="text-lg mb-6">
            PetPal began with a simple idea: pet care should be accessible, convenient, and of the highest quality. Founded in 2015 by Dr. Sarah Johnson, a veterinarian who saw firsthand the challenges pet owners faced in accessing timely care, PetPal started as a small mobile grooming service in New York City.
          </p>
          <p className="text-lg mb-6">
            As word spread about our exceptional service, we expanded to include veterinary telemedicine, a curated pet shop, and emergency location services. By 2018, we had grown to serve thousands of pet owners across the East Coast.
          </p>
          <p className="text-lg mb-6">
            Today, PetPal is a comprehensive pet care platform with a nationwide network of veterinarians, groomers, and pet care specialists. We continue to innovate and expand our services, driven by our foundational commitment to enhancing the lives of pets and their owners.
          </p>
          <p className="text-lg">
            Our journey continues as we develop new ways to serve the pet community, always guided by our core values and unwavering dedication to animal welfare.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-display font-medium mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value) => (
            <div key={value.title} className="bg-card border border-border rounded-xl p-6 transition-all hover:shadow-md hover:border-primary/20">
              <div className="flex items-start">
                <span className="mr-4 bg-primary/10 rounded-full p-2 text-primary">
                  <Check className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-display font-medium mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-card border border-border rounded-xl overflow-hidden transition-all hover:shadow-md hover:border-primary/20">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
        <h3 className="text-2xl font-display font-medium mb-4">Join the PetPal Family</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Experience the difference that our passionate care and innovative services can make for you and your pet.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="rounded-full px-8" asChild>
            <Link to="/services">Explore Our Services</Link>
          </Button>
          <Button variant="outline" className="rounded-full px-8" asChild>
            <Link to="/auth/sign-up">Create an Account</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
