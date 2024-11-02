import FallbackImages from "@/util/FallBackImage/FallBackImage";
import Link from "next/link";
import React from "react";

const AllBlogs = ({ blogData }) => {
  return (
    <div className="row">
      {blogData && blogData.length > 0 ? (
        blogData.map((blog, index) => (
          <div className="col-lg-6" key={index}>
            <div>
            <Link href={`/blog-detail/${blog.slug}` || "/"}>
              <div className="single-blog blog-md">
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
                <h3>
                  <Link href="/blog-details">{blog.title}</Link>
                </h3>
                <p>{blog.header}</p>
              </div>
            </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No blogs category available.</p>
      )}
    </div>
  );
};

export default AllBlogs;
