"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Menu() {
  const routerPath = usePathname();
  useEffect(() => {
    if (routerPath == "/index-rtl-1") {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
      document.body.classList.add("rtl-version");
    } else {
      document.documentElement.lang = "en";
      document.documentElement.dir = "";
      document.body.classList.remove("rtl-version");
    }
  });
  return (
    <>
      <ul className="menu_list scroll">
        <li className="dropdown-parrent">
          <Link href="/">Home</Link>
        </li>
        <li className="dropdown-parrent">
          <Link href="/about-us">About Us</Link>
        </li>
        <li className="mega-menu-parrent">
          <Link href="/services">Services</Link>
        </li>
        <li className="dropdown-parrent">
          <Link href="/blogs">Blog</Link>
        </li>
        <li className="dropdown-parrent">
          <Link href="/teams">Team</Link>
        </li>
        <li className="dropdown-parrent">
          <Link href="/careers">Career</Link>
        </li>
        <li className="dropdown-parrent">
          <Link href="/contacts">Contact</Link>
        </li>
      </ul>
    </>
  );
}
