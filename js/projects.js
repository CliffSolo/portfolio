// Project cards, in display order. To add a project, copy one block and edit it.
//   status: "live" | "wip"        (shown above the title)
//   links:  [{ label, url }]      (leave url empty to show a greyed-out button)
//   placeholder: true             (dashed "coming soon" card)
window.PROJECTS = [
  {
    title: "Tactical GPS",
    status: "wip",
    tags: ["FLUTTER", "DART", "ANDROID"],
    desc: "Dark, military-style Android navigation app: live compass with North-up and heading-up modes, MGRS grid, elevation, street address, waypoints and pins, a map screen, and a destination arrow with bearing and distance.",
    links: [
      { label: "GITHUB", url: "https://github.com/CliffSolo/tacticalGPS" },
      { label: "DOWNLOAD APK", url: "https://github.com/CliffSolo/tacticalGPS/releases/latest" }
    ]
  },
  {
    title: "Blueprint",
    status: "wip",
    tags: ["KOTLIN", "JETPACK COMPOSE", "ANDROID"],
    desc: "Native Android learning app that teaches how things work with live animated labs and read-aloud lessons. Courses ship from the same repo and sync to the phone.",
    links: [{ label: "GITHUB", url: "https://github.com/CliffSolo/blueprint" }]
  },
  {
    title: "Firefox Landing Page",
    status: "live",
    tags: ["HTML/CSS", "JAVASCRIPT", "PYTHON", "SYSTEMD"],
    desc: "Offline start page for Firefox: link buttons, clock, weather with a 5-day forecast, a calendar that adds to Google Calendar, task lists synced from Obsidian, and five color themes.",
    links: [{ label: "GITHUB", url: "https://github.com/CliffSolo/firefox-landing-page" }]
  },
  {
    title: "Developer Portfolio",
    status: "live",
    tags: ["HTML/CSS", "JAVASCRIPT", "CATPPUCCIN"],
    desc: "This site. A Catppuccin Mocha portfolio with a data-driven project grid, scroll reveals and a responsive layout. Kept up to date as new work ships.",
    links: [{ label: "GITHUB", url: "https://github.com/CliffSolo/portfolio" }]
  },
  {
    title: "Defense Job Scraper",
    status: "wip",
    tags: ["PYTHON", "SELENIUM", "EXCEL"],
    desc: "Automated scraper for aerospace and defense career pages near Hanscom AFB. Handles Cloudflare and lazy-loading, color-codes keywords, and writes timestamped Excel reports across ~20 companies.",
    links: [{ label: "REPO SOON", url: "" }]
  },
  {
    title: "3D Acoustic Localization",
    status: "wip",
    tags: ["PYTHON", "C++", "DART"],
    desc: "Concept system and algorithm suite for locating sound sources in 3D using sonar-style mapping, designed for UAS integration with real-time triangulation.",
    links: [{ label: "REPO SOON", url: "" }]
  },
  {
    title: "Next Project",
    placeholder: true,
    tags: ["COMING SOON"],
    desc: "Something new is in the works. Stay tuned."
  }
];
