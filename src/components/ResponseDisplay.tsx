
interface ResponseDisplayProps {
  response: string;
  isLoading?: boolean;
}

export const ResponseDisplay = ({ response, isLoading }: ResponseDisplayProps) => {
  if (isLoading) {
    return (
      <div className="animate-pulse p-4 rounded-lg bg-gray-100">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-lg bg-white border">
      <pre className="whitespace-pre-wrap font-sans text-[#1A1F2C]">
        {response || "Response will appear here..."}
      </pre>
    </div>
  );
};
