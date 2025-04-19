
import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="bg-[#1A1F2C] text-white px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/eb5e62fb-6c65-4a02-a6a8-d6f099b0df11.png" 
              alt="Test Bot Logo" 
              className="h-8 w-8" 
            />
            <span className="text-xl font-bold">Test Bot</span>
          </Link>
          <div className="flex space-x-4">
            <Link 
              to="/"
              className="px-3 py-1.5 rounded-md hover:bg-[#9b87f5]/20 transition-colors flex items-center gap-2"
            >
              <Home size={18} color="#9b87f5" />
              Home
            </Link>
            {!isHomePage && (
              <>
                <Link 
                  to="/quick-test"
                  className="px-3 py-1.5 rounded-md hover:bg-[#9b87f5]/20 transition-colors"
                >
                  Quick Test
                </Link>
                <Link 
                  to="/regression"
                  className="px-3 py-1.5 rounded-md hover:bg-[#9b87f5]/20 transition-colors"
                >
                  Regression
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
