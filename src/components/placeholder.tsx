import { LucideAlertCircle } from "lucide-react";
import { Alert } from "./ui/alert";

type PlaceholderProps = {
  label: string;
};

function Placeholder({ label }: PlaceholderProps) {
  return (
    <div className="flex flex-1 animate-fade-from-top items-center justify-center self-center">
      <Alert variant="destructive" className="w-full max-w-lg">
        <LucideAlertCircle />

        {label}
      </Alert>
    </div>
  );
}

export { Placeholder };
