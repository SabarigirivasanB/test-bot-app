
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

interface HistorySlideProps {
  prompt: string;
  timestamp: string;
  isSelected?: boolean;
  onClick: () => void;
}

export const HistorySlide = ({ prompt, timestamp, isSelected, onClick }: HistorySlideProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button
          onClick={onClick}
          className={`w-full text-left p-3 rounded-lg transition-all ${
            isSelected 
              ? "bg-[#9b87f5] text-white"
              : "bg-white hover:bg-gray-50"
          }`}
        >
          <p className="text-sm font-medium truncate">{prompt}</p>
          <p className={`text-xs mt-1 ${isSelected ? "text-white/80" : "text-gray-500"}`}>
            {timestamp}
          </p>
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <p className="text-sm">{prompt}</p>
          <p className="text-xs text-gray-500">{timestamp}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
