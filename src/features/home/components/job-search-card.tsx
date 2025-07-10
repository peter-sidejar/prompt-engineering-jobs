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
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import { SearchFilters, getUniqueCategories, getUniqueLocations, getUniqueJobTypes } from "@/hooks/use-search";
import { jobs } from "@/features/jobs/hooks/use-jobs";

interface JobSearchCardProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
}

function JobSearchCard({ filters, onFiltersChange }: JobSearchCardProps) {
  const categories = getUniqueCategories(jobs);
  const locations = getUniqueLocations(jobs);
  const jobTypes = getUniqueJobTypes(jobs);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({ ...filters, query: e.target.value });
  };

  const handleCategoryChange = (value: string) => {
    onFiltersChange({ ...filters, category: value });
  };

  const handleLocationChange = (value: string) => {
    onFiltersChange({ ...filters, location: value });
  };

  const handleJobTypeChange = (value: string) => {
    onFiltersChange({ ...filters, jobType: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      query: "",
      category: "",
      location: "",
      jobType: "",
    });
  };
  return (
    <>
      <div className="flex flex-col gap-4 p-4 bg-background rounded-xl shadow-fancy md:hidden">
        <div className="flex items-center gap-3">
          <Search className="size-6 text-neutral-a8" />
          <Input
            placeholder="Search by title, company or location"
            className="placeholder:text-base px-0 text-muted-foreground border-0 shadow-none focus-visible:border-0 focus-visible:ring-0"
            value={filters.query}
            onChange={handleQueryChange}
          />
        </div>
        <Button onClick={clearFilters} variant="outline">Clear Filters</Button>
      </div>

      <div className="hidden md:block rounded-xl bg-background shadow-fancy">
        <div className="flex gap-8 w-full">
          <div className="flex items-center gap-3 p-4 w-full">
            <Search className="size-6 text-neutral-a8" />
            <Input
              placeholder="Search by title, company or location"
              className="placeholder:text-base flex-1 px-0 text-muted-foreground border-0 shadow-none focus-visible:border-0 focus-visible:ring-0"
              value={filters.query}
              onChange={handleQueryChange}
            />
            <Button onClick={clearFilters} variant="outline">Clear Filters</Button>
          </div>
        </div>
        <Separator />
        <div className="p-4 flex gap-4">
          <Select value={filters.category} onValueChange={handleCategoryChange}>
            <SelectTrigger className="!bg-floated w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={filters.location} onValueChange={handleLocationChange}>
            <SelectTrigger className="!bg-floated w-full">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Locations</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={filters.jobType} onValueChange={handleJobTypeChange}>
            <SelectTrigger className="!bg-floated w-full">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Types</SelectItem>
              {jobTypes.map((jobType) => (
                <SelectItem key={jobType} value={jobType}>
                  {jobType}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}

export default JobSearchCard;
