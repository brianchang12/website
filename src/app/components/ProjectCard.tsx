import React from "react";
import "./project-card.css";
import ProjectTile from "./ProjectTile";

function ProjectCard() {
  return (
    <a id="projects" style={{ scrollMarginTop: "110px", width: "100%"}}>
    <div className="project-container">
      <h2 className="project-title">Techincal Projects</h2>
        <div className="project-content-container">
          <ProjectTile
            name="Blog Website"
            description="Blog website made in participation with UBC and PricewaterhouseCoopers. Developed a blog website with 8 other developers to upload and delete blogs and CI/CD pipeline to reach 80% code coverage."
            tools="Technologies Used: TypeScript, Jest, Google Cloud Platform, HTML, Material UI"
            link="https://github.com/CPSC319-2022/9ds-frontend"
          />
          <ProjectTile
            name="Personal Website"
            description="E-portfolio website detailing my work and current CS journey. Designed and styled all components in responsive website"
            tools="Technologies Used: TypeScript, HTML, CSS, Ant Design"
            link="https://github.com/brianchang12/website"
          />
        </div>
    </div>
    </a>
  );
}

export default ProjectCard;
