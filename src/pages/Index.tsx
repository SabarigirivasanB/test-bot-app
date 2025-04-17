
import { useState } from "react";
import { PromptInput } from "@/components/PromptInput";
import { ResponseDisplay } from "@/components/ResponseDisplay";
import { HistorySidebar, HistoryItem } from "@/components/HistorySidebar";

const Index = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [currentResponse, setCurrentResponse] = useState("");
  const [selectedId, setSelectedId] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const handlePromptSubmit = async (prompt: string) => {
    setIsLoading(true);
    
    // TODO: Replace with actual API call
    const mockResponse = "This is a mock response. Replace with actual API integration.";
    
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

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col p-6 gap-6 overflow-hidden">
        <h1 className="text-2xl font-bold text-[#1A1F2C]">Test Bot</h1>
        <div className="flex-1 overflow-auto">
          <ResponseDisplay response={currentResponse} isLoading={isLoading} />
        </div>
        <div className="sticky bottom-0 bg-white pt-4">
          <PromptInput onSubmit={handlePromptSubmit} isLoading={isLoading} />
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

export default Index;
