
import { useState } from "react";
import { PromptInput } from "@/components/PromptInput";
import { ResponseDisplay } from "@/components/ResponseDisplay";
import { HistorySidebar, HistoryItem } from "@/components/HistorySidebar";
import { FavoritesSidebar, FavoriteItem } from "@/components/FavoritesSidebar";
import { EnvironmentSelector } from "@/components/EnvironmentSelector";
import { ApplicationSelector } from "@/components/ApplicationSelector";

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

  const handlePromptSubmit = async (prompt: string) => {
    setIsLoading(true);
    
    // TODO: Replace with actual API call including environment and application
    const mockResponse = `Response for "${prompt}" with env: ${environment || "None"}, app: ${application || "None"}`;
    
    const newItem: HistoryItem = {
      id: Date.now().toString(),
      prompt,
      response: mockResponse,
      timestamp: new Date().toLocaleTimeString(),
    };

    setHistory((prev) => [newItem, ...prev]);
    setCurrentResponse(mockResponse);
    setSelectedId(newItem.id);
    setIsLoading(false);
  };

  const handleSelectHistory = (item: HistoryItem) => {
    setSelectedId(item.id);
    setCurrentResponse(item.response);
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
            <ResponseDisplay response={currentResponse} isLoading={isLoading} />
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
