import BlogCategory from "@/components/blog/BlogCategory/BlogCategory";
import Blogs from "@/components/blog/Blogs";
import AllBlogsApi from "@/util/Apis/BlogsApi";
import BlogCategoryApi from "@/util/Apis/BlogsApi/BlogCategoryApi";

export async function generateStaticParams() {
  let BlogCategory = await BlogCategoryApi();
  let BlogData = await AllBlogsApi();
  return BlogCategory, BlogData;
}

export default async function Page() {
  let allCategoryBlogsData = await BlogCategoryApi();
  let blogCategoryData = allCategoryBlogsData;

  let allBlogsData = await AllBlogsApi();
  let blogData = allBlogsData;
  return (
    <>
      <Blogs blogCategoryData={blogCategoryData} blogData={blogData} />
    </>
  );
}
