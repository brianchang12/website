import React from "react";
import TitleCard from "./components/TitleCard";
import IntroductionCard from "./components/IntroductionCard";
import WorkTile from "./components/WorkTile";
import { RivanInfo, UBCInfo, TeslaInfo } from "./utils/WorkInfo";
import WorkCard from "./components/WorkCard";

export default function Home() {
  return (
    <div className="content" id="content">
      <TitleCard />
      <IntroductionCard />
      <WorkCard />
    </div>
  );
}
