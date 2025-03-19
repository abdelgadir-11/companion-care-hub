
import { MessageCircle, Video, Phone, Clock, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ChatWithVets = () => {
  const benefits = [
    "24/7 access to licensed veterinarians",
    "Quick responses to non-emergency questions",
    "Convenient follow-up consultations",
    "Secure and private communication",
    "Prescription refills when appropriate",
    "Lower cost than in-person visits for minor concerns"
  ];

  const faqs = [
    {
      question: "How does the chat service work?",
      answer: "Our telemedicine platform connects you with licensed veterinarians via video, voice, or text chat. Simply create an account, describe your pet's issue, and you'll be connected with a qualified vet who can provide guidance."
    },
    {
      question: "Can vets prescribe medication through chat?",
      answer: "In some cases, veterinarians can prescribe or refill medications through our platform, but this depends on your location, regulations, and whether the vet has an established relationship with your pet."
    },
    {
      question: "What issues are appropriate for telemedicine?",
      answer: "Telemedicine is suitable for non-emergency concerns, follow-up questions, behavior issues, nutritional advice, and minor symptoms. Emergency situations always require immediate in-person veterinary care."
    },
    {
      question: "How much does it cost?",
      answer: "We offer various plans starting at $15 for a single text consultation. Our monthly subscription provides unlimited text consultations and discounted video appointments."
    }
  ];

  return (
    <div className="page-container">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Telemedicine
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
          Chat With Licensed Veterinarians
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get expert veterinary advice from the comfort of your home, anytime you need it.
        </p>
      </div>

      {/* Service Types Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="text" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="text" className="text-base py-3">
              <MessageCircle className="h-5 w-5 mr-2" />
              Text Chat
            </TabsTrigger>
            <TabsTrigger value="video" className="text-base py-3">
              <Video className="h-5 w-5 mr-2" />
              Video Call
            </TabsTrigger>
            <TabsTrigger value="phone" className="text-base py-3">
              <Phone className="h-5 w-5 mr-2" />
              Phone Call
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="text" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-display font-medium mb-4">Text Chat Consultations</h2>
                <p className="mb-6 text-muted-foreground">
                  Send messages and photos to licensed veterinarians and receive expert advice for non-emergency concerns.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span>Responses within 30 minutes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Share photos and medical history</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Secure messaging platform</span>
                  </li>
                </ul>
                <Button className="rounded-full px-8 group">
                  Start Text Chat
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl blur-xl opacity-60"></div>
                <img
                  src="https://images.unsplash.com/photo-1616587894289-86480e533129?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Pet owner texting with vet"
                  className="relative rounded-2xl shadow-md w-full h-80 object-cover"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="video" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-display font-medium mb-4">Video Call Consultations</h2>
                <p className="mb-6 text-muted-foreground">
                  Face-to-face video consultations allow veterinarians to visually assess your pet and provide more detailed guidance.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span>15-30 minute appointments</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>HD video quality</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Schedule in advance or on-demand</span>
                  </li>
                </ul>
                <Button className="rounded-full px-8 group">
                  Schedule Video Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl blur-xl opacity-60"></div>
                <img
                  src="https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Video call with veterinarian"
                  className="relative rounded-2xl shadow-md w-full h-80 object-cover"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="phone" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-display font-medium mb-4">Phone Call Consultations</h2>
                <p className="mb-6 text-muted-foreground">
                  Speak directly with a veterinarian over the phone for immediate guidance and advice.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span>10-20 minute consultations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Available during extended hours</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Quick and convenient</span>
                  </li>
                </ul>
                <Button className="rounded-full px-8 group">
                  Request Phone Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl blur-xl opacity-60"></div>
                <img
                  src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Phone call with vet"
                  className="relative rounded-2xl shadow-md w-full h-80 object-cover"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className="text-3xl font-display font-medium mb-8 text-center">
          Benefits of Veterinary Telemedicine
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 transition-all hover:shadow-md hover:border-primary/20">
              <div className="flex items-start">
                <span className="mr-3 bg-primary/10 rounded-full p-1.5 text-primary">
                  <Check className="h-5 w-5" />
                </span>
                <span className="text-lg">{benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="mb-16">
        <h2 className="text-3xl font-display font-medium mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-white">
        <h3 className="text-2xl font-display font-medium mb-4">Ready to get expert veterinary advice?</h3>
        <p className="mb-6 text-white/80 max-w-lg mx-auto">
          Sign up today and get your first consultation at 50% off.
        </p>
        <Button variant="outline" className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
          Start Now
        </Button>
      </div>
    </div>
  );
};

export default ChatWithVets;
