import About from "@/components/homepages/home5/About";
import CaseStudy from "@/components/homepages/home5/CaseStudy";
import Welcome from "@/components/homepages/home5/Welcome";
import Layout from "@/components/layout/Layout";
import Subscribe from "@/components/homepages/home5/Subscribe";
import Service from "@/components/homepages/home5/Service";
import Agants from "@/components/homepages/home5/Agants";
import Testimaonial from "@/components/homepages/home5/Testimaonial";
import HowItWork from "@/components/homepages/home5/HowItWork";
import Contact from "@/components/homepages/home5/Contact";
import Blog from "@/components/homepages/home5/Blog";

export default function Page() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Welcome />
        {/* <TaxBusiness /> */}
        <Service/>
        <About />
        <HowItWork/>
        <Agants />
        <CaseStudy />
        <Testimaonial />
        <Subscribe />
        <Contact/>
        <Blog/>
      </Layout>
    </>
  );
}
