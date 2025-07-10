'use client'
import JobCard from "@/features/jobs/components/job-card";
import useJobs from "../hooks/use-jobs";
type Props = {
  category: string;
  title: string;
};
function JobList({ title, category }: Props) {
  const jobs = useJobs({category})
  console.log(jobs)
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <div className="flex flex-col gap-1">
        {jobs.map((job) => {
          return <JobCard job={job} key={job.id} />;
        })}
      </div>
    </div>
  );
}

export default JobList;
