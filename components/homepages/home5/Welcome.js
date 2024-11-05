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
                    className="font-f-6"
                    data-aos="fade-right"
                    data-aos-duration={800}
                  >
                    High-Quality Digital Services Across All Platforms at Great
                    Prices.
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
                        <input type="number" placeholder="Enter Zip Code" />
                        <button className="font-f-5 weight-400 theme-btn-18">
                          Request a Quote{" "}
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
                    className="home6-header-img2 aos-init aos-animate"
                    data-aos="zoom-out"
                    data-aos-duration={1000}
                  >
                    <img src="/assets/img/HeroBanner/hero-banner.png" alt />
                  </div>
                  <div
                    className="home6-header-img3 aniamtion-key-1 aos-init aos-animate"
                    data-aos="zoom-out"
                    data-aos-duration={1200}
                  >
                    <img src="/assets/img/shapes/header6-shape1.svg" alt />
                  </div>
                  <div
                    className="home6-header-img4 aniamtion-key-1 aos-init aos-animate"
                    data-aos="zoom-out"
                    data-aos-duration={1200}
                  >
                    <img src="/assets/img/shapes/header6-shape2.svg" alt />
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
