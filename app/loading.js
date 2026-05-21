import { Spinner } from "@heroui/react";
export default function Loading() {
  return (
    <div className="min-h-[60vh] flex justify-center items-center">
      <Spinner size="lg" color="primary" label="Loading…" />
    </div>
  );
}
