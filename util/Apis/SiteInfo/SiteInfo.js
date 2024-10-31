export default async function SiteInfoApi() {
  const route = `https://backoffice.codershatbd.com/api/settings-info`;

  try {
    let data = await fetch(route);
    // Check if the fetch was successful (HTTP status code 200)
    if (!data.ok) {
      throw new Error(`Failed to fetch data: ${data.statusText}`);
    }
    let siteInfoData = await data.json();
    return siteInfoData?.settings; // Adjusted to match the actual JSON structure
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
