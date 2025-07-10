import { EmploymentType, Job, SalaryPeriod } from "@/features/jobs/types";

export const jobs: Job[] = [
  {
    id: "1",
    company: {
      name: "Apex Contracting",
      description: "Leading commercial electrical contractor with over 20 years of experience serving the Chicago area.",
      website: "https://apexcontracting.com",
    },
    title: "Electrician (Commercial)",
    description: "We are seeking a skilled Commercial Electrician to join our growing team. This role involves installing, maintaining, and repairing electrical systems in commercial buildings, working with conduit, wiring, and control systems.",
    requirements: [
      "2+ years of commercial electrical experience",
      "Valid electrician license",
      "Experience with conduit bending and installation",
      "Knowledge of electrical codes and safety standards",
      "Ability to read blueprints and electrical schematics",
      "Strong problem-solving skills"
    ],
    benefits: [
      "Competitive hourly rate $28-$35/hr",
      "Health insurance coverage",
      "401(k) with company match",
      "Paid time off and holidays",
      "Tool allowance",
      "Ongoing training opportunities"
    ],
    location: {
      city: "Chicago",
      state: "IL",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 28,
      max: 35,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "electrician",
    isFeatured: true,
    applyUrl: "https://apexcontracting.com/careers/electrician-commercial",
    remote: false,
    experienceLevel: "Mid-level",
  },
  {
    id: "2",
    company: {
      name: "Apex Contracting",
    },
    title: "Electrician (Commercial)",
    location: {
      city: "Chicago",
      state: "IL",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 28,
      max: 35,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "elictrician",
    isFeatured: true,
  },
  {
    id: "3",
    company: {
      name: "Apex Contracting",
    },
    title: "Electrician (Commercial)",
    location: {
      city: "Chicago",
      state: "IL",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 28,
      max: 35,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "electrician",
    isFeatured: true,
  },
  {
    id: "4",
    company: {
      name: "LoneStar Electric Co.",
    },
    title: "Journeyman Electrician - Commercial Projects",
    location: {
      city: "Houston",
      state: "TX",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 32,
      max: 38,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "electrician",
  },
  {
    id: "5",
    company: {
      name: "LoneStar Electric Co.",
    },
    title: "Journeyman Electrician - Commercial Projects",
    location: {
      city: "Houston",
      state: "TX",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 32,
      max: 38,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "electrician",
  },
  {
    id: "6",
    company: {
      name: "LoneStar Electric Co.",
    },
    title: "Journeyman Electrician - Commercial Projects",
    location: {
      city: "Houston",
      state: "TX",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 32,
      max: 38,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "electrician",
  },
  {
    id: "7",
    company: {
      name: "LoneStar Electric Co.",
    },
    title: "Journeyman Electrician - Commercial Projects",
    location: {
      city: "Houston",
      state: "TX",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 32,
      max: 38,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "electrician",
  },
  {
    id: "8",
    company: {
      name: "LoneStar Electric Co.",
    },
    title: "Journeyman Electrician - Commercial Projects",
    location: {
      city: "Houston",
      state: "TX",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 32,
      max: 38,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "electrician",
  },
  {
    id: "9",
    company: {
      name: "LoneStar Electric Co.",
    },
    title: "Journeyman Electrician - Commercial Projects",
    location: {
      city: "Houston",
      state: "TX",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 32,
      max: 38,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "driver",
  },
  {
    id: "10",
    company: {
      name: "LoneStar Electric Co.",
    },
    title: "Journeyman Electrician - Commercial Projects",
    location: {
      city: "Houston",
      state: "TX",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 32,
      max: 38,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "driver",
  },
  {
    id: "11",
    company: {
      name: "LoneStar Electric Co.",
    },
    title: "Journeyman Electrician - Commercial Projects",
    location: {
      city: "Houston",
      state: "TX",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 32,
      max: 38,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "driver",
  },
  {
    id: "12",
    company: {
      name: "LoneStar Electric Co.",
    },
    title: "Journeyman Electrician - Commercial Projects",
    location: {
      city: "Houston",
      state: "TX",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 32,
      max: 38,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "driver",
  },
  {
    id: "13",
    company: {
      name: "LoneStar Electric Co.",
    },
    title: "Journeyman Electrician - Commercial Projects",
    location: {
      city: "Houston",
      state: "TX",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 32,
      max: 38,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "driver",
  },
  {
    id: "14",
    company: {
      name: "LoneStar Electric Co.",
    },
    title: "Journeyman Electrician - Commercial Projects",
    location: {
      city: "Houston",
      state: "TX",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 32,
      max: 38,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "mechanic",
  },
  {
    id: "15",
    company: {
      name: "LoneStar Electric Co.",
    },
    title: "Journeyman Electrician - Commercial Projects",
    location: {
      city: "Houston",
      state: "TX",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 32,
      max: 38,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "mechanic",
  },
  {
    id: "16",
    company: {
      name: "LoneStar Electric Co.",
    },
    title: "Journeyman Electrician - Commercial Projects",
    location: {
      city: "Houston",
      state: "TX",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 32,
      max: 38,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "mechanic",
  },
  {
    id: "17",
    company: {
      name: "LoneStar Electric Co.",
    },
    title: "Journeyman Electrician - Commercial Projects",
    location: {
      city: "Houston",
      state: "TX",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 32,
      max: 38,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "mechanic",
  },
  {
    id: "18",
    company: {
      name: "LoneStar Electric Co.",
    },
    title: "Journeyman Electrician - Commercial Projects",
    location: {
      city: "Houston",
      state: "TX",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 32,
      max: 38,
      currency: "USD",
      period: SalaryPeriod.HOUR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "mechanic",
  },
];
type UseJobsProps = {
  featured?: boolean;
  category?: string;
};
export default function useJobs({ featured = false, category }: UseJobsProps) {
    console.log(category,featured)
  if (featured) {
    return jobs.filter((job) => job.isFeatured);
  }
  switch (category) {
    case "electrician":
      return jobs.filter((job) => job.category == "electrician" && !job.isFeatured);
    case "driver":
      return jobs.filter((job) => job.category == "driver" && !job.isFeatured);
    case "mechanic":
      return jobs.filter((job) => job.category == "mechanic" && !job.isFeatured);
    default:
      return jobs;
  }
}
