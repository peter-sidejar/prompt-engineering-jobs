import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { VariantProps } from "class-variance-authority";

function PostJobButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  return (
    <Button
      {...props}
      className={className}
      variant={variant}
      asChild={asChild}
      size={size}
    >Post a job</Button>
  );
}

export default PostJobButton;
