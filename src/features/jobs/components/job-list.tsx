'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import JobCard from "@/features/jobs/components/job-card";
import useJobs from "../hooks/use-jobs";
import { useSearch, SearchFilters } from "@/hooks/use-search";

type Props = {
  category: string;
  title: string;
  searchFilters?: SearchFilters;
  showLoadMore?: boolean;
};

function JobList({ title, category, searchFilters, showLoadMore = false }: Props) {
  const [displayLimit, setDisplayLimit] = useState(10);
  const allJobs = useJobs({});
  const categoryJobs = category ? useJobs({ category }) : allJobs;
  
  const hasActiveSearch = searchFilters && (searchFilters.query || searchFilters.category || searchFilters.location || searchFilters.jobType);
  
  // Apply search filters
  const searchResults = useSearch(allJobs, searchFilters || {
    query: "",
    category: "",
    location: "",
    jobType: "",
  });
  
  const allJobsToShow = hasActiveSearch ? searchResults : categoryJobs;
  const jobsToShow = showLoadMore ? allJobsToShow.slice(0, displayLimit) : allJobsToShow;
  const hasMoreJobs = showLoadMore && allJobsToShow.length > displayLimit;
  const displayTitle = hasActiveSearch ? `Search Results (${allJobsToShow.length})` : title;

  const loadMoreJobs = () => {
    setDisplayLimit(prev => prev + 10);
  };

  if (hasActiveSearch && jobsToShow.length === 0) {
    return (
      <div className="flex flex-col gap-5">
        <h3 className="text-xl font-semibold text-foreground">{displayTitle}</h3>
        <div className="p-8 text-center text-muted-foreground">
          <p className="text-lg mb-2">No jobs found</p>
          <p className="text-sm">Try adjusting your search criteria</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl font-semibold text-foreground">{displayTitle}</h3>
      <div className="flex flex-col gap-1">
        {jobsToShow.map((job) => {
          return <JobCard job={job} key={job.id} />;
        })}
      </div>
      {hasMoreJobs && (
        <Button 
          variant="outline" 
          className="md:w-full max-w-[661px] mx-auto" 
          onClick={loadMoreJobs}
        >
          View more jobs
        </Button>
      )}
    </div>
  );
}

export default JobList;
