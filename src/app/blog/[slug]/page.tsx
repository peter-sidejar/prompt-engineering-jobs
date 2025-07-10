"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import BeigeBg from "@/components/beige-bg";
import Newsletter from "@/features/home/components/newsletter";
import { useBlogPosts } from "@/features/blog/hooks/use-blog-posts";
import { formatDistanceToNow } from "date-fns";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const blogPosts = useBlogPosts();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const formattedDate = formatDistanceToNow(new Date(post.publishedAt), {
    addSuffix: true,
  });

  // Split content into paragraphs for newsletter insertion
  const contentParagraphs = post.content.split('\n\n').filter(p => p.trim());
  const middleIndex = Math.floor(contentParagraphs.length / 2);

  return (
    <div className="w-full h-full">
      <BeigeBg />
      
      {/* Header section */}
      <div className="container mt-4 md:mt-16 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-beige-12 mb-4 leading-tight">
            {post.title}
          </h1>
          
          {/* Author and meta info */}
          <div className="flex items-center gap-4 mb-8">
            <Avatar className="size-12">
              {post.author.avatar && (
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
              )}
              <AvatarFallback>
                {post.author.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-semibold text-beige-12">
                {post.author.name}
              </p>
              <p className="text-sm text-beige-11">
                Published {formattedDate} · {post.readingTime} min read
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content area */}
      <div className="bg-background">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            {/* Featured image */}
            <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Article content */}
            <div className="prose prose-lg max-w-none">
              {/* First half of content */}
              {contentParagraphs.slice(0, middleIndex).map((paragraph, index) => (
                <p key={index} className="mb-6 text-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
              
              {/* Newsletter CTA in middle */}
              <div className="my-16">
                <Newsletter />
              </div>
              
              {/* Second half of content */}
              {contentParagraphs.slice(middleIndex).map((paragraph, index) => (
                <p key={index + middleIndex} className="mb-6 text-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Author bio section */}
            <div className="mt-16 p-8 bg-beige-2 rounded-xl">
              <h3 className="text-xl font-semibold text-beige-12 mb-4">
                About the Author
              </h3>
              <div className="flex gap-6">
                <Avatar className="size-16 flex-shrink-0">
                  {post.author.avatar && (
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  )}
                  <AvatarFallback className="text-lg">
                    {post.author.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-semibold text-beige-12 mb-2">
                    {post.author.name}
                  </h4>
                  <p className="text-beige-11 leading-relaxed">
                    {post.author.bio || "Passionate about AI and prompt engineering, sharing insights and experiences from the cutting edge of artificial intelligence research and development."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}