"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BeigeBg from "@/components/beige-bg";
import BlogCard from "@/features/blog/components/blog-card";
import { useBlogPosts } from "@/features/blog/hooks/use-blog-posts";

export default function BlogPage() {
  const [displayLimit, setDisplayLimit] = useState(12);
  const blogPosts = useBlogPosts();
  
  // Sort by most recent first
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  
  const postsToShow = sortedPosts.slice(0, displayLimit);
  const hasMorePosts = sortedPosts.length > displayLimit;
  
  const loadMorePosts = () => {
    setDisplayLimit(prev => prev + 12);
  };

  return (
    <div className="w-full h-full">
      <BeigeBg />
      {/* Header section */}
      <div className="container mt-4 md:mt-16 pb-12">
        <h1 className="text-3xl font-semibold text-beige-12 mb-2">
          Blog
        </h1>
        <p className="text-base text-beige-11">
          Insights, trends, and tips for the AI and prompt engineering community
        </p>
      </div>
      
      {/* Blog grid on white background */}
      <div className="bg-background">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postsToShow.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          {hasMorePosts && (
            <div className="flex justify-center mt-12">
              <Button 
                variant="outline" 
                onClick={loadMorePosts}
                className="px-8"
              >
                View more blog posts
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}