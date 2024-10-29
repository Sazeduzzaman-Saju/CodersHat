import FallbackImages from "@/util/FallBackImage/FallBackImage";
import Link from "next/link";
import React from "react";

const RecentAllBlogsSingle = ({ allBlogs }) => {
  console.log(allBlogs, "blogs All recent");
  return (
    <div className="row">
      {allBlogs && allBlogs.length > 0 ? (
        allBlogs.map((blog, index) => (
          <div className="col-md-6 col-lg-4">
            <div className="single-blog blog-md">
              <div className="blog-img">
                <Link href={`/blog-detail/${blog.slug}`}>
                  <FallbackImages
                    className="img-fluid"
                    src={`https://backoffice.codershatbd.com/storage/${blog.image}`}
                    alt={blog.title}
                    title="Advertisement expired"
                  />
                </Link>
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
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
};

export default RecentAllBlogsSingle;
