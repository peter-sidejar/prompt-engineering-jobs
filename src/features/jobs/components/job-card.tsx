import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { formatDistanceToNow } from "date-fns";
import { Job } from "../types";
import { cn } from "@/lib/utils";
import { createJobUrl } from "@/lib/url-utils";
import Link from "next/link";

const formatSalary = (amount: number): string => {
  if (amount >= 1000) {
    return `${Math.floor(amount / 1000)}K`;
  }
  return amount.toString();
};

type Props = {
  job: Job;
  variant?: "default" | "colored";
};
function JobCard({ job, variant = "default" }: Props) {
  const formattedPostedAt = formatDistanceToNow(job.posted_at, {
    addSuffix: true,
  });
  const minSalary = job.salary.min;
  const maxSalary = job.salary.max;
  const salaryCurrency = job.salary.currency || "USD";
  const currencySymbol = salaryCurrency === "USD" ? "$" : salaryCurrency;
  const jobUrl = createJobUrl(job.company.name, job.title, job.id);
  
  return (
    <Link href={jobUrl} className="block">
      <div className={cn("p-3 flex transition-all hover:bg-neutral-a3 cursor-pointer flex-col gap-4 rounded-md md:flex-row md:items-start",{
          "bg-yellow-2 hover:bg-yellow-3":variant === "colored",
      })}>
        <Avatar className="size-14">
          <AvatarFallback>
            {job.company.name[0]}
            {job.company.name[1]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1 md:flex-1">
          <p className="text-muted-foreground text-sm font-medium">
            {job.company.name}
          </p>
          <p className="text-base font-medium text-foreground">{job.title}</p>
          <p className="text-base text-muted-foreground">
            {job.location.city}, {job.location.state} · {job.employmentType} ·{" "}
            {formattedPostedAt}
          </p>
        </div>
        <Badge variant="secondary">
          {currencySymbol}
          {formatSalary(minSalary)}-{currencySymbol}
          {formatSalary(maxSalary)}/{job.salary.period}
        </Badge>
      </div>
    </Link>
  );
}

export default JobCard;
