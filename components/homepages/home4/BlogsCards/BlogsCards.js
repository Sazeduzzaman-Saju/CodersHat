import FallbackImages from "@/util/FallBackImage/FallBackImage";
import Link from "next/link";
import React from "react";

const BlogsCards = ({ allBlogs }) => {
  const blogsData = allBlogs.slice(0, 3);
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
      .replace(/\s/g, "."); // Format to '01.JUL.2022'
  };
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
        {blogsData && blogsData.length > 0 ? (
          blogsData.map((blog, index) => (
            <div
              key={index} // Use unique key for each blog post
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration={600 + index * 200} // Increment animation delay
            >
              <div className="single-blog blog-sm">
                <Link href={`/blog-detail/${blog.slug}` || "/"}>
                  <div className="blog-img">
                    <FallbackImages
                      className="img-fluid"
                      src={`https://backoffice.codershatbd.com/storage/${blog.image}`} 
                      alt={blog.title}
                      title="Advertisement expired"
                    />
                  </div>
                  <ul className="blog-tags">
                    <li>
                      <Link href="#">{blog.badge}</Link>
                    </li>
                  </ul>
                  <h3>{blog.title}</h3>

                  <p>{blog.header}</p>
                  <p>
                    <span>{blog.author || "Coder's Hat"}</span> -{" "}
                    {formatDate(blog.created_at)}
                  </p>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs available.</p>
        )}

        <div className="space40" />
        <div className="col-12 text-center">
          <Link href="/blogs" className="theme-btn-5">
            Read all blog posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsCards;
