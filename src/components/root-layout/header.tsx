"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import { navLinks } from "./nav";

function Header() {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between px-4 py-3 md:px-0 container ">
      <Link href="/" className="text-sm font-semibold text-beige-a11 hover:text-beige-a12 transition-colors">
        careerably
      </Link>
      <MobileMenu />
      <div className="hidden gap-3 md:flex">
        {navLinks.map((link) => {
          const isActive = pathname == link.url;
          return (
            <Button
              asChild
              variant={isActive ? "secondary" : "ghost"}
              key={link.id}
            >
              <Link href={link.url}>{link.title}</Link>
            </Button>
          );
        })}
        <Button>Post a job</Button>
      </div>
    </div>
  );
}

export default Header;
