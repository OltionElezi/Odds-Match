import React, { useState } from "react";

const Navbar = ({ onNavigate }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleNavigate = (componentName) => {
    onNavigate(componentName);
    setIsProfileOpen(false); // Close the dropdown after selection
  };

  return (
    <nav style={styles.navbar}>
      {/* Navbar Buttons */}
      {["Home", "About", "Contact", "Services", "Help"].map((btn) => (
        <button
          key={btn}
          onClick={() => onNavigate(btn)}
          style={styles.navButton}
        >
          {btn}
        </button>
      ))}

      {/* Profile Section */}
      <div style={styles.profileContainer}>
        <div onClick={handleProfileClick} style={styles.profileCircle}>
          {/* User Icon */}
        </div>

        {/* Profile Dropdown */}
        {isProfileOpen && (
          <div style={styles.profileDropdown}>
            <button
              onClick={() => handleNavigate("ProfiliIm")}
              style={styles.dropdownButton}
            >
              Profili Im
            </button>
            <button
              onClick={() => handleNavigate("BastetEMia")}
              style={styles.dropdownButton}
            >
              Bastet e Mia
            </button>
            <button
              onClick={() => handleNavigate("Login")}
              style={styles.dropdownButton}
            >
              Dil
            </button>
            <p style={styles.balanceText}>0.00 Lek</p>
          </div>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
    color: "#fff",
    backgroundColor: "#000",
    padding: "0 20px",
  },
  navButton: {
    padding: "10px",
    cursor: "pointer",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    marginRight: "10px",
  },
  profileContainer: {
    position: "relative",
  },
  profileCircle: {
    width: "40px",
    height: "40px",
    backgroundColor: "#fff",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profileDropdown: {
    position: "absolute",
    top: "50px",
    right: "0",
    backgroundColor: "#fff",
    padding: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
  },
  dropdownButton: {
    backgroundColor: "#0077ff",
    color: "#fff",
    border: "none",
    padding: "10px",
    marginBottom: "10px",
    cursor: "pointer",
  },
  balanceText: {
    textAlign: "center",
    color: "#333",
    marginTop: "10px",
  },
};

export default Navbar;
