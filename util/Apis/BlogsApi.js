export default async function BlogAllApi() {
  const route = `https://backoffice.ajkal.us/news-category`;

  try {
    let data = await fetch(route);
    // Check if the fetch was successful (HTTP status code 200)
    if (!data.ok) {
      throw new Error(`Failed to fetch data: ${data.statusText}`);
    }
    let categoryNewsData = await data.json();
    return categoryNewsData?.data; // Safely extract the data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
