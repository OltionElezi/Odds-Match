import React, { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/SideBar/Left/Sidebar";
import RightSidebar from "./components/SideBar/Right/RightSidebar";
import SidebarToggleButton from "./components/SideBar/SidebarToggleButton";
import Home from "./components/Main/Home";
import About from "./components/Main/About";
import Contact from "./components/Main/Contact";
import Services from "./components/Main/Services";
import Help from "./components/Main/Help";
import BastetEMia from "./components/NavBar/Profile/BastetEMia";
import ProfiliIm from "./components/NavBar/Profile/ProfiliIm";
import Login from "./components/Auth/Login";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleNavigate = (page) => {
    if (page === "Login") {
      setIsLoggedIn(false);
    } else {
      setCurrentPage(page);
    }
  };

  const renderMainContent = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Services":
        return <Services />;
      case "Help":
        return <Help />;
      case "ProfiliIm":
        return <ProfiliIm />;
      case "BastetEMia":
        return <BastetEMia />;
      default:
        return <Home />;
    }
  };

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <div style={styles.appContainer}>
      <Navbar onNavigate={handleNavigate} />

      <div style={styles.contentContainer}>
        <Sidebar />
        <main style={styles.mainContent}>{renderMainContent()}</main>
        <RightSidebar />
      </div>
    </div>
  );
};

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  contentContainer: {
    display: "flex",
    height: "90%",
  },
  mainContent: {
    flex: 1,
    backgroundColor: "#000",
    padding: "20px",
  },
};

export default App;
