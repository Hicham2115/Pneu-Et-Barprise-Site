import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { departmentPages, servicePages } from "@/lib/landing-pages";

const mobileLinks = [
  { href: "/#conseils", label: "Conseils" },
  { href: "/#contact", label: "Contact" },
];

export default function Component() {
  return (
    <header className="relative z-30 border-b border-black/5 bg-white">
      <div className="flex h-20 items-center justify-between gap-6 px-[5.4vw] max-[760px]:h-[70px] max-[760px]:px-5">
        <Link
          aria-label="Pneu, accueil"
          className="group flex shrink-0 flex-col items-start"
          href="/"
        >
          <span className="pneu-sans text-[37px] font-black leading-[0.85] tracking-[-0.075em] text-black max-[760px]:text-[31px]">
            PNEU
          </span>
          <span
            aria-hidden="true"
            className="mt-[7px] h-[5px] w-[62px] -skew-x-[28deg] bg-[#e51d2a] max-[760px]:w-[54px]"
          />
        </Link>

        <nav aria-label="Navigation principale">
          <NavigationMenu className="max-[760px]:hidden" viewport={false}>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="pneu-sans relative rounded-none !bg-transparent px-4 py-3 !text-[13px] !font-semibold text-[#191919] shadow-none transition-colors hover:text-[#d71920] focus:text-[#d71920] data-[state=open]:text-[#d71920] after:absolute after:bottom-2 after:left-4 after:right-8 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#e51d2a] after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100 data-[state=open]:after:scale-x-100">
                  SERVICES
                </NavigationMenuTrigger>
                <NavigationMenuContent className="max-h-[min(70svh,620px)] w-[min(calc(100vw-24px),720px)] overflow-y-auto rounded-[2px] border border-black/10 border-t-2 border-t-[#e51d2a] bg-white p-4 shadow-[0_18px_48px_rgba(0,0,0,0.16)]">
                  <div className="mb-2 border-b border-black/10 px-2 pb-3 pt-1">
                    <p className="pneu-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#777]">
                      SERVICES
                    </p>
                  </div>
                  <ul className="grid gap-0.5">
                    {servicePages.map((link) => (
                      <li key={link.slug}>
                        <NavigationMenuLink
                          className="pneu-sans flex-row items-center gap-3 whitespace-nowrap rounded-[2px] border-b border-black/[0.04] px-3 py-2.5 text-[13px] font-semibold leading-5 text-[#191919] transition-[color,background-color,padding] duration-200 last:border-0 hover:bg-[#fff6f6] hover:pl-4 hover:text-[#d71920] focus:bg-[#fff6f6] focus:text-[#d71920]"
                          href={`/services/${link.slug}`}
                        >
                          <span
                            aria-hidden="true"
                            className="size-1.5 shrink-0 rounded-full bg-[#ef5b27]"
                          />
                          {link.label}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="pneu-sans relative rounded-none !bg-transparent px-4 py-3 !text-[13px] !font-semibold text-[#191919] shadow-none transition-colors hover:text-[#d71920] focus:text-[#d71920] data-[state=open]:text-[#d71920] after:absolute after:bottom-2 after:left-4 after:right-8 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#e51d2a] after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100 data-[state=open]:after:scale-x-100">
                  ÎLE-DE-FRANCE
                </NavigationMenuTrigger>
                <NavigationMenuContent className="max-h-[min(70svh,620px)] !w-[min(520px,calc(100vw-48px))] overflow-y-auto rounded-[2px] border border-black/10 border-t-2 border-t-[#e51d2a] bg-white p-4 shadow-[0_18px_48px_rgba(0,0,0,0.16)]">
                  <div className="mb-2 border-b border-black/10 px-2 pb-3 pt-1">
                    <p className="pneu-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#777]">
                      ENLÈVEMENT D’ÉPAVE DÉPARTEMENTS
                    </p>
                  </div>
                  <ul className="grid grid-cols-1 gap-y-1">
                    {departmentPages.map((link) => (
                      <li key={link.slug}>
                        <NavigationMenuLink
                          className="pneu-sans flex-row items-center gap-3 whitespace-nowrap rounded-[2px] border-b border-black/[0.04] px-3 py-2.5 text-[13px] font-semibold leading-5 text-[#191919] transition-colors hover:bg-[#fff6f6] hover:text-[#d71920] focus:bg-[#fff6f6] focus:text-[#d71920]"
                          href={`/ile-de-france/${link.slug}`}
                        >
                          <span
                            aria-hidden="true"
                            className="size-1.5 shrink-0 rounded-full bg-[#ef5b27]"
                          />
                          {link.label}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {mobileLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    className="pneu-sans group relative rounded-none px-4 py-3 text-[14px] font-semibold text-[#191919] transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:bg-transparent hover:text-[#d71920] focus:bg-transparent focus:text-[#d71920] after:absolute after:inset-x-4 after:bottom-2 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#e51d2a] after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100"
                    href={link.href}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Button
            className="pneu-sans h-[42px] rounded-[2px] bg-[#e51d2a] px-5 text-[14px] font-semibold !text-white hover:bg-[#c81521] max-[760px]:hidden"
            nativeButton={false}
            render={<Link href="/#contact" />}
            size="lg"
          >
            <Phone aria-hidden="true" className="size-4 !text-white" />
            Nous contacter
            <ArrowRight
              aria-hidden="true"
              className="ml-1 size-4 !text-white"
            />
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <button
                aria-label="Ouvrir le menu"
                className="grid size-11 place-items-center text-black transition-colors hover:text-[#d71920] min-[761px]:hidden"
                type="button"
              >
                <Menu aria-hidden="true" className="size-6" />
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="max-h-[calc(100svh-100px)] w-[min(calc(100vw-16px),480px)] overflow-y-auto rounded-[2px] border border-black/10 border-t-2 border-t-[#e51d2a] bg-white p-3 shadow-[0_18px_48px_rgba(0,0,0,0.16)]"
              sideOffset={10}
            >
              <nav aria-label="Navigation principale" className="grid">
                <details className="border-b border-[#eeeeee] py-1">
                  <summary className="pneu-sans flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-semibold text-[#191919] hover:text-[#d71920] [&::-webkit-details-marker]:hidden">
                    SERVICES
                    <ChevronDown aria-hidden="true" className="size-4" />
                  </summary>
                  <div className="grid border-l border-[#e51d2a] ml-3 pl-2">
                    {servicePages.map((link) => (
                      <Link
                        className="pneu-sans px-3 py-2 text-[13px] font-medium text-[#404040] transition-colors hover:bg-[#fff6f6] hover:text-[#d71920]"
                        href={`/services/${link.slug}`}
                        key={link.slug}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </details>
                <details className="border-b border-[#eeeeee] py-1">
                  <summary className="pneu-sans flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-semibold text-[#191919] hover:text-[#d71920] [&::-webkit-details-marker]:hidden">
                    ÎLE-DE-FRANCE
                    <ChevronDown aria-hidden="true" className="size-4" />
                  </summary>
                  <div className="grid border-l border-[#e51d2a] ml-3 pl-2">
                    {departmentPages.map((link) => (
                      <Link
                        className="pneu-sans px-3 py-2 text-[12px] font-medium text-[#404040] transition-colors hover:bg-[#fff6f6] hover:text-[#d71920]"
                        href={`/ile-de-france/${link.slug}`}
                        key={link.slug}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </details>
                {mobileLinks.map((link) => (
                  <Link
                    className="pneu-sans border-b border-[#eeeeee] px-3 py-3 text-sm font-semibold text-[#191919] transition-colors last:border-0 hover:bg-[#fff6f6] hover:text-[#d71920]"
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  className="mt-2 flex items-center gap-2 bg-[#e51d2a] px-3 py-3 font-sans text-sm font-semibold !text-white"
                  href="/#contact"
                >
                  <Phone aria-hidden="true" className="size-4 !text-white" />
                  Nous contacter
                  <ArrowRight
                    aria-hidden="true"
                    className="ml-auto size-4 !text-white"
                  />
                </Link>
              </nav>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
