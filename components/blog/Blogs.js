import React from "react";
import Layout from "../layout/Layout";
import BlogCategory from "./BlogCategory/BlogCategory";
import AllBlogs from "./AllBlogs";

const Blogs = ({ blogCategoryData, blogData }) => {
  return (
    <div>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="OUR BLOG">
        <div>
          <div className="blog-area inner-blog-1 section-padding inner-font-1">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="widgets lg-mr-15">
                    <div className="single-widget categories">
                      <h3>Categories</h3>
                      <BlogCategory blogCategoryData={blogCategoryData} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-8">
                  <div className="lg-ml-15">
                    <div className="row">
                      {/* blogData */}
                      <AllBlogs blogData={blogData}/>
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
    </div>
  );
};

export default Blogs;
