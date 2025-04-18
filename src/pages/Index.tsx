
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, RotateCw, Server } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-[#1A1F2C]">Welcome to Test Bot</h1>
      <p className="text-lg text-gray-600 max-w-3xl mb-12">
        Choose your testing approach below to get started.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="border rounded-lg p-6 h-full hover:shadow-md transition-shadow bg-white flex flex-col items-center text-center">
          <div className="relative">
            <RotateCw size={48} className="text-[#9b87f5] mb-4" />
            <div className="absolute bottom-2 right-0 bg-green-500 rounded-full p-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="lucide lucide-check">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Quick Test</h2>
          <p className="text-gray-600 mb-8">
            Quickly test scenarios by chatting with our AI assistant. Select environments and applications for context-aware testing.
          </p>
          <Link to="/quick-test" className="mt-auto">
            <Button className="flex items-center gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="border rounded-lg p-6 h-full hover:shadow-md transition-shadow bg-white flex flex-col items-center text-center">
          <Server size={48} className="text-[#9b87f5] mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Regression Testing</h2>
          <p className="text-gray-600 mb-8">
            Run comprehensive regression tests with configurable test data and selective test case execution.
          </p>
          <Link to="/regression" className="mt-auto">
            <Button className="flex items-center gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
