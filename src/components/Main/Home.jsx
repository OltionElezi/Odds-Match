import React, { useEffect, useState } from "react";
import Card from "./Card/Card";

const Home = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          `https://api.the-odds-api.com/v4/sports/soccer/odds?apiKey=19ef48fadb701fc079fe74bb5127836a&regions=uk,eu&market=h2h&bookmakers=livescorebet`
        );
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div style={styles.mainContainer}>
      <div style={styles.header}>
        <div>Futboll</div>
        <div style={styles.title}>1 x 2</div>
      </div>
      <div style={styles.headerEvents}>
        <div>Time</div>
        <div style={styles.title}>Sports Events</div>
      </div>

      <div style={styles.cardContainer}>
        {matches.map((match) => (
          <Card
            key={match.id}
            homeTeam={match.home_team}
            awayTeam={match.away_team}
            commenceTime={match.commence_time}
            odds={match.bookmakers[0]?.markets[0]?.outcomes || []}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    overflowY: "scroll",
    paddingBottom: "10px",
    maxHeight: "100%",
    height: "100%",
    scrollbarWidth: "thin", // Makes the scrollbar thinner in some browsers
    WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
  },

  customScrollbar: {
    // Custom scrollbar track
    "::-webkit-scrollbar": {
      width: "8px", // Adjust width of scrollbar
      backgroundColor: "red", // Set background of scrollbar
    },
    // Custom thumb style
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "black", // Set color of the thumb
    },
    // Custom scrollbar track (optional)
    "::-webkit-scrollbar-track": {
      backgroundColor: "red", // Set background color for the track
    },
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  header: {
    display: "flex",
    position: "sticky", // Makes it sticky
    top: 0, // Sticks to the top of the container
    zIndex: 1000, // Ensures it stays on top of other content
    padding: "5px 5px",
    borderBottom: "1px solid #ccc",
    justifyContent: "space-between",
    border: "1px solid #000",
    color: "#fff",
    backgroundColor: "#61677A",
  },

  headerEvents: {
    display: "flex",
    position: "sticky", // Makes it sticky
    top: 0, // Sticks to the top of the container
    zIndex: 1000, // Ensures it stays on top of other content
    padding: "5px 5px",
    borderBottom: "1px solid #ccc",
    justifyContent: "space-between",
    border: "1px solid #000",
    color: "#fff",
    backgroundColor: "#61677A",
  },

  title: {
    fontSize: "18px",
    fontWeight: 500,
  },
  // Custom Scrollbar styles
};

export default Home;
