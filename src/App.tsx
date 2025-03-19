
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import PetShop from "./pages/PetShop";
import PetCare from "./pages/PetCare";
import AboutUs from "./pages/AboutUs";
import PetGrooming from "./pages/services/PetGrooming";
import VetFinder from "./pages/services/VetFinder";
import ChatWithVets from "./pages/services/ChatWithVets";
import EmergencyLocator from "./pages/services/EmergencyLocator";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/pet-shop" element={<Layout><PetShop /></Layout>} />
          <Route path="/pet-care" element={<Layout><PetCare /></Layout>} />
          <Route path="/about-us" element={<Layout><AboutUs /></Layout>} />
          
          {/* Service Pages */}
          <Route path="/services/pet-grooming" element={<Layout><PetGrooming /></Layout>} />
          <Route path="/services/vet-finder" element={<Layout><VetFinder /></Layout>} />
          <Route path="/services/chat-with-vets" element={<Layout><ChatWithVets /></Layout>} />
          <Route path="/services/emergency-locator" element={<Layout><EmergencyLocator /></Layout>} />
          
          {/* Auth Pages */}
          <Route path="/auth/sign-in" element={<Layout><SignIn /></Layout>} />
          <Route path="/auth/sign-up" element={<Layout><SignUp /></Layout>} />
          
          {/* 404 Page */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
