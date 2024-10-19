import React from "react";

const SidebarToggleButton = ({
  isOpen,
  toggleSidebar,
  styles,
  icon,
  activeIcon,
}) => {
  return (
    <button onClick={toggleSidebar} style={styles.button}>
      {isOpen ? icon : activeIcon}
    </button>
  );
};

export default SidebarToggleButton;
