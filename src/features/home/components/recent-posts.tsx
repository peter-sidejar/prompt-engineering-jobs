"use client";
import { Button } from "@/components/ui/button";
import useRecentPosts from "@/features/blog/hooks/use-recent-posts";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import React from "react";

function RecentPosts() {
  const { recentPosts } = useRecentPosts();
  return (
    <div className="flex flex-col gap-12 items-center">
      <p className="text-xl font-semibold text-foreground text-center">
        Explore latest job insights
      </p>
      <div className="flex flex-col gap-6 md:flex-row">
        {recentPosts.map((post) => {
          const formattedTime = formatDistanceToNow(new Date(post.publishedAt), {
            addSuffix: true,
          });
          return (
            <div className="max-w-[361px] flex flex-col gap-4" key={post.id}>
              <div className="w-full h-full">
                {post.featuredImage ? (
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    height={296}
                    width={361}
                  />
                ) : (
                  <div className="bg-beige-2 rounded-md h-[296px] w-full" />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-accent-11 text-sm font-medium">
                  {post.tags[0] || 'AI/ML'}
                </p>
                <p className="text-base font-medium text-foreground">
                  {post.title}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">{formattedTime}</p>
            </div>
          );
        })}
      </div>
      <Button variant="outline" className="w-fit">Read more in blog</Button>
    </div>
  );
}

export default RecentPosts;
