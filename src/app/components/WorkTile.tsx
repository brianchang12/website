"use client";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import "./work-tile.css";
import { CloseOutlined } from "@ant-design/icons";

export interface WorkTileProps {
  logo: StaticImageData;
  location: String;
  company: String;
  title: String;
  tools: string[];
  accomplishments: string[];
  dates: string[];
}

const WorkTile: FC<WorkTileProps> = ({
  logo,
  location,
  title,
  tools,
  company,
  accomplishments,
  dates,
}) => {
  const [openModal, setOpenModal] = React.useState(false);

  const appendSlash = (items: string[]) => {
    let ret: string = "";
    for (const item of items) {
      ret = ret.concat(`${item}/`);
    }
    return ret.slice(0, -1);
  };
  const unexpanded = (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      whileTap={{
        scale: 0.8,
        transition: { duration: 0.3 },
      }}
      viewport={{ once: true }}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.7, type: "spring", delay: 0.1 }}
      className="unexpanded-tile"
      onClick={() => {
        const content = document.getElementById("body")?.style;
        if (content !== undefined) {
          content.overflowY = "hidden";
        }
        setOpenModal(true);
      }}
    >
      <Image className="unexpanded-image" alt="logo" src={logo} />
    </motion.div>
  );

  const expanded = (
    <div className="modal-background">
      <motion.div
        className="expanded-modal"
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            ease: "easeOut",
            duration: 0.3,
          },
        }}
        exit={{
          opacity: 0,
          scale: 0.75,
          transition: {
            ease: "easeIn",
            duration: 0.3,
          },
        }}
      >
        <div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <CloseOutlined
              style={{
                paddingTop: "15px",
                paddingRight: "15px",
                fontSize: "20px",
              }}
              onClick={() => {
                let content = document.getElementById("body")?.style;
                if (content !== undefined) {
                  content.overflowY = "scroll";
                }
                setOpenModal(false);
              }}
            />
          </div>
          <div className="scrolling-content">
            <div className="expanded-tile-header">
              <Image className="expanded-image" alt="logo" src={logo} />
              <h1 className="expanded-tile-title">{company}</h1>
              <h2 className="role-title">{title}</h2>
              <h2 className="location-title">{location}</h2>
              {dates.map((date, index) => (
                <p key={`${index}-${date}`} className="work-date">
                  {date}
                </p>
              ))}
              <p className="tools-title">{appendSlash(tools)}</p>
              <ul className="expanded-tile-content">
                {accomplishments.map((accomplishment, index) => (
                  <li
                    key={`${index}-${accomplishment}`}
                    className="bullet-accomplishment"
                  >
                    {accomplishment}
                  </li>
                ))}
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <>
      {unexpanded}
      <AnimatePresence>{openModal && expanded}</AnimatePresence>
    </>
  );
};

export default WorkTile;
