'use client'
import JobCard from "@/features/jobs/components/job-card";
import useJobs from "../hooks/use-jobs";
import { useSearch, SearchFilters } from "@/hooks/use-search";

type Props = {
  category: string;
  title: string;
  searchFilters?: SearchFilters;
};

function JobList({ title, category, searchFilters }: Props) {
  const categoryJobs = useJobs({ category });
  const allJobs = useJobs({});
  
  const hasActiveSearch = searchFilters && (searchFilters.query || searchFilters.category || searchFilters.location || searchFilters.jobType);
  
  // Apply search filters
  const searchResults = useSearch(allJobs, searchFilters || {
    query: "",
    category: "",
    location: "",
    jobType: "",
  });
  
  const jobsToShow = hasActiveSearch ? searchResults : categoryJobs;
  const displayTitle = hasActiveSearch ? `Search Results (${jobsToShow.length})` : title;

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

  // Don't show category sections when there's an active search
  if (hasActiveSearch && category !== "electrician") {
    return null;
  }

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl font-semibold text-foreground">{displayTitle}</h3>
      <div className="flex flex-col gap-1">
        {jobsToShow.map((job) => {
          return <JobCard job={job} key={job.id} />;
        })}
      </div>
    </div>
  );
}

export default JobList;
