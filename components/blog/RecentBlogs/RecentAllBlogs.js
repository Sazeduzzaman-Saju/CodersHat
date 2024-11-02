import AllBlogsApi from "@/util/Apis/BlogsApi";
import React from "react";
import RecentAllBlogsSingle from "./RecentAllBlogsSingle";

export async function generateStaticParams() {
  let blogList = await AllBlogsApi();
  return blogList;
}
export default async function RecentAllBlogs() {
  let allBlogsData = await AllBlogsApi();
  let allBlogs = allBlogsData;
  return (
    <div>
      <RecentAllBlogsSingle allBlogs={allBlogs} />
    </div>
  );
}
