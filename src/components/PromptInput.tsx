
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
}

export const PromptInput = ({ onSubmit, isLoading = false }: PromptInputProps) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt);
      setPrompt("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex gap-2">
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your test automation prompt..."
          className="flex-1 resize-none"
          rows={3}
        />
        <Button type="submit" disabled={isLoading || !prompt.trim()} className="bg-[#9b87f5] hover:bg-[#7E69AB]">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};
