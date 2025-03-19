
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AuthButtonsProps {
  fullWidth?: boolean;
}

const AuthButtons = ({ fullWidth = false }: AuthButtonsProps) => {
  return (
    <>
      <Button
        variant="ghost"
        className={cn(
          "text-foreground/80 hover:text-foreground",
          fullWidth && "w-full justify-center"
        )}
        asChild
      >
        <Link to="/auth/sign-in">Sign In</Link>
      </Button>
      <Button
        variant="default"
        className={cn(fullWidth && "w-full justify-center")}
        asChild
      >
        <Link to="/auth/sign-up">Sign Up</Link>
      </Button>
    </>
  );
};

export default AuthButtons;
