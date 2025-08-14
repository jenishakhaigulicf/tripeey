import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputWithLabel({
  label,
  placeholder,
}: {
  label: string;
  //   TODO input with label type
  placeholder: string;
}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="email">{label}</Label>
      <Input placeholder={placeholder} />
    </div>
  );
}
