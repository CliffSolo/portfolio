# Portfolio

Personal portfolio of **Matthew Birtwistle**: resume and projects. A living site that gets updated as new work ships.

| | |
|---|---|
| **Version** | 1.0.0 |
| **Status** | Active |
| **Stack** | HTML, CSS, vanilla JavaScript (no build step) |
| **Theme** | Catppuccin Mocha · Bebas Neue / Outfit / Share Tech Mono |

## Open it

- Offline: download or clone the repo and double-click `index.html`.

## Layout

```
index.html        page: hero, resume, projects, contact
css/style.css     all styles
js/projects.js    project cards (edit this to add/change projects)
js/main.js        renders cards, scroll reveal, contact dialog
```

## Add a project

Open `js/projects.js`, copy one block, edit it, and add a line to `CHANGELOG.md`.

```js
{
  title: "My New App",
  status: "live",            // or "wip"
  tags: ["KOTLIN", "ANDROID"],
  desc: "One or two sentences about what it does.",
  links: [{ label: "GITHUB", url: "https://github.com/CliffSolo/my-new-app" }]
}
```
