"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCategories from "@/features/job-categories/hooks/use-categories";
import { useState } from "react";

function Newsletter() {
  const { categories } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
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
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="!bg-floated md:w-full md:max-w-[215px]">
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All categories</SelectItem>
            {categories.map((category) => {
              return (
                <SelectItem value={category.slug} key={category.id}>
                  {category.name}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger className="!bg-floated md:w-full md:max-w-[215px]">
            <SelectValue placeholder="All locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All locations</SelectItem>
            <SelectItem value="houston">Houston</SelectItem>
            <SelectItem value="california">California</SelectItem>
            <SelectItem value="new-york">New York</SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder="Email address" className="bg-floated w-full" />
        <Button>Subscribe</Button>
      </div>
    </div>
  );
}

export default Newsletter;
