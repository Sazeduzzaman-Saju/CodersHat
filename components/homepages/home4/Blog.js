import BlogAllApi from "@/util/Apis/BlogsApi";
import BlogsCards from "./BlogsCards/BlogsCards";

export async function generateStaticParams() {
  let blogList = await BlogAllApi();
  return blogList;
}
export default async function Blog() {
  let allBlogsData = await BlogAllApi();
  let allBlogs = allBlogsData;
  return (
    <>
      <div className="blog-area section-padding">
        <BlogsCards allBlogs={allBlogs} />
      </div>
    </>
  );
}
