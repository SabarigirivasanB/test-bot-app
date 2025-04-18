
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface EnvironmentSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const EnvironmentSelector = ({ value, onChange }: EnvironmentSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="environment">Environment</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id="environment" className="w-full">
          <SelectValue placeholder="Select environment" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="test1">Test1</SelectItem>
          <SelectItem value="test2">Test2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
