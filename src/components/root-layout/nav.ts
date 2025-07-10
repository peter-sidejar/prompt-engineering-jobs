export type NavLink = {
  id: number;
  title: string;
  url: string;
};
export const navLinks: NavLink[] = [
  {
    id: 1,
    title: "Browse jobs",
    url: "/",
  },
  {
    id: 2,
    title: "About us",
    url: "/about",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
];

type FooterLink = {
  label: string;
  href: string;
};

export type FooterData = {
  description: string;
  cta: FooterLink;
  title: string;
  linkGroups: FooterLink[][];
};

export const footerData: FooterData = {
  description:
    "From AI research to prompt engineering, we connect innovative minds with cutting-edge opportunities in artificial intelligence.",
  cta: {
    label: "Post a job",
    href: "/post-job",
  },
  title:"Prompt Engineering Jobs",
  linkGroups: [
    [
      { label: "Browse jobs", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Newsletter", href: "/newsletter" },
    ],
    [
      { label: "Prompt Engineer jobs", href: "/jobs/prompt-engineer" },
      { label: "AI Engineer jobs", href: "/jobs/ai-engineer" },
      { label: "ML Engineer jobs", href: "/jobs/ml-engineer" },
      { label: "Data Scientist jobs", href: "/jobs/data-scientist" },
      { label: "AI Researcher jobs", href: "/jobs/ai-researcher" },
    ],
    [
      { label: "NLP Engineer jobs", href: "/jobs/nlp-engineer" },
      { label: "Computer Vision jobs", href: "/jobs/computer-vision" },
      { label: "MLOps Engineer jobs", href: "/jobs/mlops-engineer" },
      { label: "AI Product Manager jobs", href: "/jobs/ai-product-manager" },
      { label: "LLM Engineer jobs", href: "/jobs/llm-engineer" },
    ],
    [
      { label: "AI Ethics Specialist jobs", href: "/jobs/ai-ethics" },
      { label: "Robotics Engineer jobs", href: "/jobs/robotics-engineer" },
      { label: "AI Consultant jobs", href: "/jobs/ai-consultant" },
      { label: "AI Trainer jobs", href: "/jobs/ai-trainer" },
      { label: "AI Architect jobs", href: "/jobs/ai-architect" },
    ],
  ],
};
