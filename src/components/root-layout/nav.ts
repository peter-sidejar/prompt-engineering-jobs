export type NavLink = {
  id: number;
  title: string;
  url: string;
};
export const navLinks: NavLink[] = [
  {
    id: 1,
    title: "Browse jobs",
    url: "/jobs",
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
    "From skilled trades to essential labor, we connect hardworking people with real opportunities.",
  cta: {
    label: "Post a job",
    href: "/post-job",
  },
  title:"careerably",
  linkGroups: [
    [
      { label: "Browse jobs", href: "/jobs" },
      { label: "About us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Newsletter", href: "/newsletter" },
    ],
    [
      { label: "Carpenter jobs", href: "/jobs/carpenter" },
      { label: "Electrician jobs", href: "/jobs/electrician" },
      { label: "Plumber jobs", href: "/jobs/plumber" },
      { label: "Driver jobs", href: "/jobs/driver" },
      { label: "Courier jobs", href: "/jobs/courier" },
    ],
    [
      { label: "Dishwasher jobs", href: "/jobs/dishwasher" },
      { label: "Server jobs", href: "/jobs/server" },
      { label: "Laborer jobs", href: "/jobs/laborer" },
      { label: "Mover jobs", href: "/jobs/mover" },
      { label: "Assistant jobs", href: "/jobs/assistant" },
    ],
    [
      { label: "Housekeeper jobs", href: "/jobs/housekeeper" },
      { label: "Cleaner jobs", href: "/jobs/cleaner" },
      { label: "Guard jobs", href: "/jobs/guard" },
      { label: "Cook jobs", href: "/jobs/cook" },
      { label: "Gardener jobs", href: "/jobs/gardener" },
    ],
  ],
};
