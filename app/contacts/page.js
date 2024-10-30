import ContactForm from "@/components/contact/ContactForm";
import SubscribeForm from "@/components/contact/SubscribeForm";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONTACT">
        <div>
          <div className="contact-boxes">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="single-contact-box">
                    <div className="contact-box-icon">
                      <img src="/assets/img/icons/contact-1.svg" alt="" />
                    </div>
                    <div className="contact-box-content">
                      <p className="font-f-3">CALL US</p>
                      <Link className="font-f-3" href="/tel:+11 1111 11000">
                        +11 1111 11000
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-contact-box">
                    <div className="contact-box-icon">
                      <img src="/assets/img/icons/contact-2.svg" alt="" />
                    </div>
                    <div className="contact-box-content">
                      <p className="font-f-3">EMAIL US</p>
                      <Link
                        className="font-f-3"
                        href="/mailto:hello@consultia.com"
                      >
                        hello@consultia.com
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-contact-box">
                    <div className="contact-box-icon">
                      <img src="/assets/img/icons/contact-3.svg" alt="" />
                    </div>
                    <div className="contact-box-content">
                      <p className="font-f-3">HEADQUARTERS</p>
                      <Link className="font-f-3" href="#">
                        New York, NY 94105, United States
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=====Contact Boxes End=======*/}
          {/*=====Contact Form Start=======*/}
          <div className="main-contact-form section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="heading2 mr50">
                    <small className="heading-top inner-heading-top">
                      <img src="/assets/img/icons/hands.svg" alt="" />
                      Our Success in Numbers
                    </small>
                    <h2>Let’s Work Together</h2>
                    <p>
                      Share your vision for your next projects with us now.
                      Please contact us for basic questions. we’re here to help!
                    </p>
                  </div>
                </div>
                <div className="col-lg-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
          {/*=====Contact Form End=======*/}
          {/*=====Office-area end=======*/}
          {/* <div className="office-area section-padding2 bg-13 inner-font-1 _relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center">
                                        <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Our Success in
                                            Numbers</small>
                                        <h2>Our Offices Around the World</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>
                                            <Link href="#">New York Office</Link>
                                        </h3>
                                        <p>
                                            90 Abia Martin Drive, Ocean Beach, New York, NY 94105, United
                                            States
                                        </p>
                                        <Link href="#" className="theme-btn-13">Get Direction
                                            <img src="/assets/img/icons/arrow-up-right-inner-1.svg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>San Francisco Office</h3>
                                        <p>
                                            90 Abia Martin Drive, Ocean Beach, New York, NY 94105, United
                                            States
                                        </p>
                                        <Link href="#" className="theme-btn-13">Get Direction
                                            <img src="/assets/img/icons/arrow-up-right-inner-1.svg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>Dublin Office</h3>
                                        <p>
                                            90 Abia Martin Drive, Ocean Beach, New York, NY 94105, United
                                            States
                                        </p>
                                        <Link href="#" className="theme-btn-13">Get Direction
                                            <img src="/assets/img/icons/arrow-up-right-inner-1.svg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>Boston Office</h3>
                                        <p>
                                            90 Abia Martin Drive, Ocean Beach, New York, NY 94105, United
                                            States
                                        </p>
                                        <Link href="#" className="theme-btn-13">Get Direction
                                            <img src="/assets/img/icons/arrow-up-right-inner-1.svg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>Los Angeles Office</h3>
                                        <p>
                                            90 Abia Martin Drive, Ocean Beach, New York, NY 94105, United
                                            States
                                        </p>
                                        <Link href="#" className="theme-btn-13">Get Direction
                                            <img src="/assets/img/icons/arrow-up-right-inner-1.svg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>Nashville Office</h3>
                                        <p>
                                            90 Abia Martin Drive, Ocean Beach, New York, NY 94105, United
                                            States
                                        </p>
                                        <Link href="#" className="theme-btn-13">Get Direction
                                            <img src="/assets/img/icons/arrow-up-right-inner-1.svg" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shape-007">
                            <img src="/assets/img/shapes/shape007.svg" alt="" />
                        </div>
                    </div> */}
          {/*=====Office-area end=======*/}
          {/*=====Subscribe start=======*/}
          <div className="subscribe-4 bg12 padding-90 inner-font-1 inner-subscribe">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="heading4 white-heading inner-heading no-margin-heading">
                    <h2>Want to join our team?</h2>
                    <p>
                      We are always looking for talented people, We here to help
                      you to open your bright future.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 offset-lg-1">
                  <div className="sunscribe-form">
                    <div className="subscribe-from-wrap">
                      <SubscribeForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
