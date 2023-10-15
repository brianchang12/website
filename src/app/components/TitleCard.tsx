"use client";
import React from "react";
import "./title-card.css";
import { motion } from "framer-motion";

export default function TitleCard() {
  return (
    <motion.div
      className="title-container"
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
    >
      <h1 className="title">
        <span className="offset-word">Hello,</span> Welcome to my Website!
      </h1>
      <h4 className="sub">
        Brian&#39;s Personal Website and E-portfolio. <br /> A showcase of my
        past works and projects, and anything that I want to post. Thank you for
        visiting!
      </h4>
    </motion.div>
  );
}
