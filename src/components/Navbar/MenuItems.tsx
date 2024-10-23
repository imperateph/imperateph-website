"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuItems({
  className,
  itemClassName,
}: {
  className?: string;
  itemClassName?: string;
}) {
  const listItemClassName = `hover:underline cursor-pointer ${itemClassName}`;
  const pathname = usePathname();

  const active = "font-bold";

  const isActive = (path: string) => {
    return pathname.startsWith(path) ? active : "";
  };

  return (
    <ul className={className}>
      <li className={`${listItemClassName} ${isActive("/")}`}>
        <Link href="/">Home</Link>
      </li>
      <li className={`${listItemClassName} ${isActive("/properties")}`}>
        <Link href="/properties">Properties</Link>
      </li>
      <li className={`${listItemClassName} ${isActive("/contact")}`}>
        <Link href="/contact">Contact Us</Link>
      </li>
    </ul>
  );
}
