# RightDirect — Marketing Consulting & Digital Execution

A modern, responsive marketing consulting website recreated using **Astro** and **Sanity CMS** as part of a technical assessment.

The website is designed to closely reproduce the provided RightDirect reference page while keeping editable website content completely manageable through Sanity CMS and rendering it dynamically through Astro.

---

## 🚀 Live Project

- **Live Website:** Coming soon
- **Sanity Studio:** Coming soon
- **GitHub Repository:** Coming soon

---

## 📌 Project Overview

RightDirect is a marketing consulting and digital execution website focused on helping growing companies strengthen their digital presence, launch initiatives faster, improve customer experiences, and modernize their digital and workplace capabilities.

This project recreates the provided RightDirect website page with a focus on:

- Modern responsive UI
- CMS-driven content
- Reusable Astro components
- Sanity headless CMS
- Responsive layouts
- Accessibility
- SEO fundamentals
- Performance
- Clean project architecture
- Interactive UI elements

---

## 🛠️ Tech Stack

### Frontend

- **Astro**
- **JavaScript / TypeScript**
- **HTML5**
- **CSS3**
- **React**
- **Lucide React**
- **React Icons**

### CMS

- **Sanity CMS**
- **GROQ**
- Sanity Image URL Builder

### Development & Deployment

- **Node.js**
- **npm**
- **Git**
- **GitHub**
- **Vercel** — Frontend deployment
- **Sanity Hosting** — Studio deployment

---

## 🏗️ Architecture

The project is organized into two independent applications:

```text
rdgcc-astro-sanity/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   └── pages/
│   ├── astro.config.mjs
│   ├── package.json
│   └── .env
│
├── studio/
│   ├── schemaTypes/
│   ├── sanity.config.ts
│   ├── sanity.cli.ts
│   └── package.json
│
├── .gitignore
└── README.md