import React from "react";

export const useViewport = () => {
  const [width, setWidth] = React.useState(1000);
  // Add a second state variable "height" and default it to the current window height
  const [height, setHeight] = React.useState(1000);

  React.useEffect(() => {
    if (typeof window !== undefined) {
      const handleWindowResize = () => {
        setWidth(window.innerWidth);
        // Set the height in state as well as the width
        setHeight(window.innerHeight);
      };
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

  // Return both the height and width
  return { width, height };
};
