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
          <Link href="javascript:void(0)">Services</Link>
          <ul className="theme-mega-menu">
            <li className="mega-menu">
              <div className="single-mega-menu">
                <h3 className="font-f-1">Software</h3>
                <ul>
                  <li>
                    <Link href="/service-1">Custom Software</Link>
                  </li>
                  <li>
                    <Link href="/service-1">Ecommerce</Link>
                  </li>
                  <li>
                    <Link href="/service-1">
                      AMS(Account Management System)
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-1">
                      LMS(Learning Management System)
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-1">Discount Site(Offers)</Link>
                  </li>
                </ul>
              </div>
              <div className="single-mega-menu">
                <h3 className="font-f-1">Custom Site</h3>
                <ul>
                  <li>
                    <Link href="/service-1">Frontend Development</Link>
                  </li>
                  <li>
                    <Link href="/service-1">Backend Development</Link>
                  </li>
                  <li>
                    <Link href="/service-1">Dev-Of Services</Link>
                  </li>
                </ul>
              </div>
              <div className="single-mega-menu">
                <h3 className="font-f-1">Wordpress Site</h3>
                <ul>
                  <li>
                    <Link href="/service-1">Custom Design </Link>
                  </li>
                  <li>
                    <Link href="/service-1">Template Customization</Link>
                  </li>
                </ul>
              </div>
              <div className="single-mega-menu">
                <h3 className="font-f-1">Design & Motion</h3>
                <ul>
                  <li>
                    <Link href="/service-1">Graphic Designs</Link>
                  </li>
                  <li>
                    <Link href="/service-1">Website UI/UX Design</Link>
                  </li>
                  <li>
                    <Link href="/service-1">Gigma Design</Link>
                  </li>
                </ul>
              </div>
              <div className="single-mega-menu">
                <h3 className="font-f-1">Site Seo</h3>
                <ul>
                  <li>
                    <Link href="/service-1">Product's Seo</Link>
                  </li>
                  <li>
                    <Link href="/service-1">Site Seo</Link>
                  </li>
                  <li>
                    <Link href="/service-1">Marketing</Link>
                  </li>
                  <li>
                    <Link href="/service-1">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link href="/service-1">Boosting Services</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
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
