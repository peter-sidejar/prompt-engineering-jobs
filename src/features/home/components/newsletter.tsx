"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import useCategories from "@/features/job-categories/hooks/use-categories";

function Newsletter() {
  const { categories } = useCategories();
  return (
    <div className="p-6 rounded-xl bg-beige-3 flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold text-beige-12">
          New Blue Collar Jobs Every Week
        </p>
        <p className="text-base text-beige-12">
          Receive the latests job opportunities to your inbox every Monday
        </p>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        <Select>
          <SelectTrigger className="!bg-floated md:w-full md:max-w-[215px]">All categories</SelectTrigger>
          <SelectContent>
            {categories.map((category) => {
              return (
                <SelectItem value={category.slug} key={category.id}>
                  {category.name}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="!bg-floated md:w-full md:max-w-[215px]">All locations</SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Huston</SelectItem>
            <SelectItem value="dark">California</SelectItem>
            <SelectItem value="system">New york</SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder="Email address" className="bg-floated w-full" />
        <Button>Subscribe</Button>
      </div>
    </div>
  );
}

export default Newsletter;
