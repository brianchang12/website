import React, { FC } from "react";
import "../globals.css";
import "./custom-button.css"

interface CustomButtonProps {
  icon?: React.ReactNode;
  text: string;
  fontSize: string;
  height: string;
  width: string;
  borderRadius?: string;
  color?: string;
  backgroundColor?: string;
  borderStyle?: string;
  borderWidth?: string;
  borderColor?: string;
  padding?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  icon,
  text,
  fontSize,
  height,
  width,
  borderRadius,
  color,
  backgroundColor,
  borderStyle,
  borderWidth,
  borderColor,
  padding
}) => {
  return (
    <button
      className="custom"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",
        fontSize: fontSize,
        height: height,
        width: width,
        borderRadius: borderRadius,
        color: color,
        backgroundColor: backgroundColor,
        borderStyle: borderStyle,
        borderWidth: borderWidth,
        borderColor: borderColor,
        padding: padding,
      }}
    >
      {icon && icon}
      {text}
    </button>
  );
};

export default CustomButton;
