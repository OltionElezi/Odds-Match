import React, { useState } from "react";
import SidebarToggleButton from "../SidebarToggleButton";

const RightSidebar = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <div
      style={{ ...styles.sidebar, width: isRightSidebarOpen ? "25%" : "5%" }}
    >
      <SidebarToggleButton
        isOpen={isRightSidebarOpen}
        toggleSidebar={toggleRightSidebar}
        styles={stylesToggleButton}
        activeIcon={"<"}
        icon={">"}
      />
      <p>Right Sidebar</p>
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
        <li>Option 4</li>
        <li>Option 5</li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    height: "100%",
    backgroundColor: "#dfe4ea",
    padding: "10px",
    boxSizing: "border-box",
    transition: "width 0.3s ease-in-out",
  },
};

const stylesToggleButton = {
  button: {
    padding: "10px",
    cursor: "pointer",
    backgroundColor: "#0077ff",
    color: "white",
    border: "none",
    position: "fixed",
    bottom: "20px",
    right: "20px", // Adjust to place the button outside the sidebar
    zIndex: 1000,
  },
};

export default RightSidebar;
