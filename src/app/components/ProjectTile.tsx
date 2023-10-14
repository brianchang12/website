"use client"
import React, { FC } from "react";
import { GithubOutlined } from "@ant-design/icons";
import "./project-tile.css";
import { motion } from "framer-motion";

interface ProjectTileProps {
  name: string;
  description: string;
  tools: string;
  link: string;
}

const ProjectTile: FC<ProjectTileProps> = ({
  name,
  description,
  tools,
  link,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      whileTap={{
        scale: 0.9,
        transition: { duration: 0.3 },
      }}
    >
      <a href={link} style={{ textDecoration: "none", color: "black" }}>
        <div className="project-tile">
          <GithubOutlined style={{ fontSize: "60px", color: "black" }} />
          <div className="project-tile-content">
            <h3 className="project-name">{name}</h3>
            <p className="project-description">{description}</p>
            <p className="project-tools">{tools}</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectTile;
