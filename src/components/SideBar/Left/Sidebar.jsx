import React, { act, useState } from "react";
import SidebarToggleButton from "../SidebarToggleButton";

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside
      style={{
        ...styles.sidebar,
        width: isSidebarOpen ? "17%" : "5%",
      }}
    >
      <SidebarToggleButton
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        styles={stylesToggleButton}
        icon={"<"}
        activeIcon={">"}
      />
      {["Home", "About", "Contact", "Services", "Help"].map((btn) => (
        <button
          key={btn}
          onClick={() => setActiveButton(btn)}
          style={{
            ...styles.button,
            backgroundColor: activeButton === btn ? "#0077ff" : "#fff",
            color: activeButton === btn ? "#fff" : "#000",
          }}
        >
          {btn}
        </button>
      ))}
    </aside>
  );
};

const styles = {
  sidebar: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    padding: "20px 0",
    transition: "width 0.3s ease-in-out",
  },
  button: {
    padding: "10px 20px",
    textAlign: "left",
    border: "none",
    marginBottom: "10px",
    cursor: "pointer",
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
    left: "20px",
    zIndex: 1000,
  },
};

export default Sidebar;
