import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { VariantProps } from "class-variance-authority";
import Link from "next/link";

function PostJobButton({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>) {
  return (
    <Button
      {...props}
      className={className}
      variant={variant}
      asChild
      size={size}
    >
      <Link href="/post-job">Post a job</Link>
    </Button>
  );
}

export default PostJobButton;
