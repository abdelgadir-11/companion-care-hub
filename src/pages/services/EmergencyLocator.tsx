
import { Search, MapPin, Phone, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EmergencyLocator = () => {
  // Mock emergency vet clinics data
  const emergencyClinics = [
    {
      id: 1,
      name: "City Animal Emergency Hospital",
      address: "123 Emergency Drive, New York, NY",
      phone: "(555) 911-PETS",
      hours: "Open 24/7",
      distance: "1.2 miles away",
      status: "Open now",
      waitTime: "~15 min wait"
    },
    {
      id: 2,
      name: "Metro Pet Emergency Center",
      address: "456 Urgent Care Lane, New York, NY",
      phone: "(555) 247-VETS",
      hours: "Open 24/7",
      distance: "2.8 miles away",
      status: "Open now",
      waitTime: "~30 min wait"
    },
    {
      id: 3,
      name: "Brooklyn Animal Critical Care",
      address: "789 Critical Path, Brooklyn, NY",
      phone: "(555) 365-HELP",
      hours: "Open 24/7",
      distance: "4.3 miles away",
      status: "Open now",
      waitTime: "~10 min wait"
    }
  ];

  // Emergency guidelines
  const emergencyGuidelines = [
    {
      condition: "Difficulty Breathing",
      symptoms: "Labored breathing, gasping, blue or pale gums",
      action: "Immediate veterinary attention required"
    },
    {
      condition: "Severe Bleeding",
      symptoms: "Uncontrolled bleeding, large wounds",
      action: "Apply pressure with clean cloth and seek immediate care"
    },
    {
      condition: "Seizures",
      symptoms: "Convulsions, loss of consciousness, paddling legs",
      action: "Time the seizure, keep away from hazards, seek immediate care"
    },
    {
      condition: "Potential Poisoning",
      symptoms: "Vomiting, drooling, lethargy after ingesting something suspicious",
      action: "Call pet poison hotline (888-426-4435) and seek vet care"
    }
  ];

  return (
    <div className="page-container">
      {/* Alert Banner */}
      <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 mb-12 flex items-center">
        <AlertTriangle className="h-6 w-6 text-destructive mr-3 shrink-0" />
        <div>
          <p className="font-medium text-destructive">For life-threatening emergencies:</p>
          <p className="text-foreground/80">Call ahead to the nearest emergency clinic while en route. This service helps locate care but is not a substitute for immediate medical attention.</p>
        </div>
      </div>

      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Emergency Services
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-6">
          Emergency Pet Locator
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Quickly find emergency veterinary care near you when every second counts.
        </p>
      </div>

      {/* Search Box */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-12 shadow-sm">
        <form className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Enter your location"
              className="pl-10 h-12"
              defaultValue="New York, NY" 
            />
          </div>
          <Button className="h-12 px-8">Find Emergency Care</Button>
        </form>
      </div>

      {/* Results */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-display font-medium">Nearby Emergency Clinics</h2>
          <span className="text-muted-foreground">3 facilities found</span>
        </div>
        
        <div className="space-y-4">
          {emergencyClinics.map((clinic) => (
            <div key={clinic.id} className="bg-card border border-border rounded-xl overflow-hidden transition-all hover:shadow-md hover:border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                <div className="md:col-span-2">
                  <div className="flex flex-wrap gap-2 mb-1">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {clinic.status}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {clinic.waitTime}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {clinic.distance}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-2">{clinic.name}</h3>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                      <span>{clinic.address}</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                      <span>{clinic.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                      <span className="font-medium text-green-600">{clinic.hours}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center gap-3">
                  <Button className="w-full" variant="default">
                    Get Directions
                  </Button>
                  <Button className="w-full" variant="outline">
                    Call Clinic
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Guidelines */}
      <div className="mb-16">
        <h2 className="text-2xl font-display font-medium mb-6">
          Pet Emergency Guidelines
        </h2>
        <p className="text-muted-foreground mb-6">
          Recognize these common emergency situations and know how to respond:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyGuidelines.map((guideline) => (
            <div key={guideline.condition} className="bg-card border border-border rounded-xl p-5">
              <h3 className="text-lg font-medium mb-2">{guideline.condition}</h3>
              <p className="text-sm mb-1"><span className="font-medium">Signs:</span> {guideline.symptoms}</p>
              <p className="text-sm text-destructive font-medium">{guideline.action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Kit */}
      <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
        <h3 className="text-2xl font-display font-medium mb-6">Pet Emergency Kit Essentials</h3>
        <p className="text-muted-foreground mb-6">
          Be prepared for emergencies by keeping these items on hand:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-background rounded-xl p-4">
            <ul className="space-y-2">
              <li>Gauze pads and rolls</li>
              <li>Adhesive tape</li>
              <li>Cotton balls</li>
              <li>Fresh 3% hydrogen peroxide</li>
            </ul>
          </div>
          <div className="bg-background rounded-xl p-4">
            <ul className="space-y-2">
              <li>Digital thermometer</li>
              <li>Tweezers</li>
              <li>Scissors (blunt-tipped)</li>
              <li>Styptic powder</li>
            </ul>
          </div>
          <div className="bg-background rounded-xl p-4">
            <ul className="space-y-2">
              <li>Pet carrier</li>
              <li>Muzzle (not for vomiting pets)</li>
              <li>Leash and collar</li>
              <li>Your vet's contact information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyLocator;
