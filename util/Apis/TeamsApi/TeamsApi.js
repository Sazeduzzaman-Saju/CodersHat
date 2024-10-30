export default async function TeamsApi() {
  const route = `https://backoffice.codershatbd.com/api/all-team-members`;

  try {
    const data = await fetch(route);

    if (!data.ok) {
      throw new Error(`Failed to fetch data: ${data.statusText}`);
    }

    const teamData = await data.json();

    // Return only the array of categories if it's an array
    if (Array.isArray(teamData.teams)) {
      return teamData?.teams;
    } else {
      throw new Error(
        "Expected an array of categories but got something else."
      );
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array to avoid further errors
  }
}
