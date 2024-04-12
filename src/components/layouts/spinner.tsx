import { Loader2 } from "lucide-react";

export const Spinner = () => {
  return <>
    <button type="button" className="animate-spin h-6 w-6" disabled>
      <Loader2 />
    </button>
  </>
};