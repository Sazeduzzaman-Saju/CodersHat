export default async function SiteInfoApi() {
  const route = `https://backoffice.codershatbd.com/api/settings-info`;

  try {
    const response = await fetch(route);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const siteInfoData = await response.json();

    return siteInfoData?.settings || null; // Return settings or null if not found
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null in case of error to handle gracefully
  }
}
