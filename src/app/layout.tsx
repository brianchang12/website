"use client";
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-page-custom-font */
import React, { useState } from "react";
import AntdRegistry from "./AntdRegistry";
import { useViewport } from "./utils/Utils";
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
  const removeLinkedinSize = 930;
  const burgerSize = 630;
  const [open, setOpen] = useState(false);
  const view = useViewport();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <html lang="en">
      <body style={{ margin: "0px" }}>
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
                  About Me
                </li>
                <li className="menu-option" onClick={onClose}>
                  Work Experience
                </li>
                <li className="menu-option" onClick={onClose}>
                  Projects
                </li>
              </ul>
              <div className="menu-subsection">
                <a
                  href="https://github.com/personalbrian"
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
                  href="https://www.linkedin.com/in/lichengchang/"
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
              {view.width >= burgerSize ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    gap: "20px",
                  }}
                >
                  <HeaderOption
                    text="About Me"
                    fontSize="14px"
                    width="auto"
                    height="auto"
                  />
                  <HeaderOption
                    text="Work Experience"
                    fontSize="14px"
                    width="auto"
                    height="auto"
                  />
                  <HeaderOption
                    text="Projects"
                    fontSize="14px"
                    width="auto"
                    height="auto"
                  />
                  {view.width >= removeLinkedinSize ? (
                    <a
                      href="https://www.linkedin.com/in/lichengchang/"
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
                  ) : undefined}
                </div>
              ) : (
                <MenuOutlined className="hamburger" onClick={showDrawer} />
              )}
            </div>
            {children}
          </>
        </AntdRegistry>
      </body>
    </html>
  );
}
