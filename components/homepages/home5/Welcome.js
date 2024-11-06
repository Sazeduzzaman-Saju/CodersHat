export default function Welcome() {
  return (
    <>
      <div
        className="home6-full-header bg-cover"
        style={{ backgroundImage: "url(assets/img/bg/hero-main.png)" }}
      >
        <div className="welcome-4 home4-bg position-relative" id="home">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="titel4-main ">
                  <h1
                    className="font-f-1"
                    data-aos="fade-right"
                    data-aos-duration={800}
                  >
                    Digital Services Across All Platforms
                  </h1>
                  <p
                    className="font-f-5"
                    data-aos="fade-right"
                    data-aos-duration={900}
                  >
                    Our expert team specializes in software development, graphic
                    design, SEO, and digital marketing, ensuring that you
                    receive comprehensive solutions tailored to your goals
                  </p>
                  <div className="space30" />
                  <div className="home4-header-input-all">
                    <div
                      className="home4-header-input"
                      data-aos="fade-right"
                      data-aos-duration={800}
                    >
                      <form action="#">
                        <button className="font-f-5 weight-400 theme-btn-18 mt-4">
                          Contact Us
                          <i className="fa-solid fa-arrow-right" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="home6-header-images">
                  <div className="home6-header-img1 aniamtion-key-5">
                    <img src="/assets/img/shapes/header6-main-shpe.svg" alt />
                  </div>
                  <div
                    className="home6-header-img2 svg-her-box aos-init aos-animate"
                    data-aos="zoom-out"
                    data-aos-duration={1000}
                  >
                    {/* <img src="/assets/img/HeroBanner/hero-banner.png" alt /> */}
                    <img className="web-development-gif img-fluid" src="/assets/img/bg/web_development.gif" alt />
                  </div>
                  <div
                    className="home6-header-img3 aniamtion-key-1 aos-init aos-animate graphic-design"
                    data-aos="zoom-out"
                    data-aos-duration={1200}
                  >
                    <img src="/assets/img/bg/graphic-design.gif" alt />
                  </div>
                  <div
                    className="home6-header-img4 aniamtion-key-1 aos-init aos-animate digital-seo"
                    data-aos="zoom-out"
                    data-aos-duration={1200}
                  >
                    <img src="/assets/img/bg/digital_seo.gif" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
