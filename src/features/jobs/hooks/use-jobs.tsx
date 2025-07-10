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
  {
    id: "19",
    company: {
      name: "AI Dynamics",
      description: "Leading AI research company focused on prompt engineering and language model optimization.",
      website: "https://aidynamics.com",
    },
    title: "Senior Prompt Engineer",
    description: "Join our team to design and optimize prompts for large language models. Work on cutting-edge AI applications and help shape the future of human-AI interaction.",
    requirements: [
      "3+ years of experience with LLMs",
      "Strong understanding of prompt engineering techniques",
      "Experience with GPT, Claude, or similar models",
      "Python programming skills",
      "Experience with AI/ML frameworks",
      "Strong analytical and problem-solving skills"
    ],
    benefits: [
      "Competitive salary $120k-$180k",
      "Comprehensive health insurance",
      "401(k) with company match",
      "Flexible remote work",
      "Professional development budget",
      "Cutting-edge AI tools and resources"
    ],
    location: {
      city: "San Francisco",
      state: "CA",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 120000,
      max: 180000,
      currency: "USD",
      period: SalaryPeriod.YEAR,
    },
    posted_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    category: "prompt-engineer",
    isFeatured: false,
    applyUrl: "https://aidynamics.com/careers/senior-prompt-engineer",
    remote: true,
    experienceLevel: "Senior",
  },
  {
    id: "20",
    company: {
      name: "Neural Networks Inc",
      description: "Specializing in deep learning solutions and AI model development.",
      website: "https://neuralnetworks.com",
    },
    title: "LLM Engineer",
    description: "Build and optimize large language models for various applications. Work with state-of-the-art transformer architectures and contribute to groundbreaking AI research.",
    requirements: [
      "MSc in Computer Science or related field",
      "5+ years of ML/AI experience",
      "Deep understanding of transformer architectures",
      "Experience with PyTorch or TensorFlow",
      "Knowledge of distributed training",
      "Publications in AI/ML conferences preferred"
    ],
    benefits: [
      "Competitive salary $140k-$200k",
      "Stock options",
      "Premium health coverage",
      "Unlimited PTO",
      "Research conference budget",
      "GPU cluster access"
    ],
    location: {
      city: "Austin",
      state: "TX",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 140000,
      max: 200000,
      currency: "USD",
      period: SalaryPeriod.YEAR,
    },
    posted_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    category: "llm-engineer",
    isFeatured: true,
    applyUrl: "https://neuralnetworks.com/careers/llm-engineer",
    remote: false,
    experienceLevel: "Senior",
  },
  {
    id: "21",
    company: {
      name: "Prompt Labs",
      description: "Innovative startup focused on prompt optimization and AI safety.",
      website: "https://promptlabs.ai",
    },
    title: "Junior Prompt Engineer",
    description: "Start your career in prompt engineering! Learn from industry experts while working on real-world AI applications. Perfect for recent graduates or career switchers.",
    requirements: [
      "Bachelor's degree in CS, Math, or related field",
      "Basic understanding of LLMs",
      "Python programming experience",
      "Strong written communication skills",
      "Curiosity about AI and language models",
      "Willingness to learn and adapt quickly"
    ],
    benefits: [
      "Competitive salary $80k-$110k",
      "Mentorship program",
      "Health insurance",
      "Learning and development budget",
      "Flexible work arrangements",
      "Fast-paced startup environment"
    ],
    location: {
      city: "New York",
      state: "NY",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 80000,
      max: 110000,
      currency: "USD",
      period: SalaryPeriod.YEAR,
    },
    posted_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    category: "prompt-engineer",
    isFeatured: false,
    applyUrl: "https://promptlabs.ai/careers/junior-prompt-engineer",
    remote: true,
    experienceLevel: "Entry-level",
  },
  {
    id: "22",
    company: {
      name: "Microsoft AI",
      description: "Global technology leader building the future of AI and computing.",
      website: "https://microsoft.com",
    },
    title: "AI Researcher - Prompt Engineering",
    description: "Conduct cutting-edge research in prompt engineering methodologies. Publish papers, contribute to open source, and shape the future of AI interaction patterns.",
    requirements: [
      "PhD in Computer Science, AI, or related field",
      "5+ years of research experience",
      "Strong publication record",
      "Experience with transformer models",
      "Expertise in prompt engineering techniques",
      "Excellent communication and collaboration skills"
    ],
    benefits: [
      "Competitive salary $160k-$220k",
      "Stock options",
      "World-class research environment",
      "Conference and publication support",
      "Collaborative global team",
      "Access to cutting-edge computing resources"
    ],
    location: {
      city: "Seattle",
      state: "WA",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 160000,
      max: 220000,
      currency: "USD",
      period: SalaryPeriod.YEAR,
    },
    posted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: "ai-researcher",
    isFeatured: true,
    applyUrl: "https://careers.microsoft.com/ai-researcher-prompt-engineering",
    remote: false,
    experienceLevel: "Senior",
  },
  {
    id: "23",
    company: {
      name: "OpenAI",
      description: "AI research and deployment company focused on safe artificial general intelligence.",
      website: "https://openai.com",
    },
    title: "Prompt Engineering Specialist",
    description: "Work directly on improving GPT models and developing advanced prompting techniques. Collaborate with researchers and engineers to enhance AI capabilities and safety.",
    requirements: [
      "3+ years of experience with LLMs",
      "Deep understanding of prompt engineering",
      "Experience with GPT models",
      "Strong Python and ML skills",
      "Research mindset and publication experience",
      "Commitment to AI safety and alignment"
    ],
    benefits: [
      "Competitive salary $130k-$190k",
      "Equity participation",
      "Premium benefits package",
      "Research publication opportunities",
      "World-class AI research environment",
      "Mission-driven work on AGI safety"
    ],
    location: {
      city: "San Francisco",
      state: "CA",
    },
    employmentType: EmploymentType.FULL_TIME,
    salary: {
      min: 130000,
      max: 190000,
      currency: "USD",
      period: SalaryPeriod.YEAR,
    },
    posted_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    category: "prompt-engineer",
    isFeatured: true,
    applyUrl: "https://openai.com/careers/prompt-engineering-specialist",
    remote: false,
    experienceLevel: "Mid-level",
  },
];
type UseJobsProps = {
  featured?: boolean;
  category?: string;
};
export default function useJobs({ featured = false, category }: UseJobsProps) {
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
