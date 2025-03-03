import React from "react";

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  title: {
    fontSize: "2.5em",
    margin: "20px 0",
  },
  subtitle: {
    fontSize: "1.2em",
    margin: "20px 0",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1em",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
  },
};

function HomepageHeader() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Our Documentation</h1>
      <p style={styles.subtitle}>
        Explore our comprehensive documentation to harness the power of our
        services.
      </p>
      <a href="/docs/intro" style={styles.button}>
        Get Started
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <React.Fragment>
      <HomepageHeader />
      <main>{/* Additional content can be added here */}</main>
    </React.Fragment>
  );
}
