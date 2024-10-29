import React from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import RecentBlogs from "./RecentBlogs/RecentBlogs";
import FallbackImages from "@/util/FallBackImage/FallBackImage";

const SingleBlogs = ({ blogLists }) => {
  // Function to format date as '01.JUL.2022'
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .toUpperCase()
      .replace(/\s/g, "-"); // Format to '01.JUL.2022'
  };
  return (
    <div>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div
            className="single-blog-area padding-top inner-font-1 inner-blog-1"
            id="home"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="widgets lg-mr-15">
                    <div className="single-widget padding-less-widget">
                      <h3>Author Information</h3>
                    </div>
                    <div className="single-widget about-widget">
                      <div className="about-author">
                        <FallbackImages
                          className="img-fluid"
                          width={50}
                          src={`https://backoffice.codershatbd.com/storage/${blogLists.logo}`}
                          alt={blogLists.title}
                          title="Advertisement expired"
                        />
                        {/* logo */}
                      </div>
                      <h4>{blogLists.author || "Coder's Hat"}</h4>
                      <p>
                        {blogLists.address ||
                          " When it comes to business, listen to Khandker Shahed: things usually don’t happen overnight – instead, to find success takes a lot of time, effort, and courage. Opus includes everything you need to build a beautiful website."}
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
                      <RecentBlogs />
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
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="single-blog-contents lg-ml-15">
                    <div className="single-blog-img">
                      {/* <img src="/assets/img/blog/single1.png" alt="" /> */}
                      <FallbackImages
                        className="img-fluid"
                        src={`https://backoffice.codershatbd.com/storage/${blogLists.banner_image}`}
                        alt={blogLists.title}
                        title="Advertisement expired"
                      />
                    </div>
                    <ul className="blog-tags">
                      <li>
                        <Link href="#">{blogLists.blog_category.name}</Link>
                      </li>
                    </ul>
                    <h2>{blogLists.title}</h2>
                    <div className="blog-date-time">
                      <ul className="blog-date">
                        <li>
                          <Link href="#">
                            {formatDate(blogLists.created_at)}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <p>{blogLists.short_description}</p>
                    <h3>
                      Five things all HRs think when they think of diversity.
                    </h3>
                    <p>{blogLists.long_description}</p>
                    <div className="single-blog-quote">
                      <h4>“ {blogLists.footer}”</h4>
                      <Link href="#">Winston Churchill. </Link>
                    </div>
                    <h3>
                      Five things all HRs think when they think of diversity.
                    </h3>
                    <p>{blogLists.blog_category.description}</p>
                    <div className="single-blog-img">
                      <FallbackImages
                        className="img-fluid"
                        src={`https://backoffice.codershatbd.com/storage/${blogLists.image}`}
                        alt={blogLists.title}
                        title="Advertisement expired"
                      />
                    </div>
                    <h3></h3>
                    <p>{blogLists.footer}</p>
                    <div className="theme-border" />
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="tags">
                          <ul>
                            <li>TAGS:</li>
                            <li>
                              <Link href="#">Healthcare</Link>
                            </li>
                            <li>
                              <Link href="#">Consult</Link>
                            </li>
                            <li>
                              <Link href="#">Exclusive</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="social social3 text-right social-share">
                          <ul>
                            <li>Share:</li>
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
                    </div>
                  </div>
                  <div className="theme-comments-list">
                    <h3>2 Comments</h3>
                    <div className="comments-list">
                      <div className="single-commencts">
                        <div className="comments-img">
                          <img src="/assets/img/blog/comment.png" alt="" />
                        </div>
                        <div className="comments-heading">
                          <h4>Winston Churchill.</h4>
                          <Link href="#" className="reply-btn">
                            Reply
                          </Link>
                        </div>
                        <p>
                          From watching sunsets to seeing old photo albums,
                          Sakshi finds joy in little things. With a bachelor’s
                          degree in psychology, she writes helpful,
                          well-researched content on mental health and
                          wellbeing.
                        </p>
                      </div>
                      <div className="single-commencts">
                        <div className="comments-img">
                          <img src="/assets/img/blog/comment.png" alt="" />
                        </div>
                        <div className="comments-heading">
                          <h4>Winston Churchill.</h4>
                          <Link href="#" className="reply-btn">
                            Reply
                          </Link>
                        </div>
                        <p>
                          From watching sunsets to seeing old photo albums,
                          Sakshi finds joy in little things. With a bachelor’s
                          degree in psychology, she writes helpful,
                          well-researched content on mental health and
                          wellbeing.
                        </p>
                      </div>
                      <div className="single-commencts">
                        <div className="comments-img">
                          <img src="/assets/img/blog/comment.png" alt="" />
                        </div>
                        <div className="comments-heading">
                          <h4>Winston Churchill.</h4>
                          <Link href="#" className="reply-btn">
                            Reply
                          </Link>
                        </div>
                        <p>
                          From watching sunsets to seeing old photo albums,
                          Sakshi finds joy in little things. With a bachelor’s
                          degree in psychology, she writes helpful,
                          well-researched content on mental health and
                          wellbeing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="write-comments">
                    <h3>Leave a Comment</h3>
                    <div className="comment-form">
                      <form>
                        <div className="row">
                          <div className="col-lg-6">
                            <input type="text" placeholder="Name" />
                          </div>
                          <div className="col-lg-6">
                            <input type="email" placeholder="Email Address" />
                          </div>
                          <div className="col-lg-12">
                            <textarea
                              name
                              id
                              cols={30}
                              rows={10}
                              placeholder="Write a Comment"
                            />
                          </div>
                          <div className="col-12">
                            <button
                              type="submit"
                              className="theme-btn theme-btn-14"
                            >
                              Submit Comment
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=====Single blog end=======*/}
          {/*=====More blog  start=======*/}
          <div className="section-padding2 blog-area inner-blog-1 section-padding inner-font-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 m-auto">
                  <div className="heading2 text-center">
                    <small className="heading-top inner-heading-top">
                      <img src="/assets/img/icons/hands.svg" alt="" />
                      Our More Blogs
                    </small>
                    <h2>Our team of financial professionals.</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
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
                        "Anyone can be a refugee": Resisting racism in Neukölln.
                      </Link>
                    </h3>
                    <p>
                      In the past 90 days, the world has a serious escalation in
                      cyberattacks.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="single-blog blog-md">
                    <div className="blog-img">
                      <Link href="/blog-details">
                        <img src="/assets/img/blog/blog7.png" alt="" />
                      </Link>
                    </div>
                    <ul className="blog-tags">
                      <li>
                        <Link href="#">Story</Link>
                      </li>
                    </ul>
                    <h3>
                      <Link href="/blog-details">
                        Best Practices for Employee Recognition Programs
                      </Link>
                    </h3>
                    <p>
                      In the past 90 days, the world has a serious escalation in
                      cyberattacks.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="single-blog blog-md">
                    <div className="blog-img">
                      <Link href="/blog-details">
                        <img src="/assets/img/blog/blog8.png" alt="" />
                      </Link>
                    </div>
                    <ul className="blog-tags">
                      <li>
                        <Link href="#">Design</Link>
                      </li>
                    </ul>
                    <h3>
                      <Link href="/blog-details">
                        Five things all HRs think when they think of diversity.
                      </Link>
                    </h3>
                    <p>
                      In the past 90 days, the world has a serious escalation in
                      cyberattacks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=====More blog end=======*/}
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
                      <form>
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
    </div>
  );
};

export default SingleBlogs;
