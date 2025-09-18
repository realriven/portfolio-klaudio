import React from "react";

// Import components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

// Custom component for navigation menu links
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// Style definition
const linkStyle = "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground";
const gridStyle = "grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2";

export default function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={linkStyle}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects & Works</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={gridStyle}>
              <ListItem href="/projects/engineering" title="Engineering">
                Engineering and university projects
              </ListItem>
              <ListItem href="/projects/software" title="Software">
                Web and software development work
              </ListItem>
              <ListItem href="/projects/teaching" title="Teaching">
                Teaching and educational projects
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href="/career" legacyBehavior passHref>
            <NavigationMenuLink className={linkStyle}>
              Career
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contacts" legacyBehavior passHref>
            <NavigationMenuLink className={linkStyle}>
              Contact me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}