import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="OUR BLOG">
        <div>
          <div className="blog-area inner-blog-1 section-padding inner-font-1">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="widgets lg-mr-15">
                    <div className="single-widget padding-less-widget">
                      <h3>Search by keyword</h3>
                      <div className="search-form-widget">
                        <form action="#">
                          <input
                            type="search"
                            placeholder="Type keyword here"
                          />
                          <button type="submit" className="search-icon">
                            <i className="fa-solid fa-magnifying-glass" />
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="single-widget about-widget">
                      <div className="about-author">
                        <img src="/assets/img/blog/comment.png" alt="" />
                      </div>
                      <h4>Winston Churchill.</h4>
                      <p>
                        When it comes to business, listen to Henry David
                        Thoreau: things usually don’t happen overnight –
                        instead, to find success takes a lot of time, effort,
                        and courage. Opus includes everything you need to build
                        a beautiful website.
                      </p>
                      <div className="social social3 text-center">
                        <ul>
                          <li>
                            <Link
                              data-bs-toggle="tooltip"
                              title="Linked in"
                              href="#"
                            >
                              <i className="fa-brands fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              data-bs-toggle="tooltip"
                              title="Facebook"
                              href="#"
                            >
                              <i className="fa-brands fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              data-bs-toggle="tooltip"
                              title="Instagram"
                              href="#"
                            >
                              <i className="fa-brands fa-instagram" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              data-bs-toggle="tooltip"
                              title="TikTok"
                              href="#"
                            >
                              <i className="fa-brands fa-tiktok" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="single-widget recent-posts">
                      <h3>Recent Posts</h3>
                      <div className="recent-post">
                        <div className="recent-post-content">
                          <Link href="#">
                            Leadership Burnout: What causes it and how avoid it.
                          </Link>
                          <div className="blog-date-time">
                            <ul className="blog-date">
                              <li>
                                <Link href="#">01.JUL.2022</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="recent-img">
                          <img src="/assets/img/blog/recent1.png" alt="" />
                        </div>
                      </div>
                      <div className="recent-post">
                        <div className="recent-post-content">
                          <Link href="#">
                            Stop setting diversity goals Start meeting them.
                          </Link>
                          <div className="blog-date-time">
                            <ul className="blog-date">
                              <li>
                                <Link href="#">01.JUL.2022</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="recent-img">
                          <img src="/assets/img/blog/recent2.png" alt="" />
                        </div>
                      </div>
                      <div className="recent-post">
                        <div className="recent-post-content">
                          <Link href="#">
                            Leadership Burnout: What causes it and how avoid it.
                          </Link>
                          <div className="blog-date-time">
                            <ul className="blog-date">
                              <li>
                                <Link href="#">01.JUL.2022</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="recent-img">
                          <img src="/assets/img/blog/recent3.png" alt="" />
                        </div>
                      </div>
                      <div className="recent-post">
                        <div className="recent-post-content">
                          <Link href="#">
                            Celebrate Black History Month By Donating.
                          </Link>
                          <div className="blog-date-time">
                            <ul className="blog-date">
                              <li>
                                <Link href="#">01.JUL.2022</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="recent-img">
                          <img src="/assets/img/blog/recent4.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="single-widget categories">
                      <h3>Categories</h3>
                      <ul className="category-list">
                        <li>
                          <Link className="active" href="#">
                            Lifestyle
                            <span>
                              <i className="fa-solid fa-angle-right" />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            Stories
                            <span>
                              <i className="fa-solid fa-angle-right" />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            Updates
                            <span>
                              <i className="fa-solid fa-angle-right" />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            Development
                            <span>
                              <i className="fa-solid fa-angle-right" />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            Marketing
                            <span>
                              <i className="fa-solid fa-angle-right" />
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="single-widget tags-widget">
                      <h3>Tags</h3>
                      <ul className="tags-list">
                        <li>
                          <Link href="#">Healthcare</Link>
                        </li>
                        <li>
                          <Link href="#">Consult</Link>
                        </li>
                        <li>
                          <Link href="#">Cahless</Link>
                        </li>
                        <li>
                          <Link href="#">Cyberattacks</Link>
                        </li>
                        <li>
                          <Link href="#">Meeting</Link>
                        </li>
                        <li>
                          <Link href="#">Leadership</Link>
                        </li>
                        <li>
                          <Link href="#">Health Insurace</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-8">
                  <div className="lg-ml-15">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-blog blog-md">
                          <div className="blog-img">
                            <Link href="/blog-details">
                              <img src="/assets/img/blog/blog5.png" alt="" />
                            </Link>
                          </div>
                          <ul className="blog-tags">
                            <li>
                              <Link href="#">Lifestyle</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link href="/blog-details">
                              Leadership Burnout: What causes it and how to
                              avoid it
                            </Link>
                          </h3>
                          <p>
                            In the past 90 days, the world has a serious
                            escalation in cyberattacks.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-blog blog-md">
                          <div className="blog-img">
                            <Link href="/blog-details">
                              <img src="/assets/img/blog/blog6.png" alt="" />
                            </Link>
                          </div>
                          <ul className="blog-tags">
                            <li>
                              <Link href="#">Lifestyle</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link href="/blog-details">
                              Best Practices for Employee Recognition Programs
                            </Link>
                          </h3>
                          <p>
                            In the past 90 days, the world has a serious
                            escalation in cyberattacks.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-blog blog-md">
                          <div className="blog-img">
                            <Link href="/blog-details">
                              <img src="/assets/img/blog/blog7.png" alt="" />
                            </Link>
                          </div>
                          <ul className="blog-tags">
                            <li>
                              <Link href="#">Lifestyle</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link href="/blog-details">
                              Business opportunities are like buses, there's
                              always one coming.
                            </Link>
                          </h3>
                          <p>
                            In the past 90 days, the world has a serious
                            escalation in cyberattacks.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-blog blog-md">
                          <div className="blog-img">
                            <Link href="/blog-details">
                              <img src="/assets/img/blog/blog8.png" alt="" />
                            </Link>
                          </div>
                          <ul className="blog-tags">
                            <li>
                              <Link href="#">Lifestyle</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link href="/blog-details">
                              Leadership Burnout: What causes it and how to
                              avoid it
                            </Link>
                          </h3>
                          <p>
                            In the past 90 days, the world has a serious
                            escalation in cyberattacks.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-blog blog-md">
                          <div className="blog-img">
                            <Link href="/blog-details">
                              <img src="/assets/img/blog/blog9.png" alt="" />
                            </Link>
                          </div>
                          <ul className="blog-tags">
                            <li>
                              <Link href="#">Lifestyle</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link href="/blog-details">
                              Business opportunities are like buses, there's
                              always one coming.
                            </Link>
                          </h3>
                          <p>
                            In the past 90 days, the world has a serious
                            escalation in cyberattacks.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-blog blog-md">
                          <div className="blog-img">
                            <Link href="/blog-details">
                              <img src="/assets/img/blog/blog3.png" alt="" />
                            </Link>
                          </div>
                          <ul className="blog-tags">
                            <li>
                              <Link href="#">Lifestyle</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link href="/blog-details">
                              Leadership Burnout: What causes it and how to
                              avoid it
                            </Link>
                          </h3>
                          <p>
                            In the past 90 days, the world has a serious
                            escalation in cyberattacks.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-blog blog-md">
                          <div className="blog-img">
                            <Link href="/blog-details">
                              <img src="/assets/img/blog/blog2.png" alt="" />
                            </Link>
                          </div>
                          <ul className="blog-tags">
                            <li>
                              <Link href="#">Lifestyle</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link href="/blog-details">
                              Business opportunities are like buses, there's
                              always one coming.
                            </Link>
                          </h3>
                          <p>
                            In the past 90 days, the world has a serious
                            escalation in cyberattacks.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-blog blog-md">
                          <div className="blog-img">
                            <Link href="/blog-details">
                              <img src="/assets/img/blog/blog3.png" alt="" />
                            </Link>
                          </div>
                          <ul className="blog-tags">
                            <li>
                              <Link href="#">Lifestyle</Link>
                            </li>
                          </ul>
                          <h3>
                            <Link href="/blog-details">
                              Business opportunities are like buses, there's
                              always one coming.
                            </Link>
                          </h3>
                          <p>
                            In the past 90 days, the world has a serious
                            escalation in cyberattacks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=====Blog end=======*/}
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
                      <form action="#">
                        <input type="email" placeholder="Email Address" />
                        <button type="submit" name="button">
                          Subscribe Now
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
