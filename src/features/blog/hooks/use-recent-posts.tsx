import { BlogPost } from "../types";

const recentPosts: BlogPost[] = [
  {
    id: "23456712ihsdf",
    slug: "building-better-prompts-guide",
    title: "Building Better Prompts: A Comprehensive Guide",
    excerpt: "Learn the fundamental principles of prompt engineering and how to create effective prompts for AI models.",
    content: "Comprehensive guide content...",
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags: ["prompt-engineering", "ai", "tutorial"],
    readingTime: 8,
    featured: false,
  },
  {
    id: "236456712ihsdf",
    slug: "future-of-ai-jobs",
    title: "The Future of AI Jobs: What to Expect in 2024",
    excerpt: "Explore the evolving landscape of AI careers and emerging opportunities in the field.",
    content: "Future of AI jobs content...",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1b9?w=150&h=150&fit=crop&crop=face",
    },
    publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    featuredImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop",
    tags: ["careers", "future", "ai-trends"],
    readingTime: 6,
    featured: true,
  },
  {
    id: "243456712ihsdf",
    slug: "prompt-optimization-techniques",
    title: "Advanced Prompt Optimization Techniques",
    excerpt: "Deep dive into advanced strategies for optimizing prompts and improving AI model performance.",
    content: "Advanced optimization content...",
    author: {
      name: "Michael Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    featuredImage: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=400&fit=crop",
    tags: ["optimization", "advanced", "techniques"],
    readingTime: 12,
    featured: false,
  },
];
export default function useRecentPosts() {
    return { recentPosts }
}
