
import { ScrollArea } from "./ui/scroll-area";
import { HistorySlide } from "./HistorySlide";

export interface HistoryItem {
  id: string;
  prompt: string;
  response: string;
  timestamp: string;
}

interface HistorySidebarProps {
  history: HistoryItem[];
  selectedId?: string;
  onSelectHistory: (item: HistoryItem) => void;
}

export const HistorySidebar = ({ history, selectedId, onSelectHistory }: HistorySidebarProps) => {
  return (
    <aside className="w-80 bg-[#F6F6F7] p-4 border-l h-screen">
      <h2 className="text-lg font-semibold mb-4">History</h2>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="space-y-2">
          {history.map((item) => (
            <HistorySlide
              key={item.id}
              prompt={item.prompt}
              timestamp={item.timestamp}
              isSelected={item.id === selectedId}
              onClick={() => onSelectHistory(item)}
            />
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
};
