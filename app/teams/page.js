import AllTeams from "@/components/team/AllTeams";
import TeamsApi from "@/util/Apis/TeamsApi/TeamsApi";

export async function generateStaticParams() {
  let TeamsAllData = await TeamsApi();
  return TeamsAllData;
}

export default async function Page() {
  let AllTeamsData = await TeamsApi();
  let teamData = AllTeamsData;
  return (
    <>
      <AllTeams teamData={teamData} />
    </>
  );
}
