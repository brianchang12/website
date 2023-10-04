'use client'
import React from 'react'
import Image from "next/image";
import hero from '../assets/profile.jpg'
import { Divider } from 'antd';
import { motion } from "framer-motion";
import './introduction-card.css'

export default function IntroductionCard() {
  return (
    <motion.div viewport={{once: true}} whileInView={{x: 0}} initial={{x: -300}} transition={{duration: 1.2, type: "spring", delay: 0.3}} >
    <div className='intro-container'>
        <Image className="hero" src={hero} alt="brian's profile picture" />
        <Divider type='vertical' className='divider' />
        <div className='about-me-container'>
            <h4 className='intro-title'>
                I am Brian Chang, aspiring Software Developer and student at the University of British Columbia.
            </h4>
            <p className='intro-text'>
            Hello, I&#39;m Brian, an aspiring and passionate software developer with a deep love for all things tech.
            My journey in the world of software development began at the University of British Columbia where I was accepted into the Computer Science program.
            Since then, I&#39;ve been on an exhilarating adventure, constantly expanding my knowledge and honing my skills in the ever-evolving landscape of software development.
            <br />
            <br />
            I have knowledge of Python, HTML, CSS, TypeScript, Java, and SQL.
            Throughout my early career, I have the privilege to work at the University British Columbia&#39;s IT Department, an eletric vehicle start up Rivian, and even Tesla Motors.
            I thrive on solving complex problems through elegant, efficient, and scalable solutions.
            <br />
            <br />
            I&#39;m always open to new opportunities, collaborations, and conversations.
            Whether you want to discuss a potential project, share knowledge, or simply connect with a fellow tech enthusiast, don&#39;t hesitate to reach out.
            </p>
        </div>
    </div>
    </motion.div>
  )
}
