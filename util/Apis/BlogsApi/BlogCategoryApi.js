export default async function BlogCategoryApi() {
  const route = `https://backoffice.codershatbd.com/api/blog-categories`;

  try {
    let data = await fetch(route);
    // Check if the fetch was successful (HTTP status code 200)
    if (!data.ok) {
      throw new Error(`Failed to fetch data: ${data.statusText}`);
    }
    let blogCategorys = await data.json();
    return blogCategorys?.categorys; // Adjusted to match the actual JSON structure
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
