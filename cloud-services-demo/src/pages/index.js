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
    backgroundColor: "#003f7f",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    textAlign: "center",
    marginTop: "auto",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
  },
  card: {
    border: "1px solid #007bff",
    borderRadius: "8px",
    padding: "20px",
    width: "320px",
    height: "280px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f5f5f5",
    color: "black",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flexGrow: 1,
  },
};

function HomepageHeader() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Fisheries Cloud Program</h1>
      <p style={styles.subtitle}>Cloud Service Catalog</p>
    </div>
  );
}

export default function Home() {
  return (
    <React.Fragment>
      <HomepageHeader />
      <main>
        <div style={styles.cardContainer}>
          {[
            {
              title: "Prescriptive Cloud Service Usage",
              description:
                "A structured approach to cloud adoption, ensuring standardized usage, security, and compliance.",
              link: "/docs/Prescriptive Cloud Service Usage/overview",
            },
            {
              title: "Cloud Compute, Data, and AI Services",
              description:
                "Scalable computing resources, data storage, and AI/ML capabilities for high-performance workloads.",
              link: "/docs/Cloud Compute, Data, and AI Services/overview",
            },
            {
              title: "Enterprise Web & App Development",
              description:
                "Building, deploying, and maintaining scalable web applications with low-code/no-code platforms and CMS.",
              link: "/docs/Enterprise Web & Application Development/overview",
            },
            {
              title: "Business Intelligence Services",
              description:
                "Data visualization, analytics, and reporting tools to transform raw data into actionable insights.",
              link: "/docs/Business Intelligence Services/overview",
            },
            {
              title: "Geospatial Analytics & Mapping",
              description:
                "Tools and platforms for spatial data visualization, geographic analysis, and location-based intelligence.",
              link: "/docs/Geospatial Analytics & Mapping/overview",
            },
          ].map((card, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.cardContent}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
              <a href={card.link} style={styles.button}>
                Learn more
              </a>
            </div>
          ))}
        </div>
      </main>
    </React.Fragment>
  );
}
