
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PetCare = () => {
  // Pet care resources
  const careResources = [
    {
      title: "Nutrition Guides",
      description: "Comprehensive guides for proper pet nutrition by species, age, and health conditions.",
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Training Resources",
      description: "Professional tips and techniques for behavior training and obedience.",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Health & Wellness",
      description: "Preventative care information and common health issue identification.",
      image: "https://images.unsplash.com/photo-1607923516154-69b53782f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Grooming Tips",
      description: "DIY grooming guides and professional recommendations for all breeds.",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Pet care tips
  const careTips = [
    {
      id: 1,
      title: "Regular Veterinary Check-ups",
      description: "Schedule annual wellness exams, even when your pet appears healthy, to catch potential issues early.",
      icon: "🩺"
    },
    {
      id: 2,
      title: "Proper Nutrition",
      description: "Feed a balanced, age-appropriate diet and maintain proper portion control to prevent obesity.",
      icon: "🍽️"
    },
    {
      id: 3,
      title: "Regular Exercise",
      description: "Ensure daily physical activity appropriate for your pet's breed, age, and health status.",
      icon: "🏃‍♂️"
    },
    {
      id: 4,
      title: "Dental Care",
      description: "Brush your pet's teeth regularly and provide dental treats or toys to promote oral health.",
      icon: "🦷"
    },
    {
      id: 5,
      title: "Preventative Medications",
      description: "Maintain regular flea, tick, and heartworm prevention as recommended by your veterinarian.",
      icon: "💊"
    },
    {
      id: 6,
      title: "Regular Grooming",
      description: "Brush your pet regularly, keep nails trimmed, and bathe as needed for their specific coat type.",
      icon: "✂️"
    }
  ];

  return (
    <div className="page-container">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Pet Care
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
          Comprehensive Pet Care Resources
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Everything you need to keep your pets healthy, happy, and thriving.
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden mb-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent"></div>
        <div className="relative py-20 px-8 md:px-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6">
            Expert Care For Your Beloved Companions
          </h2>
          <p className="text-lg mb-8 max-w-lg">
            From nutrition to grooming, training to health care, we provide comprehensive resources to help you provide the best care for your pets.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <a href="#care-tips">Care Tips</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Care Resources */}
      <div className="mb-16">
        <h2 className="text-3xl font-display font-medium mb-8">Pet Care Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careResources.map((resource) => (
            <div key={resource.title} className="group bg-card border border-border rounded-xl overflow-hidden transition-all hover:shadow-md hover:border-primary/20">
              <div className="grid grid-cols-1 sm:grid-cols-3">
                <div className="sm:col-span-1">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
                <div className="p-6 sm:col-span-2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-medium mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                  </div>
                  <Button variant="ghost" className="self-start group flex items-center p-0 hover:bg-transparent">
                    <span className="text-primary">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Care Tips */}
      <div id="care-tips" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-display font-medium mb-8">Essential Pet Care Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careTips.map((tip) => (
            <div key={tip.id} className="bg-card border border-border rounded-xl p-6 transition-all hover:shadow-md hover:border-primary/20">
              <div className="text-3xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-medium mb-2">{tip.title}</h3>
              <p className="text-muted-foreground">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Care Checklist */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-display font-medium mb-6">Daily Pet Care Checklist</h2>
          <p className="text-muted-foreground mb-6">
            Ensure your pet receives proper daily care by following this essential checklist:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-3 mt-1 bg-primary/10 rounded-full p-1 text-primary">
                <Check className="h-4 w-4" />
              </span>
              <div>
                <span className="font-medium">Fresh water and appropriate food</span>
                <p className="text-sm text-muted-foreground">Refresh water daily and provide proper portions of quality food.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 bg-primary/10 rounded-full p-1 text-primary">
                <Check className="h-4 w-4" />
              </span>
              <div>
                <span className="font-medium">Exercise and playtime</span>
                <p className="text-sm text-muted-foreground">Provide species-appropriate physical activity and mental stimulation.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 bg-primary/10 rounded-full p-1 text-primary">
                <Check className="h-4 w-4" />
              </span>
              <div>
                <span className="font-medium">Brief health check</span>
                <p className="text-sm text-muted-foreground">Monitor for any changes in behavior, appetite, or physical condition.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 bg-primary/10 rounded-full p-1 text-primary">
                <Check className="h-4 w-4" />
              </span>
              <div>
                <span className="font-medium">Clean living environment</span>
                <p className="text-sm text-muted-foreground">Maintain clean bedding, litter boxes, cages, or aquariums.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 bg-primary/10 rounded-full p-1 text-primary">
                <Check className="h-4 w-4" />
              </span>
              <div>
                <span className="font-medium">Social interaction</span>
                <p className="text-sm text-muted-foreground">Provide attention, affection, and companionship appropriate for your pet.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl blur-xl opacity-60"></div>
          <img
            src="https://images.unsplash.com/photo-1542736143-29a8432162bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Pet care"
            className="relative rounded-2xl shadow-md w-full h-96 object-cover"
          />
        </div>
      </div>

      {/* Seasonal Care Section */}
      <div className="bg-primary/5 rounded-2xl p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-display font-medium mb-6">Seasonal Pet Care</h2>
        <p className="text-muted-foreground mb-8">
          Different seasons present unique challenges for pet care. Here's how to adapt your pet care routine throughout the year:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-background rounded-xl p-6">
            <h3 className="text-xl font-medium mb-3">Spring</h3>
            <ul className="space-y-2 text-sm">
              <li>Start flea and tick prevention</li>
              <li>Check for seasonal allergies</li>
              <li>Gradually increase outdoor activity</li>
              <li>Be cautious of spring plants (some are toxic)</li>
            </ul>
          </div>
          <div className="bg-background rounded-xl p-6">
            <h3 className="text-xl font-medium mb-3">Summer</h3>
            <ul className="space-y-2 text-sm">
              <li>Prevent overheating and dehydration</li>
              <li>Never leave pets in hot cars</li>
              <li>Provide shade during outdoor time</li>
              <li>Check for parasites regularly</li>
            </ul>
          </div>
          <div className="bg-background rounded-xl p-6">
            <h3 className="text-xl font-medium mb-3">Fall</h3>
            <ul className="space-y-2 text-sm">
              <li>Continue parasite prevention</li>
              <li>Be careful with rodent poisons</li>
              <li>Prepare for temperature changes</li>
              <li>Keep pets away from school supplies</li>
            </ul>
          </div>
          <div className="bg-background rounded-xl p-6">
            <h3 className="text-xl font-medium mb-3">Winter</h3>
            <ul className="space-y-2 text-sm">
              <li>Protect from cold temperatures</li>
              <li>Wipe paws after walks (salt irritation)</li>
              <li>Increase food for outdoor pets</li>
              <li>Ensure warm sleeping areas</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-white">
        <h3 className="text-2xl font-display font-medium mb-4">Need personalized pet care advice?</h3>
        <p className="mb-6 text-white/80 max-w-lg mx-auto">
          Our veterinarians are available to chat and provide tailored recommendations for your pet's specific needs.
        </p>
        <Button variant="outline" className="bg-white text-primary hover:bg-white/90 rounded-full px-8" asChild>
          <Link to="/services/chat-with-vets">Chat With a Vet</Link>
        </Button>
      </div>
    </div>
  );
};

export default PetCare;
