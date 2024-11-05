import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="section-padding bg-28 services-section">
            <div className="container py-5">
              <div class="row">
                <div class="col-6">
                  <div>
                    <p data-aos="fade-right" data-aos-duration={700}>
                      Drive efficiency
                    </p>
                    <h1
                      className="font-f-6"
                      data-aos="fade-right"
                      data-aos-duration={800}
                    >
                      Align your IT infrastructure with your organisational
                      goals
                    </h1>
                    <p
                      className="font-f-5"
                      data-aos="fade-right"
                      data-aos-duration={900}
                    >
                      Say goodbye to the complexities and frustrations of
                      traditional IT management. Our solution empowers you to
                      streamline processes, increase efficiency, and enhance
                      collaboration within your organisation.
                    </p>
                    <div className="pt-3">
                      <button className="font-f-5 weight-400 theme-btn-11">
                        Request a Quote
                        <i className="fa-solid fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div>
                    <img src="/assets/img/service_main.png"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=====Service end=======*/}
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div className="text-center mx-auto py-5">
                  <small>Everything simplified</small>
                  <h1
                    className="font-f-6 pt-3"
                    data-aos="fade-right"
                    style={{fontSize:" 50px"}}
                    data-aos-duration={800}
                  >
                    Unite employees with their specific
                    <span className="ps-3" style={{ borderBottom: "5px solid #7977c6" }}>
                      IT needs
                    </span>
                  </h1>
                  <p className="pt-3" data-aos="fade-right" data-aos-duration={900}>
                    Reduce IT noise and information chaos by uniting everything
                    under a single digital experience<br/> and give your employees
                    the tools to stay productive wherever they work.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*=====Subscribe start=======*/}
          <div className="wave-section-top"></div>
          <div class="container-fluid bg-light">
            <div class="container py-5">
              <div class="row align-items-center">
                <div class="col-6">
                  <div>
                    <img src="/assets/img/service/section1.webp" />
                  </div>
                </div>

                <div class="col-6">
                  <div className="mx-auto py-5">
                    <small>Remove IT complexity</small>
                    <h1
                      className="font-f-6"
                      data-aos="fade-left"
                      data-aos-duration={800}
                    >
                      Software Development
                    </h1>
                    <p data-aos="fade-left" data-aos-duration={900}>
                      Reduce IT overload, confusion and noise. Create a
                      standardised Digital Employee Experience from anywhere,
                      tailored to the device your employees work on, resulting
                      in higher productivity, and engagement within your teams.
                    </p>
                    <div class="pt-4">
                      <a
                        class="font-f-5 text-black aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        href="#"
                      >
                        Try For Free <i class="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container py-5">
              <div class="row align-items-center">
                <div class="col-6">
                  <div className="mx-auto py-5">
                    <small>Role based access</small>
                    <h1
                      className="font-f-6"
                      data-aos="fade-right"
                      data-aos-duration={800}
                    >
                      CMS Management
                    </h1>
                    <p data-aos="fade-right" data-aos-duration={900}>
                      Simplify workplace management by providing a centralised
                      platform for accessing relevant applications. It allows
                      you to connect and manage user groups easily, and set
                      Conditional Access to applications for enhanced security.
                    </p>
                    <div class="pt-4">
                      <a
                        class="font-f-5 text-black aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        href="#"
                      >
                        Try For Free <i class="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div>
                    <img src="/assets/img/service/section2.webp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wave-section-bottom"></div>
          {/*=====Subscribe start=======*/}
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div className="text-center mx-auto w-50 py-5">
                  <small>Insights</small>
                  <h1
                    className="font-f-6"
                    data-aos="fade-right"
                    data-aos-duration={800}
                  >
                    <span className="pe-2">Discover the latest</span>
                    <span style={{ borderBottom: "5px solid #7977c6" }}>
                      insights
                    </span>
                  </h1>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-4 text-center"
                  data-aos="fade-up"
                  data-aos-duration={800}
                >
                  <div className="home4-work-items-all">
                    <div className="home4-work-items">
                      <div className="work-item-img-1">
                        <img src="/assets/img/image/work4-1.png" alt="" />
                      </div>
                      <div className="work-item-img-2">
                        <img
                          src="/assets/img/image/work4-number-1.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="space70" />
                    <div className="home5-work-hadding">
                      <div className="hadding5">
                        <h1 className="font-f-6 font-22 line-height-22 color4 weight-500">
                          <Link href="#" className="color4">
                            Talk to an advisor
                          </Link>
                        </h1>
                        <div className="space10" />
                        <p className="font-f-5 font-16 line-height-lg-26 weight-400 color-p-4">
                          Yes, a real human who can translate industry jargon
                          into plain English for you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 text-center"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  <div className="home4-work-items-all">
                    <div className="home4-work-items">
                      <div className="work-item-img-1">
                        <img src="/assets/img/image/work4-2.png" alt="" />
                      </div>
                      <div className="work-item-img-2">
                        <img
                          src="/assets/img/image/work4-number-2.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="space70" />
                    <div className="hadding5 home5-work-hadding">
                      <h1 className="font-f-6 font-22 line-height-22 color4 weight-500">
                        <Link href="#" className="color4">
                          Get a quote
                        </Link>
                      </h1>
                      <div className="space10" />
                      <p className="font-f-5 font-16 line-height-lg-26 weight-400 color-p-4">
                        Yes, a real human who can translate industry jargon into
                        plain English for you.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 text-center"
                  data-aos="fade-up"
                  data-aos-duration={1200}
                >
                  <div className="home4-work-items-all">
                    <div className="home4-work-items">
                      <div className="work-item-img-1">
                        <img src="/assets/img/image/work4-3.png" alt="" />
                      </div>
                      <div className="work-item-img-2">
                        <img
                          src="/assets/img/image/work4-number-3.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="space70" />
                    <div className="hadding5 home5-work-hadding">
                      <h1 className="font-f-6 font-22 line-height-22 color4 weight-500">
                        <Link href="#" className="color4">
                          Relax and sleep easy
                        </Link>
                      </h1>
                      <div className="space10" />
                      <p className="font-f-5 font-16 line-height-lg-26 weight-400 color-p-4">
                        Yes, a real human who can translate industry jargon into
                        plain English for you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space70" />
          {/*=====Subscribe start=======*/}
          <div className="wave-section-top"></div>
          <div class="container-fluid bg-light">
            <div class="container py-5">
              <div class="row align-items-center">
                <div class="col-6">
                  <div>
                    <img src="/assets/img/service/section1.webp" />
                  </div>
                </div>

                <div class="col-6">
                  <div className="mx-auto py-5">
                    <small>Remove IT complexity</small>
                    <h1
                      className="font-f-6"
                      data-aos="fade-left"
                      data-aos-duration={800}
                    >
                      Software Development
                    </h1>
                    <p data-aos="fade-left" data-aos-duration={900}>
                      Reduce IT overload, confusion and noise. Create a
                      standardised Digital Employee Experience from anywhere,
                      tailored to the device your employees work on, resulting
                      in higher productivity, and engagement within your teams.
                    </p>
                    <div class="pt-4">
                      <a
                        class="font-f-5 text-black aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        href="#"
                      >
                        Try For Free <i class="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container py-5">
              <div class="row align-items-center">
                <div class="col-6">
                  <div className="mx-auto py-5">
                    <small>Role based access</small>
                    <h1
                      className="font-f-6"
                      data-aos="fade-right"
                      data-aos-duration={800}
                    >
                      CMS Management
                    </h1>
                    <p data-aos="fade-right" data-aos-duration={900}>
                      Simplify workplace management by providing a centralised
                      platform for accessing relevant applications. It allows
                      you to connect and manage user groups easily, and set
                      Conditional Access to applications for enhanced security.
                    </p>
                    <div class="pt-4">
                      <a
                        class="font-f-5 text-black aos-init aos-animate"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        href="#"
                      >
                        Try For Free <i class="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div>
                    <img src="/assets/img/service/section2.webp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wave-section-bottom"></div>
          {/*=====Subscribe start=======*/}
          {/*=====About start=======*/}
          <div className="about-inner section-padding">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="mr50">
                    <div className="heading2 no-margin-heading">
                      <small className="heading-top inner-heading-top">
                        <img src="/assets/img/icons/hands.svg" alt="" />
                        Marketing Advertising
                      </small>
                      <h2>
                        our experts business strategists create a feasible route
                        for your startup
                      </h2>
                      <p>
                        Attend is more than a platform. It's a movement to lift
                        the stigma surrounding money and relieve the financial
                        stress that can lead to burnout. Interested in joining
                        our team?
                      </p>
                      <div className="space30" />
                      <Link className="theme-btn-11" href="/contacts">
                        Book Now
                        <img
                          src="/assets/img/icons/arrow-up-right.svg"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mobile-hidden">
                  <div className="about-bg-main-img position-relative ml50">
                    <img
                      className="border-radius"
                      src="/assets/img/service/service-inner.png"
                      alt=""
                    />
                    <div className="corner-right-bottom-shape2 position-absolute">
                      <img
                        src="/assets/img/shapes/shape-right-bottom2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=====About end=======*/}
          {/*=====Subscribe start=======*/}
          <div className="subscribe-4 bg12 padding-90 inner-font-1 inner-subscribe">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="heading4 white-heading inner-heading no-margin-heading">
                    <h2>Design & Motion</h2>
                    <p>
                      We are always looking for talented people, We here to help
                      you to open your bright future.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 offset-lg-1">
                  <div className="sunscribe-form">
                    <div className="subscribe-from-wrap">
                      <form action="#">
                        <input type="email" placeholder="Email Address" />
                        <button type="submit" name="button">
                          Subscribe Now{" "}
                          <img
                            src="/assets/img/icons/arrow-up-right.svg"
                            alt=""
                          />
                        </button>
                      </form>
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
