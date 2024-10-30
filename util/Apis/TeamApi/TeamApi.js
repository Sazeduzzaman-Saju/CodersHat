export default async function TeamApi() {
    // const route = `https://backoffice.codershatbd.com/api/blog-categories`;
    const route = `http://127.0.0.1:8000/api/all-team-members`;
  
    try {
      let data = await fetch(route);
      // Check if the fetch was successful (HTTP status code 200)
      if (!data.ok) {
        throw new Error(`Failed to fetch data: ${data.statusText}`);
      }
      let teams = await data.json();
      console.log(teams);
      return teams?.categorys; // Adjusted to match the actual JSON structure
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  