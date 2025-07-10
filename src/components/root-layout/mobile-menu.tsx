import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import PostJobButton from "../post-job-button";
import { navLinks } from "./nav";
import Link from "next/link";

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="iconLg">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-beige-a11">Prompt Engineering Jobs</SheetTitle>
          <SheetDescription>
            Find AI/ML and prompt engineering opportunities. Build your future in artificial intelligence.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-3 px-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => {
              return (
                <Link key={link.id} href={link.url}>
                  {link.title}
                </Link>
              );
            })}
          </ul>
          <PostJobButton className="w-fit" />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
