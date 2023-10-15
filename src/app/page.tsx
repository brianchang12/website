import React from "react";
import TitleCard from "./components/TitleCard";
import IntroductionCard from "./components/IntroductionCard";
import WorkCard from "./components/WorkCard";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="content" id="content">
      <TitleCard />
      <IntroductionCard />
      <WorkCard />
      <ProjectCard />
    </div>
  );
}
