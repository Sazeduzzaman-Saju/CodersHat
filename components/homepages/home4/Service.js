import Link from "next/link";

export default function Service() {
  return (
    <>
      <div className="service-area section-padding2 position-relative cst-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <div className="heading text-center">
                <small data-aos="fade-up" data-aos-duration={400}>
                  See Our Services
                </small>
                <h2 data-aos="fade-up" data-aos-duration={800}>
                  We offer wide range{" "}
                  <span className="heilight-right heading-underline">
                    of services
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={400}
            >
              <div className="single-service">
                <div className="service-icon">
                  <img src="/assets/img/icons/service1.png" alt="" />
                </div>
                <div className="service-content">
                  <h3>Management Tools</h3>
                  <p>
                    Coder's Hat has a team of skilled and trained programmers
                    who will consolidate all the essential functions of your
                    business into a customized website tailored to your specific
                    needs. This will help streamline operations, enhance
                    customer engagement, and support the smooth, efficient
                    growth of your business.
                  </p>
                </div>
                <Link href="#" className="theme-btn-6">
                  Check out more <i className="ps-2 fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div className="single-service">
                <div className="service-icon">
                  <img src="/assets/img/icons/service2.png" alt="" />
                </div>
                <div className="service-content">
                  <h3>Website Maintenance</h3>
                  <p>
                    Once launched, a website can no longer be ignored. In fact,
                    this is when our DevOps and support teams step in to keep
                    your website secure and up to date. Whether you need
                    frequent updates, security monitoring, or performance
                    optimization, we're here to ensure your website runs
                    smoothly.
                  </p>
                </div>
                <Link href="#" className="theme-btn-6">
                  Check out more <i className="ps-2 fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={800}
            >
              <div className="single-service">
                <div className="service-icon">
                  <img src="/assets/img/icons/service3.png" alt="" />
                </div>
                <div className="service-content">
                  <h3>Responsive Design UI/UX</h3>
                  <p>
                    Responsive design is essential for delivering a seamless
                    user experience across all devices. At Coder's Hat, we focus
                    on creating intuitive UI/UX designs that adapt to various
                    screen sizes and orientations, ensuring your website looks
                    and functions beautifully on desktops, tablets, and
                    smartphones.
                  </p>
                </div>
                <Link href="#" className="theme-btn-6">
                  Check out more <i className="ps-2 fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <div className="single-service">
                <div className="service-icon">
                  <img src="/assets/img/icons/service4.png" alt="" />
                </div>
                <div className="service-content">
                  <h3>Software Development</h3>
                  <p>
                    At Coder's Hat, we specialize in software development
                    tailored to meet your unique business needs. Our team of
                    experienced developers utilizes the latest technologies and
                    best practices to build robust, scalable, and efficient
                    software solutions. From custom applications to system
                    integrations.
                  </p>
                </div>
                <Link href="#" className="theme-btn-6">
                  Check out more <i className="ps-2 fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1200}
            >
              <div className="single-service">
                <div className="service-icon">
                  <img src="/assets/img/icons/service5.png" alt="" />
                </div>
                <div className="service-content">
                  <h3>Quality Assurance</h3>
                  <p>
                    Quality Assurance is a critical component of our development
                    process at Coder's Hat. We are committed to delivering
                    flawless software by implementing rigorous testing protocols
                    and industry best practices. Our QA team meticulously
                    evaluates every aspect of your application, from
                    functionality
                  </p>
                </div>
                <Link href="#" className="theme-btn-6">
                  Check out more <i className="ps-2 fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1400}
            >
              <div className="single-service">
                <div className="service-icon">
                  <img src="/assets/img/icons/service6.png" alt="" />
                </div>
                <div className="service-content">
                  <h3>Process & Complete Development</h3>
                  <p>
                    At Coder's Hat, our process for complete development is
                    designed to ensure that your project is executed smoothly
                    from start to finish. We begin with an in-depth consultation
                    to understand your requirements, followed by a thorough
                    planning phase where we outline the project's scope and
                    timeline.
                  </p>
                </div>
                <Link href="#" className="theme-btn-6">
                  Check out more <i className="ps-2 fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/img/shapes/service1.png"
          alt=""
          className="service-shape1"
        />
      </div>
    </>
  );
}
