import React from "react";
import AllBlogsApi from "@/util/Apis/BlogsApi";
import SingleRecent from "./SingleRecent";

export async function generateStaticParams() {
  let blogList = await AllBlogsApi();
  return blogList;
}
export default async function RecentBlogs() {
  let allBlogsData = await AllBlogsApi();
  let allBlogs = allBlogsData;
  return (
    <div>
      <SingleRecent allBlogs={allBlogs} />
    </div>
  );
}
