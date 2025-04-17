
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ApplicationSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const ApplicationSelector = ({ value, onChange }: ApplicationSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="application">Application</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id="application" className="w-full">
          <SelectValue placeholder="Select application" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="app1">App1</SelectItem>
          <SelectItem value="app2">App2</SelectItem>
          <SelectItem value="app3">App3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
