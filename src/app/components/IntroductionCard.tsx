"use client";
import React from "react";
import Image from "next/image";
import hero from "../assets/profile.jpg";
import { Divider } from "antd";
import { motion } from "framer-motion";
import "./introduction-card.css";
import CustomButton from "./CustomButton";
import { DownloadOutlined } from "@ant-design/icons";
import { useViewport } from "../utils/Utils";

export default function IntroductionCard() {
  const view = useViewport();
  const divider =
    view.width <= 950 ? (
      <Divider
        type="horizontal"
        style={{ borderWidth: "3px", width: "100px", color: "black" }}
      />
    ) : (
      <Divider
        type="vertical"
        style={{ borderWidth: "3px", height: "500px", color: "black" }}
      />
    );
  return (
    <motion.div
      viewport={{ once: true }}
      whileInView={{ x: 0 }}
      initial={{ x: "-50vw" }}
      transition={{ duration: 1.2, type: "spring", delay: 0.3 }}
    >
        <a id="about-me" style={{width: "auto", height: "auto"}}>
      <div className="intro-container">
      
        <Image className="hero" src={hero} alt="brian's profile picture" />
        {divider}
        <div className="about-me-container">
       
          <h4 className="intro-title">
            I am Brian Chang, aspiring Software Developer and student at the
            University of British Columbia.
          </h4>
          <p className="intro-text">
            Hello, I&#39;m Brian, an aspiring and passionate software developer
            with a love about learning for all things tech. My journey in the world of
            software development began at the University of British Columbia
            where I was accepted into the Computer Science program. Since then,
            I&#39;ve been on an exhilarating adventure, constantly expanding my
            knowledge and honing my skills in the ever-changing landscape of
            software development.
            <br />
            <br />
            I have knowledge of <span style={{fontWeight: 600}}>Python, HTML, CSS, TypeScript, Java, and SQL</span>.
            Throughout my early career, I have had the privilege to work at the
            University British Columbia&#39;s IT Department, an eletric vehicle
            start up Rivian, and even Tesla Motors.
            <br />
            <br />
            I&#39;m always open to new opportunities, collaborations, and
            conversations. Whether you want to discuss a potential project,
            share knowledge, or simply connect with a fellow tech enthusiast,
            don&#39;t hesitate to reach out.
            <br />
            <br />
            <span style={{fontWeight: 600}}><span style={{"color": "#c8d8e4"}}>Languages:</span> Python, HTML, CSS, TypeScript, Java, SQL</span>
            <br />
            <br />
            <span style={{fontWeight: 600}}><span style={{"color": "#c8d8e4"}}>Tools:</span> Git, Pytest, Docker, Splunk, React, Postman, MaterialUI, Ant Design, Appium, React</span>
          </p>
          <div className="intro-btn-format">
            <CustomButton
              height="auto"
              width="300px"
              text="Download My Resume"
              fontSize="15px"
              backgroundColor="#040D12"
              padding="10px 0px"
              borderRadius="20px"
              borderStyle="none"
              icon={<DownloadOutlined style={{ color: "#c8d8e4" }} />}
              color="#c8d8e4"
            />
          </div>
        </div>
      </div>
      </a>
    </motion.div>
  );
}
