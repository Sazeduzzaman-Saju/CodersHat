import Link from "next/link";
import React from "react";

const BlogCategory = ({ blogCategoryData }) => {
  return (
    <div>
      <ul className="category-list">
        {/* <li>
          <Link className="active" href="#">
            Lifestyle
            <span>
              <i className="fa-solid fa-angle-right" />
            </span>
          </Link>
        </li> */}
        {blogCategoryData && blogCategoryData.length > 0 ? (
          blogCategoryData.map((blog, index) => (
            <li key={index}>
              <Link href="/" className="">
                {blog.name}
                <span>
                  <i className="fa-solid fa-angle-right" />
                </span>
              </Link>
            </li>
          ))
        ) : (
          <p>No blogs category available.</p>
        )}
      </ul>
    </div>
  );
};

export default BlogCategory;
