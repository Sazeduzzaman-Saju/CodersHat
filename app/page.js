import About from "@/components/homepages/home5/About";
import CaseStudy from "@/components/homepages/home5/CaseStudy";
import Welcome from "@/components/homepages/home5/Welcome";
import Layout from "@/components/layout/Layout";
import Subscribe from "@/components/homepages/home5/Subscribe";
import Service from "@/components/homepages/home4/Service";
import Testimaonial from "@/components/homepages/home5/Testimaonial";
import HowItWork from "@/components/homepages/home5/HowItWork";
import Contact from "@/components/homepages/home5/Contact";
import Blog from "@/components/homepages/home4/Blog";
import Counter from "@/components/homepages/home5/Counter";
import Logo from "@/components/homepages/home4/Logo";
import TaxBusiness from "@/components/homepages/home1/TaxBusiness";

export default function Page() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Welcome />
        <Counter/>
        <About />
        <Service/>
        <HowItWork/>
        <Logo/>
        <Testimaonial />
        <CaseStudy />
        <Subscribe />
        <Contact/>
        <Blog/>
      </Layout>
    </>
  );
}
