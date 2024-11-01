"use client";
import AOS from "aos";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import DemoSidebar from "./DemoSidebar";
import MobileMenu from "./MobileMenu";
import PageHead from "./PageHead";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Footer3 from "./footer/Footer3";
import Footer4 from "./footer/Footer4";
import Footer5 from "./footer/Footer5";
import Footer6 from "./footer/Footer6";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";
import Header4 from "./header/Header4";
import Header5 from "./header/Header5";
import Header6 from "./header/Header6";
import SiteInfoApi from "@/util/Apis/SiteInfo/SiteInfo";

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  breadcrumbTitle,
  children,
}) {
  const [scroll, setScroll] = useState(0);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [categoryData, setCategoryData] = useState(null);

  const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

  useEffect(() => {
    AOS.init();

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });

    // Fetch Blog Category Data
    async function fetchBlogCategoryData() {
      try {
        const data = await SiteInfoApi();
        setCategoryData(data);
      } catch (error) {
        console.error("Error fetching blog category data:", error);
      }
    }

    fetchBlogCategoryData();
  }, []); // Empty array to only fetch on mount

  return (
    <>
      <PageHead headTitle={headTitle} />

      {!headerStyle && (
        <Header1
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          categoryData={categoryData}
        />
      )}
      {headerStyle === 1 && (
        <Header1
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          categoryData={categoryData}
        />
      )}
      {headerStyle === 2 && (
        <Header2
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          categoryData={categoryData}
        />
      )}
      {headerStyle === 3 && (
        <Header3
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          categoryData={categoryData}
        />
      )}
      {headerStyle === 4 && (
        <Header4
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          categoryData={categoryData}
        />
      )}
      {headerStyle === 5 && (
        <Header5
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          categoryData={categoryData}
        />
      )}
      {headerStyle === 6 && (
        <Header6
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          categoryData={categoryData}
        />
      )}

      <MobileMenu
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
      {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
      {children}

      {!footerStyle && <Footer1  categoryData={categoryData}/>}
      {footerStyle === 1 && <Footer1  categoryData={categoryData}/>}
      {footerStyle === 2 && <Footer2  categoryData={categoryData}/>}
      {footerStyle === 3 && <Footer3  categoryData={categoryData}/>}
      {footerStyle === 4 && <Footer4  categoryData={categoryData}/>}
      {footerStyle === 5 && <Footer5  categoryData={categoryData}/>}
      {footerStyle === 6 && <Footer6  categoryData={categoryData}/>}

      <DemoSidebar />
      <BackToTop scroll={scroll} />
    </>
  );
}
