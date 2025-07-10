export type Job = {
    id: string;
    company: {
      name: string;
      description?: string;
      logo?: string;
      website?: string;
    };
    title: string;
    description?: string;
    requirements?: string[];
    benefits?: string[];
    location: {
      city: string;
      state: string;
    };
    employmentType: EmploymentType;
    salary: {
      min: number;
      max: number;
      currency: string;
      period: SalaryPeriod;
    };
    posted_at: string;
    category?: string;
    isFeatured?: boolean;
    applyUrl?: string;
    remote?: boolean;
    experienceLevel?: string;
  };
  
  export enum EmploymentType {
    FULL_TIME = "Full-Time",
    PART_TIME = "Part-Time",
    CONTRACT = "Contract",
    TEMPORARY = "Temporary",
    INTERNSHIP = "Internship",
  }
  
  export enum SalaryPeriod {
    HOUR = "hr",
    YEAR = "year",
    MONTH = "month",
    WEEK = "week",
  }