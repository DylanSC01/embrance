import { HeaderNavItem, type HeaderItem } from "./HeaderNavItem";

interface HeaderNavListProps {
  headerLinks: HeaderItem[];
}

export const HeaderNavList = ({ headerLinks }: HeaderNavListProps) => {
  return (
    <nav>
      <ul className="flex flex-col lg:flex-row items-center gap-10">
        {headerLinks.map((link, index) => (
          <HeaderNavItem key={index} link={link} />
        ))}
      </ul>
    </nav>
  );
};
