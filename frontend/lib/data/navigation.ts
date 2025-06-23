export type NavigationItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavigationItem[] = [
  { label: "Events", href: "/events" },
  { label: "Destinations", href: "/destinations" },
  { label: "Articles", href: "/articles" },
  { label: "About Us", href: "/about" },
];
