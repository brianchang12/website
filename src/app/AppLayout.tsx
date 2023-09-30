"use client";
import { Button, Drawer } from "antd";
import Icon, {
  CloseCircleOutlined,
  LinkedinOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import React, { FC, useState } from "react";
import "./globals.css";
import "./layout.css";
import { useViewport } from "./utils/Utils";
import HeaderOption from "./components/HeaderOption";
import Image from "next/image";
import logo from "./assets/logo.png";
import CustomButton from "./components/CustomButton";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
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
    <>
      <Drawer
        closeIcon={<CloseCircleOutlined className="close-icon" />}
        onClose={onClose}
        open={open}
        placement="left"
        style={{ backgroundColor: "#2b6777" }}
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
      </Drawer>
      <div className="header">
        <Image
          src={logo}
          alt="logo"
          style={{ width: "110px", height: "110px" }}
        />
        { view.width >= burgerSize ?
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
            { view.width >= removeLinkedinSize ?
                 <a href="https://www.linkedin.com/in/lichengchang/" style={{textDecoration: 'none'}}>
                 <CustomButton
                   icon={<LinkedinOutlined style={{ color: "white", fontSize: "25px" }} />}
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
               </a> : undefined
            }
          </div>
          : <MenuOutlined className="hamburger" onClick={showDrawer}/>
        }
      </div>
    </>
  );
};

export default AppLayout;
