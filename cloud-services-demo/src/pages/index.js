import React from "react";

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "20px",
  margin: "10px",
  width: "300px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

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
      <main>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div style={cardStyle}>
            <h2>Prescriptive Cloud Service Usage</h2>
            <p>
              A structured approach to cloud adoption, ensuring standardized
              usage, security, and compliance through best practices, governance
              policies, and automation. This category provides predefined cloud
              service configurations, cost management strategies, and
              architectural guidance to optimize cloud operations.
            </p>
            <a
              href="/docs/Prescriptive Cloud Service Usage/overview"
              style={styles.button}
            >
              Learn more
            </a>
          </div>
          <div style={cardStyle}>
            <h2>Cloud Compute, Data, and AI Services</h2>
            <p>
              Encompasses scalable computing resources, data storage, and
              advanced AI/ML capabilities to support high-performance workloads.
            </p>
            <a
              href="/docs/Cloud Compute, Data, and AI Services/overview"
              style={styles.button}
            >
              Learn more
            </a>
          </div>
          <div style={cardStyle}>
            <h2>Enterprise Web & Application Development</h2>
            <p>
              Focuses on building, deploying, and maintaining scalable web
              applications and enterprise software solutions. It includes
              low-code/no-code platforms, content management systems (CMS), and
              cloud-based application development frameworks to streamline
              business processes and enhance digital experiences.
            </p>
            <a
              href="/docs/Enterprise Web & Application Development/overview"
              style={styles.button}
            >
              Learn more
            </a>
          </div>
          <div style={cardStyle}>
            <h2>Business Intelligence Services</h2>
            <p>
              Provides data visualization, analytics, and reporting tools to
              transform raw data into actionable insights. This category
              includes platforms for interactive dashboards, predictive
              modeling, and self-service analytics to support data-driven
              decision-making.
            </p>
            <a
              href="/docs/Business Intelligence Services/overview"
              style={styles.button}
            >
              Learn more
            </a>
          </div>
          <div style={cardStyle}>
            <h2>Geospatial Analytics & Mapping</h2>
            <p>
              Offers tools and platforms for spatial data visualization,
              geographic analysis, and location-based intelligence.
            </p>
            <a
              href="/docs/Geospatial Analytics & Mapping/overview"
              style={styles.button}
            >
              Learn more
            </a>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
