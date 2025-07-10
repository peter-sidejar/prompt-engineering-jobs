"use client";
import { useState } from "react";
import BeigeBg from "@/components/beige-bg";
import { Button } from "@/components/ui/button";
import FeaturedJobs from "@/features/home/components/featured-jobs";
import HeroCopy from "@/features/home/components/hero-copy";
import JobSearchCard from "@/features/home/components/job-search-card";
import Newsletter from "@/features/home/components/newsletter";
import PostJobCTA from "@/features/home/components/post-job-cta";
import RecentPosts from "@/features/home/components/recent-posts";
import JobList from "@/features/jobs/components/job-list";
import { SearchFilters } from "@/hooks/use-search";

function Page() {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    query: "",
    category: "",
    location: "",
    jobType: "",
  });
  return (
    <div className="w-full h-full">
      <BeigeBg />
      <div className="container mt-4 md:mt-16 flex flex-col gap-16 md:gap-[57px]">
        <div className="flex flex-col gap-[35px] md:gap-12">
          <HeroCopy />
          <JobSearchCard filters={searchFilters} onFiltersChange={setSearchFilters} />
        </div>
        <div className="flex flex-col gap-16 md:gap-12 items-center">
        <div className="max-w-[661px] w-full">
        <FeaturedJobs searchFilters={searchFilters} />
        </div>
        <Newsletter />
        <div className="max-w-[661px] w-full">
        <JobList category="" title="All Jobs" searchFilters={searchFilters} showLoadMore={true} />
        </div>
        <div className="mt-[56px]">
          <RecentPosts />
        </div>
        <div className="mt-[16px] mb-[66px] w-full">
          <PostJobCTA />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
