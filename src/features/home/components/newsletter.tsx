"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Newsletter() {
  return (
    <div className="p-6 rounded-xl bg-beige-3 flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold text-beige-12">
          New Prompt-Engineering Jobs Every Week
        </p>
        <p className="text-base text-beige-12">
          Get the freshest prompt-engineering openings in your inbox every Monday
        </p>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        <Input placeholder="Email address" className="bg-floated w-full" />
        <Button>Subscribe</Button>
      </div>
    </div>
  );
}

export default Newsletter;