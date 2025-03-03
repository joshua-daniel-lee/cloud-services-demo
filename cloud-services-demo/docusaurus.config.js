module.exports = {
  title: "Your Site Title",
  tagline: "Your Site Tagline",
  url: "https://your-site-url.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "your-org", // Usually your GitHub org/user name.
  projectName: "your-repo", // Usually your repo name.
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/your-org/your-repo/edit/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/your-org/your-repo/edit/main/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    // Remove the blog plugin
  ],
};
