"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import { navLinks } from "./nav";

function Header() {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between px-4 py-3 md:px-0 container ">
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <img 
          src="/logo.svg" 
          alt="promptengineers logo" 
          className="h-8 w-auto"
        />
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
        <Button asChild>
          <Link href="/post-job">Post a job</Link>
        </Button>
      </div>
    </div>
  );
}

export default Header;
