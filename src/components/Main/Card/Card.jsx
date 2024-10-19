import React, { useState } from "react";

const Card = ({ homeTeam, awayTeam, odds, commenceTime }) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButtonIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleNewButtonClick = () => {
    alert("New Button Clicked!");
  };

  // Format commenceTime to show only hours and minutes in 24-hour format
  const formattedTime = new Date(commenceTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // Ensures 24-hour format
  });

  return (
    <div style={styles.card}>
      {/* First Div - Start Time */}
      <div style={styles.info}>
        <span style={styles.time}>{formattedTime}</span>
        <span style={styles.time}>{formattedTime}</span>
      </div>

      {/* Second Div - Teams Description */}
      <div style={styles.teams}>
        <span>{homeTeam}</span>
        <span>{awayTeam}</span>
      </div>

      {/* Third Div - Price Buttons */}

      {odds.map((outcome, index) => (
        <div
          key={index}
          style={{
            ...styles.priceButton,
            backgroundColor:
              selectedButtonIndex === index ? "#0F4C75" : "transparent",
            color: selectedButtonIndex === index ? "#fff" : "#d29500",
          }}
          onClick={() => handleButtonClick(index)}
        >
          {outcome.price}
        </div>
      ))}
      {/* New Button with ">" Symbol */}
      <div style={styles.newButton} onClick={handleNewButtonClick}>
        &gt;
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "97%",
    height: "50px",
    margin: "5px 0",
    backgroundColor: "#f9f9f9",
    display: "flex",
    alignItems: "center",
  },

  info: {
    width: "10%",
    height: "100%",
    fontSize: "15px",
    border: "1px solid #000",
    paddingLeft: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    height: "25px",
  },
  teams: {
    border: "1px solid #000",
    width: "20%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },

  priceButton: {
    width: "70px",
    height: "100%",
    backgroundColor: "transparent",
    border: "1px solid #000",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  newButton: {
    width: "70px",
    height: "100%",
    border: "1px solid #000",
    color: "#000",
    cursor: "pointer",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Card;
