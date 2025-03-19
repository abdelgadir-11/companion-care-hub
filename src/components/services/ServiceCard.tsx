
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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

export default ServiceCard;
