import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = formatDistanceToNow(new Date(post.publishedAt), {
    addSuffix: true,
  });

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="bg-background rounded-xl shadow-fancy overflow-hidden transition-all group-hover:shadow-lg group-hover:-translate-y-1">
        {/* Featured Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {post.featured && (
            <div className="absolute top-3 left-3">
              <Badge variant="secondary" className="bg-yellow-2 text-yellow-12">
                Featured
              </Badge>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          {/* Title */}
          <h2 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary-11 transition-colors">
            {post.title}
          </h2>
          
          {/* Excerpt */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          {/* Author and Meta */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="size-8">
                {post.author.avatar && (
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                )}
                <AvatarFallback className="text-xs">
                  {post.author.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {post.author.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formattedDate} · {post.readingTime} min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}