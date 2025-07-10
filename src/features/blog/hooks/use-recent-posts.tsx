import { BlogPost } from "../types";

const recentPosts: BlogPost[] = [
  {
    id: "23456712ihsdf",
    slug: "journeyman-electrician",
    title: "Journeyman Electrician: How to become one and how it works?",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    type: "Interview",
  },
  {
    id: "236456712ihsdf",
    slug: "journeyman-electrician",
    title: "Journeyman Electrician: How to become one and how it works?",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    type: "Interview",
  },
  {
    id: "243456712ihsdf",
    slug: "journeyman-electrician",
    title: "Journeyman Electrician: How to become one and how it works?",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    type: "Interview",
  },
];
export default function useRecentPosts() {
    return { recentPosts }
}
