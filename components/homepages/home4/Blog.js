import AllBlogsApi from "@/util/Apis/BlogsApi";
import BlogsCards from "./BlogsCards/BlogsCards";

export async function generateStaticParams() {
  let blogList = await AllBlogsApi();
  return blogList;
}
export default async function Blog() {
  let allBlogsData = await AllBlogsApi();
  let allBlogs = allBlogsData;
  return (
    <>
      <div className="blog-area section-padding blog-box-h">
        <BlogsCards allBlogs={allBlogs} />
      </div>
    </>
  );
}
