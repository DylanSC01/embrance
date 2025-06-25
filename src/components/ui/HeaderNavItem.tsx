import type { HeaderItem } from "@/types";

interface HeaderNavItemProps {
  link: HeaderItem;
}

export const HeaderNavItem = ({ link }: HeaderNavItemProps) => {
  return (
    <li>
      <a href={link.href}>{link.name}</a>
    </li>
  );
};
