import Link from "next/link";
import React from "react";

const BlogsCards = ({ allBlogs }) => {
  console.log(allBlogs, "all allBlogs");
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <div className="heading text-center">
            <small data-aos="fade-up" data-aos-duration={600}>
              Our Blog
            </small>
            <h2 data-aos="fade-up" data-aos-duration={800}>
              Take a look at the latest{" "}
              <span className="heilight-right heading-underline">
                articles from
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        {allBlogs && allBlogs.length > 0 ? (
          allBlogs.map((blog, index) => (
            <div
              key={blog.id} // Use unique key for each blog post
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration={600 + index * 200} // Increment animation delay
            >
              {/* <div className="single-blog blog-sm">
                <div className="blog-img">
                  <img src={`/assets/img/blog/${blog.img}`} alt={blog.title} />
                </div>
                <ul className="blog-tags">
                  <li>
                    <Link href="#">{blog.category}</Link>
                  </li>
                </ul>
                <h3>
                  <Link href="/single">{blog.title}</Link>
                </h3>
                <p>
                  {blog.author} - {blog.date}
                </p>
              </div> */}
              asdasdasd
            </div>
          ))
        ) : (
          <p>No blogs available.</p>
        )}

        <div className="space40" />
        <div className="col-12 text-center">
          <Link href="/blog" className="theme-btn-5">
            Read all blog posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsCards;
