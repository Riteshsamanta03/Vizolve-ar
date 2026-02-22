import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505]">
      <div className="text-center">
        <h1 className="mb-4 text-7xl font-bold text-white">404</h1>
        <p className="mb-6 text-xl text-[#a1a1aa]">Oops! Page not found</p>
        <Button asChild className="bg-primary hover:bg-[#ff5252] text-white rounded-[10px] px-6 py-3">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
