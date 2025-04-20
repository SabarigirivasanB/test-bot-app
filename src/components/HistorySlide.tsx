import React from 'react';
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
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-lg transition-all group relative ${
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
                className={`p-1 rounded-full transition-colors absolute top-1 right-1 ${
                  isSelected 
                    ? "text-white hover:bg-white/30" 
                    : "text-gray-400 hover:bg-[#9b87f5]/30 hover:text-[#9b87f5]"
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
  );
};
