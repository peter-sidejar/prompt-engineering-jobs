import JobCard from "@/features/jobs/components/job-card";
import useJobs from "@/features/jobs/hooks/use-jobs";
function FeaturedJobs() {
  const featuredJobs = useJobs({ featured: true });
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl font-semibold text-foreground">Featured jobs</h3>
      <div className="flex flex-col gap-1">
        {featuredJobs.map((job) => {
          return <JobCard variant="colored" job={job} key={job.id} />;
        })}
      </div>
    </div>
  );
}

export default FeaturedJobs;
