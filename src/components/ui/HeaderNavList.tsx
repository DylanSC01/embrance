import { HeaderNavItem } from "@/components/ui";
import type { HeaderItem } from "@/types";

interface HeaderNavListProps {
  headerLinks: HeaderItem[];
  onSelect?: () => void;
}

export const HeaderNavList = ({ headerLinks, onSelect }: HeaderNavListProps) => {
  return (
    <nav>
      <ul className="flex flex-col lg:flex-row items-center gap-10">
        {headerLinks.map((link, index) => (
          <HeaderNavItem onSelect={onSelect} key={index} link={link} />
        ))}
      </ul>
    </nav>
  );
};
