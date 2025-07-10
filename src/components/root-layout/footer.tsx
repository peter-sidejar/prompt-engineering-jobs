import React from "react";
import { footerData } from "./nav";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";

function Footer() {
  return (
    <footer>
      <Separator className="bg-neutral-a4" />
      <div className="py-[64px] flex flex-col gap-12 md:flex-row md:px-0 md:py-[120px] container md:gap-6">
        <div className="flex flex-col gap-6 md:max-w-[296px]">
          <span className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-foreground">
              {footerData.title}
            </p>
            <p className="text-sm text-muted-foreground">
              {footerData.description}
            </p>
          </span>
          <Button asChild className="w-fit">
            <Link href={footerData.cta.href}>{footerData.cta.label}</Link>
          </Button>
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {footerData.linkGroups.map((group, index) => (
              <div key={index} className="flex flex-col gap-3">
                {group.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="text-sm text-foreground hover:underline w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
