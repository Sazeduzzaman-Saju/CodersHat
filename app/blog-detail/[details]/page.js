import SingleBlogs from "@/components/blog/SingleBlogs";
import React from "react";

export default async function Page({ params }) {
  const singleBlogData = params.details;
  const blogFetchUrl = `https://backoffice.codershatbd.com/api/blog-details/${singleBlogData}`;

  try {
    const response = await fetch(blogFetchUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch blog details");
    }

    const categoryData = await response.json();
    const blogLists = categoryData.blog;

    if (blogLists.length === 0) {
      return <p>No data found for this blog.</p>; // Show a message instead of a 404 page
    }

    return (
      <div>
        <SingleBlogs blogLists={blogLists} />
      </div>
    );
  } catch (error) {
    return (
      <p>
        There was an error loading the blog details. Please try again later.
      </p>
    ); // Handle the error gracefully
  }
}
