
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ResponseDisplayProps {
  response: string;
  isLoading?: boolean;
  error?: string;
}

export const ResponseDisplay = ({ response, isLoading, error }: ResponseDisplayProps) => {
  if (isLoading) {
    return (
      <div className="animate-pulse p-4 rounded-lg bg-gray-100">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          {error}
        </AlertDescription>
      </Alert>
    );
  }

  if (!response) {
    return (
      <div className="p-4 rounded-lg bg-white border">
        <pre className="whitespace-pre-wrap font-sans text-[#1A1F2C]">
          Response will appear here...
        </pre>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-lg bg-white border">
      <pre className="whitespace-pre-wrap font-sans text-[#1A1F2C]">
        {response}
      </pre>
    </div>
  );
};
