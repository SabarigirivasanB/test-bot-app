
import { useState } from "react";
import { PromptInput } from "@/components/PromptInput";
import { ResponseDisplay } from "@/components/ResponseDisplay";
import { HistorySidebar, HistoryItem } from "@/components/HistorySidebar";
import { FavoritesSidebar, FavoriteItem } from "@/components/FavoritesSidebar";
import { EnvironmentSelector } from "@/components/EnvironmentSelector";
import { ApplicationSelector } from "@/components/ApplicationSelector";
import { useToast } from "@/hooks/use-toast";

const QuickTest = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [favorites] = useState<FavoriteItem[]>([
    { id: "1", prompt: "Run test for login page", timestamp: "10:30 AM" },
    { id: "2", prompt: "Verify product checkout", timestamp: "11:45 AM" },
    { id: "3", prompt: "Check payment integration", timestamp: "02:15 PM" },
  ]);
  const [currentResponse, setCurrentResponse] = useState("");
  const [selectedId, setSelectedId] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [environment, setEnvironment] = useState("");
  const [application, setApplication] = useState("");
  const [promptValue, setPromptValue] = useState("");
  const [error, setError] = useState<string>();
  const { toast } = useToast();

  const handlePromptSubmit = async (prompt: string) => {
    setIsLoading(true);
    setError(undefined);
    setPromptValue(""); // Clear the prompt input after submission
    
    try {
      if (!prompt.trim()) {
        throw new Error("Please enter a valid prompt");
      }

      if (!environment) {
        throw new Error("Please select an environment");
      }

      if (!application) {
        throw new Error("Please select an application");
      }

      const mockResponse = await new Promise((resolve, reject) => {
        const shouldFail = Math.random() < 0.3; // 30% chance of failure for demo
        
        setTimeout(() => {
          if (shouldFail) {
            reject(new Error("Request timed out. Please try again."));
          } else {
            resolve(`Response for "${prompt}" with env: ${environment}, app: ${application}`);
          }
        }, 1000);
      });

      const newItem: HistoryItem = {
        id: Date.now().toString(),
        prompt,
        response: mockResponse as string,
        timestamp: new Date().toLocaleTimeString(),
      };

      setHistory((prev) => [newItem, ...prev]);
      setCurrentResponse(mockResponse as string);
      setSelectedId(newItem.id);

      toast({
        variant: "success",
        title: "Success",
        description: "Prompt processed successfully",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to process prompt. Please try again.";
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
      setCurrentResponse("");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectHistory = (item: HistoryItem) => {
    setSelectedId(item.id);
    setCurrentResponse(item.response);
    setPromptValue(item.prompt); // Populate the prompt input with selected history item
  };

  const handleSelectFavorite = (prompt: string) => {
    setPromptValue(prompt);
  };

  return (
    <div className="flex h-[calc(100vh-3rem)]">
      <FavoritesSidebar favorites={favorites} onSelectFavorite={handleSelectFavorite} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white p-4 border-b grid grid-cols-2 gap-4">
          <EnvironmentSelector value={environment} onChange={setEnvironment} />
          <ApplicationSelector value={application} onChange={setApplication} />
        </div>
        
        <div className="flex-1 flex flex-col p-6 gap-6 overflow-hidden">
          <div className="flex-1 overflow-auto">
            <ResponseDisplay 
              response={currentResponse} 
              isLoading={isLoading}
              error={error}
            />
          </div>
          <div className="sticky bottom-0 bg-white pt-4">
            <PromptInput 
              onSubmit={handlePromptSubmit} 
              isLoading={isLoading} 
              value={promptValue}
              onChange={setPromptValue}
            />
          </div>
        </div>
      </div>
      
      <HistorySidebar
        history={history}
        selectedId={selectedId}
        onSelectHistory={handleSelectHistory}
      />
    </div>
  );
};

export default QuickTest;
