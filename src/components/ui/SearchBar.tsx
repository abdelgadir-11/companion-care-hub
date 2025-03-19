
import { useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  fullWidth?: boolean;
}

const SearchBar = ({ fullWidth = false }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Handle search logic
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn(
        "relative group",
        fullWidth ? "w-full" : "w-48 md:w-64"
      )}
    >
      <div className={cn(
        "flex items-center bg-secondary/50 rounded-full transition-all duration-300",
        isFocused ? "bg-background border-primary ring-1 ring-primary/30" : "border-transparent",
        fullWidth ? "w-full" : ""
      )}>
        <span className="absolute left-3 text-muted-foreground">
          <Search size={18} />
        </span>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full py-2 pl-10 pr-8 rounded-full bg-transparent focus:outline-none text-sm"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
