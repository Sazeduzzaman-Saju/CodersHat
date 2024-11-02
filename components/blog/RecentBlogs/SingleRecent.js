import FallbackImages from "@/util/FallBackImage/FallBackImage";
import Link from "next/link";
import React from "react";

const SingleRecent = ({ allBlogs }) => {
  const blogsData = allBlogs.slice(1, 6);
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
    <>
      {blogsData && blogsData.length > 0 ? (
        blogsData.map((blog, index) => (
          <div className="recent-post" key={index}>
            <div className="recent-post-content">
              <Link href={`/blog-detail/${blog.slug}` || "/"}>
                {blog.title}
                <div className="blog-date-time">
                  <ul className="blog-date">
                    <li>{formatDate(blog.created_at)}</li>
                  </ul>
                </div>
              </Link>
            </div>
            <div className="recent-img">
              <FallbackImages
                className="img-fluid"
                src={`https://backoffice.codershatbd.com/storage/${blog.image}`}
                alt={blog.title}
                title="Advertisement expired"
              />
            </div>
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </>
  );
};

export default SingleRecent;
