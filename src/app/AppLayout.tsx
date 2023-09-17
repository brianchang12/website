"use client";
import { Layout, Button, Menu, Drawer, Typography } from "antd";
import Icon, {
  CloseCircleOutlined,
  LineChartOutlined,
  LinkedinOutlined,
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
      {/* <Layout>
                <Header className='header'>
                    <div>
                        <p>
                        </p>
                    </div>
                </Header>
                <Content className='content'>
                    <HeaderOption text='About Me' fontSize='20px' width='70px' height='20px'/>
                    <Button onClick={showDrawer}>test</Button>
                </Content>
                <Footer>Footer</Footer>
            </Layout> */}
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
        <a>
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
        </a>
        </div>
      </div>
      <Button onClick={showDrawer}>test</Button>
      <Button
        icon={<LinkedinOutlined style={{ color: "white" }} />}
        style={{ backgroundColor: "--off-blue" }}
      >
        Test2
      </Button>
    </>
  );
};

export default AppLayout;
