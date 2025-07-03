import type { HeaderItem } from "@/types";

interface HeaderNavItemProps {
  link: HeaderItem;
  onSelect?: () => void;
}

export const HeaderNavItem = ({ link, onSelect }: HeaderNavItemProps) => {
  return (
    <li>
      <a href={link.href} onClick={onSelect}>{link.name}</a>
    </li>
  );
};
