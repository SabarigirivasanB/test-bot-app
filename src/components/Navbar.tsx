
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-[#1A1F2C] text-white px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Test Bot</h1>
          <div className="flex space-x-4">
            <Link 
              to="/"
              className="px-3 py-1.5 rounded-md hover:bg-[#9b87f5]/20 transition-colors flex items-center gap-2"
            >
              <Home size={18} />
              Home
            </Link>
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
