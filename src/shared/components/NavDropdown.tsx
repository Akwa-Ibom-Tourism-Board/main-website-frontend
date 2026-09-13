import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  MobileWrapper,
  MobileTrigger,
  MobilePanel,
  MobileList,
  MobileItem,
  DesktopWrapper,
  DesktopTrigger,
  DesktopPanel,
  DesktopItem,
} from "./NavDropdown.styles";

export interface DropdownItem {
  name: string;
  href: string;
}

export interface NavItemWithDropdown {
  name: string;
  href?: string;
  items: DropdownItem[];
}

interface NavDropdownProps {
  item: NavItemWithDropdown;
  mobile?: boolean;
  onItemClick?: () => void;
}

const NavDropdown = ({ item, mobile = false, onItemClick }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (mobile) {
    return (
      <MobileWrapper>
        <MobileTrigger onClick={() => setIsOpen(!isOpen)}>
          {item.name}
          <ChevronDown size={16} style={{ transform: isOpen ? "rotate(180deg)" : undefined, transition: "transform 200ms" }} />
        </MobileTrigger>
        <MobilePanel $open={isOpen}>
          <MobileList>
            {item.items.map((subItem) => (
              <MobileItem as={Link} key={subItem.name} to={subItem.href} onClick={onItemClick}>
                {subItem.name}
              </MobileItem>
            ))}
          </MobileList>
        </MobilePanel>
      </MobileWrapper>
    );
  }

  return (
    <DesktopWrapper onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <DesktopTrigger>
        {item.name}
        <ChevronDown size={16} style={{ transform: isOpen ? "rotate(180deg)" : undefined, transition: "transform 200ms" }} />
      </DesktopTrigger>
      <DesktopPanel $open={isOpen}>
        {item.items.map((subItem) => (
          <DesktopItem as={Link} key={subItem.name} to={subItem.href}>
            {subItem.name}
          </DesktopItem>
        ))}
      </DesktopPanel>
    </DesktopWrapper>
  );
};

export default NavDropdown;
