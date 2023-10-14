import React from "react";
import TitleCard from "./components/TitleCard";
import IntroductionCard from "./components/IntroductionCard";
import WorkTile from "./components/WorkTile";
import { RivanInfo, UBCInfo, TeslaInfo } from "./utils/WorkInfo";
import WorkCard from "./components/WorkCard";
import ProjectTile from "./components/ProjectTile";

export default function Home() {
  return (
    <div className="content" id="content">
      <TitleCard />
      <IntroductionCard />
      <WorkCard />
      <ProjectTile
        name="Blog Website"
        description="Blog website made in participation with UBC and PricewaterhouseCoopers. Developed a blog website with 8 other developers to upload and delete blogs and CI/CD pipeline to reach 80% code coverage."
        tools="Technologies Used: TypeScript, Jest, Google Cloud Platform, HTML, Material UI"
        link="https://github.com/CPSC319-2022/9ds-frontend"
      />
    </div>
  );
}
