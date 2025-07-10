import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";

function JobSearchCard() {
  return (
    <>
      <div className="flex flex-col gap-4 p-4 bg-background rounded-xl shadow-fancy md:hidden">
        <div className="flex items-center gap-3">
          <Search className="size-6 text-neutral-a8" />
          <Input
            placeholder="Search by title, company or location"
            className="placeholder:text-base px-0 text-muted-foreground border-0 shadow-none focus-visible:border-0 focus-visible:ring-0"
          />
        </div>
        <Button>Find job</Button>
      </div>

      <div className="hidden md:block rounded-xl bg-background shadow-fancy">
        <div className="flex gap-8 w-full">
          <div className="flex items-center gap-3 p-4 w-full">
            <Search className="size-6 text-neutral-a8" />
            <Input
              placeholder="Search by title, company or location"
              className="placeholder:text-base flex-1 px-0 text-muted-foreground border-0 shadow-none focus-visible:border-0 focus-visible:ring-0"
            />
            <Button>Find job</Button>
          </div>
        </div>
        <Separator />
        <div className="p-4 flex gap-4">
          <Select>
            <SelectTrigger className="!bg-floated w-full">
              Category
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Huston</SelectItem>
              <SelectItem value="dark">California</SelectItem>
              <SelectItem value="system">New york</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="!bg-floated w-full">
              Tags
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Huston</SelectItem>
              <SelectItem value="dark">California</SelectItem>
              <SelectItem value="system">New york</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="!bg-floated w-full">
              Job type
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Huston</SelectItem>
              <SelectItem value="dark">California</SelectItem>
              <SelectItem value="system">New york</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="!bg-floated w-full">
              Location
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Huston</SelectItem>
              <SelectItem value="dark">California</SelectItem>
              <SelectItem value="system">New york</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
}

export default JobSearchCard;
