
import { useState } from "react";
import { SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export const PromptInput = ({ 
  onSubmit, 
  isLoading = false, 
  value = "", 
  onChange 
}: PromptInputProps) => {
  const [prompt, setPrompt] = useState(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    onSubmit(prompt);
    setPrompt("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setPrompt(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  // Update local state when value prop changes
  if (value !== prompt && value !== undefined) {
    setPrompt(value);
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Textarea
        value={prompt}
        onChange={handleChange}
        placeholder="Enter your prompt..."
        className="pr-16 resize-none min-h-[80px] max-h-[200px] overflow-y-auto"
      />
      <Button 
        type="submit" 
        size="icon"
        disabled={isLoading || !prompt.trim()} 
        className="absolute bottom-2 right-2 bg-[#9b87f5] hover:bg-[#7E69AB]"
      >
        <SendIcon size={18} />
      </Button>
    </form>
  );
};
