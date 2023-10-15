"use client";
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-page-custom-font */
import React, { useState } from "react";
import AntdRegistry from "./AntdRegistry";
import {
  CloseCircleOutlined,
  LinkedinOutlined,
  GithubOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Drawer } from "antd";
import HeaderOption from "./components/HeaderOption";
import CustomButton from "./components/CustomButton";
import Image from "next/image";
import logo from "./assets/logo.png";
import "./layout.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <html lang="en">
      <head>
        <meta
          content="width=device-width, initial-scale=1, minimum-scale=1"
          name="viewport"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Nunito+Sans:opsz@6..12&family=Playfair+Display:ital@0;1&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body id="body">
        <AntdRegistry>
          <>
            <Drawer
              closeIcon={<CloseCircleOutlined className="close-icon" />}
              onClose={onClose}
              open={open}
              placement="left"
              style={{ backgroundColor: "#040D12" }}
              bodyStyle={{ padding: "0px" }}
            >
              <ul className="menu">
                <li className="menu-option" onClick={onClose}>
                  <a
                    href="#about-me"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    About Me
                  </a>
                </li>
                <li className="menu-option" onClick={onClose}>
                  <a
                    href="#work-experience"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Work Experience
                  </a>
                </li>
                <li className="menu-option" onClick={onClose}>
                  <a
                    href="#projects"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Projects
                  </a>
                </li>
              </ul>
              <div className="menu-subsection">
                <a
                  href="https://github.com/brianchang12"
                  style={{ textDecoration: "none" }}
                >
                  <CustomButton
                    icon={
                      <GithubOutlined
                        style={{ color: "white", fontSize: "25px" }}
                      />
                    }
                    text="My Github"
                    height="auto"
                    width="300px"
                    fontSize="14px"
                    padding="8px 15px"
                    color="white"
                    borderStyle="none"
                    backgroundColor="#5C8374"
                    borderRadius="20px"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/bcoding12/"
                  style={{ textDecoration: "none" }}
                >
                  <CustomButton
                    icon={
                      <LinkedinOutlined
                        style={{ color: "white", fontSize: "25px" }}
                      />
                    }
                    text="Connect on LinkedIn"
                    height="auto"
                    width="300px"
                    fontSize="14px"
                    padding="8px 15px"
                    color="white"
                    borderStyle="none"
                    backgroundColor="#5C8374"
                    borderRadius="20px"
                  />
                </a>
              </div>
            </Drawer>
            <div className="header">
              <Image
                src={logo}
                alt="logo"
                style={{ width: "110px", height: "110px" }}
              />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    gap: "20px",
                  }}
                >
                  <a href="#about-me" className="main-header-option">
                    <HeaderOption
                      text="About Me"
                      fontSize="14px"
                      width="auto"
                      height="auto"
                    />
                  </a>
                  <a href="#work-experience" className="main-header-option" >
                    <HeaderOption
                      text="Work Experience"
                      fontSize="14px"
                      width="auto"
                      height="auto"
                    />
                  </a>
                  <a href="#projects" className="main-header-option">
                    <HeaderOption
                      text="Projects"
                      fontSize="14px"
                      width="auto"
                      height="auto"
                    />
                  </a>
                    <a
                     className="linkedin-wrapper"
                      href="https://www.linkedin.com/in/bcoding12/"
                      style={{ textDecoration: "none" }}
                    >
                      <CustomButton
                        icon={
                          <LinkedinOutlined
                            style={{ color: "white", fontSize: "25px" }}
                          />
                        }
                        text="Connect on LinkedIn"
                        height="auto"
                        width="auto"
                        fontSize="14px"
                        padding="8px 15px"
                        color="white"
                        borderStyle="none"
                        backgroundColor="#5C8374"
                        borderRadius="20px"
                      />
                    </a>
                </div>
                <MenuOutlined
                //   style={{fontSize: "30px", color: "white"}}
                  onClick={showDrawer}
                />
            </div>
            {children}
          </>
        </AntdRegistry>
      </body>
    </html>
  );
}
