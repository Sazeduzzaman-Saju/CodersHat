

import Teams from "@/components/team/teams"
import TeamApi from "@/util/Apis/TeamApi/TeamApi";

export async function generateStaticParams() {
    let TeamData = await TeamApi();
    return TeamData;
}

export default async function Page() {
    let allTeamData = await TeamApi();
    let teamAllData = allTeamData;
console.log(teamAllData,"this data");
    return (
        <>
            <Teams TeamAllData={TeamAllData}></Teams>
        </>
    )
}