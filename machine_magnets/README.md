# Machine Magnet — Club Website (sample build)

Static, dependency-free site (HTML, CSS, vanilla JS). Open `index.html` or serve the folder.

```
machine_magnets/
├── index.html              page markup (all pages, hash-routed: #home #about #hall-of-fame #events #projects #journal)
└── assets/
    ├── css/
    │   ├── main.css        layout, components, base theme
    │   └── effects.css     dynamic background, logo, hover effects, premium cards, project popup, wheel timeline
    └── js/
        ├── main.js         content data, router, reveals, hero tilt, staircases (faculty + core team)
        ├── effects.js      magnet logo, section-aware background, particles, magnetic buttons
        ├── timeline.js     semi-circular scroll timeline (Events)
        └── projects.js     project gallery + popup + looping info cards
```

Content to replace (all placeholders): top of `main.js` (nav, socials, events, team, champions, gallery),
`timeline.js` (TL), `projects.js` (PROJECTS). Real facts used: tagline, 150+/4/18 stats, founded Sept 2024.
Social links for LinkedIn/YouTube/GitHub are generic placeholders.
