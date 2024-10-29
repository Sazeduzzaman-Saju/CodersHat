export default async function AllBlogsApi() {
  const route = `https://backoffice.codershatbd.com/api/all-blogs`;

  try {
    let data = await fetch(route);
    // Check if the fetch was successful (HTTP status code 200)
    if (!data.ok) {
      throw new Error(`Failed to fetch data: ${data.statusText}`);
    }
    let spotlightData = await data.json();
    return spotlightData?.blog_posts; // Adjusted to match the actual JSON structure
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
