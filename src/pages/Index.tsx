
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookMarked } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-[#1A1F2C]">Welcome to Test Bot</h1>
      <p className="text-lg text-gray-600 max-w-3xl mb-12">
        An AI-powered testing assistant to help you automate and streamline your testing processes.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <Link to="/quick-test" className="w-full">
          <div className="border rounded-lg p-6 h-full hover:shadow-md transition-shadow bg-white flex flex-col items-center text-center">
            <CheckCircle size={48} className="text-[#9b87f5] mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Quick Test</h2>
            <p className="text-gray-600 mb-6">
              Quickly test scenarios by chatting with our AI assistant. Select environments and applications for context-aware testing.
            </p>
            <Button className="mt-auto">Get Started</Button>
          </div>
        </Link>
        
        <Link to="/regression" className="w-full">
          <div className="border rounded-lg p-6 h-full hover:shadow-md transition-shadow bg-white flex flex-col items-center text-center">
            <BookMarked size={48} className="text-[#9b87f5] mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Regression Testing</h2>
            <p className="text-gray-600 mb-6">
              Run comprehensive regression tests with configurable test data and selective test case execution.
            </p>
            <Button className="mt-auto">Get Started</Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Index;
