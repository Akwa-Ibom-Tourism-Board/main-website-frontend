import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

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
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full py-2 text-foreground hover:text-primary transition-colors font-medium"
        >
          {item.name}
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="pl-4 py-2 space-y-2 border-l-2 border-primary/30">
            {item.items.map((subItem) => (
              <Link
                key={subItem.name}
                to={subItem.href}
                className="block py-1.5 text-muted-foreground hover:text-primary transition-colors text-sm"
                onClick={onItemClick}
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex hover:text-[#e37333] items-center gap-1 text-foreground transition-colors font-medium py-2">
        {item.name}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "absolute top-full left-0 min-w-[220px] bg-background border border-border rounded-lg shadow-lg py-2 z-50",
          "transition-all duration-200 ease-out origin-top",
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        )}
      >
        {item.items.map((subItem) => (
          <Link
            key={subItem.name}
            to={subItem.href}
            className="block px-4 py-2.5 text-foreground hover:text-white hover:bg-[#287962] transition-colors text-sm"
          >
            {subItem.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
