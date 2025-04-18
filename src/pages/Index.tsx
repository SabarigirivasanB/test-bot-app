
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-[#1A1F2C]">Welcome to Test Bot</h1>
      <p className="text-lg text-gray-600 max-w-3xl mb-12">
        Choose your testing approach below to get started.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="border rounded-lg p-6 h-full hover:shadow-md transition-shadow bg-white flex flex-col items-center text-center">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
            <circle cx="32" cy="32" r="32" fill="#9b87f5"/>
            <path d="M18 32L27 41L46 22" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
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
