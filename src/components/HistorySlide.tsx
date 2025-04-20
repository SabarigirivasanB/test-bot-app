
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Plus } from "lucide-react";

interface HistorySlideProps {
  prompt: string;
  timestamp: string;
  isSelected?: boolean;
  onClick: () => void;
  showFavoriteIcon?: boolean;
}

export const HistorySlide = ({ 
  prompt, 
  timestamp, 
  isSelected, 
  onClick, 
  showFavoriteIcon = false 
}: HistorySlideProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button
          onClick={onClick}
          className={`w-full text-left p-3 rounded-lg transition-all group ${
            isSelected 
              ? "bg-[#9b87f5] text-white"
              : "bg-white hover:bg-gray-50"
          }`}
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <p className="text-sm font-medium truncate">{prompt}</p>
              <p className={`text-xs mt-1 ${isSelected ? "text-white/80" : "text-gray-500"}`}>
                {timestamp}
              </p>
            </div>
            {showFavoriteIcon && (
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to favorites logic will be implemented here
                    }}
                    className={`p-1 rounded-full transition-colors ${
                      isSelected 
                        ? "text-white hover:bg-white/20" 
                        : "text-gray-400 hover:bg-[#9b87f5]/20 hover:text-[#9b87f5]"
                    }`}
                  >
                    <Plus size={16} />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-[#9b87f5] text-white">
                  <p>Add to favorites</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </button>
      </HoverCardTrigger>
      <HoverCardContent 
        className="w-80 bg-[#F1F0FB] text-gray-800 rounded-lg shadow-lg p-4 border border-gray-200"
      >
        <div className="space-y-2">
          <p className="text-sm">{prompt}</p>
          <p className="text-xs text-gray-600">{timestamp}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
