<p align="center">
  <a href="https://serapore.com/" rel="noopener">
    <img width="200" height="200" src="https://serapore.com/logo_main_en.webp" alt="SeraPore" style="background-color: black;">
  </a>
</p>

<h3 align="center">SeraPore V2</h3> 
<h6 align="center">https://www.serapore.com</h6>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/Ayberkyvs/serapore-v2.svg)](https://github.com/Ayberkyvs/serapore-v2/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Ayberkyvs/serapore-v2.svg)](https://github.com/Ayberkyvs/serapore-v2/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center">
  SeraPore's official corporate website. A fast, SEO-friendly, and easily manageable platform.
  <br>
</p>

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 About](#-about)
- [🏁 Installation](#-installation)
  - [Requirements](#requirements)
  - [Installation Steps](#installation-steps)
- [🚀 Deployment](#-deployment)
- [🎈 Usage](#-usage)
- [⛏️ Technologies](#️-technologies)
- [📜 Packages Used](#-packages-used)
  - [Dependencies](#dependencies)
  - [Dev Dependencies](#dev-dependencies)
- [🤝 Contribution](#-contribution)
- [✍️ Authors](#️-authors)

## 🧐 About

For over 30 years, SeraPore has empowered leading manufacturers with high-performance molds and machinery known for their durability. With deep expertise in pressure casting, we deliver unmatched precision, reliability, and long-term value across every production line. This web project was built to represent SeraPore's digital presence in a modern, fast, and user-friendly way.

## 🏁 Installation

### Requirements

- **Node.js** (v20+)
- **PNPM** (v10+ recommended)
- **Sanity CMS** account

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Ayberkyvs/serapore-v2.git
   cd serapore-v2
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create and configure the environment variables in `.env`.

4. Run in development mode:
   ```bash
   pnpm dev
   ```

## 🚀 Deployment

To deploy for production:

```bash
pnpm build
pnpm start
```

Or deploy the project via platforms like Vercel or Netlify.

## 🎈 Usage

- Manage content via **Sanity CMS**.
- **Products, machines, and services** can be added dynamically.
- Strong **SEO optimization** ensures high search engine visibility.
- Use `typegen` commands for auto-generated types and content validation.

## ⛏️ Technologies

- **Next.js 15** – React-based web framework
- **Sanity CMS** – Headless content management
- **Tailwind CSS** – Utility-first styling
- **Framer Motion** – Modern animations
- **Radix UI** – Accessible UI components
- **Vercel** – Hosting platform

## 📜 Packages Used

### Dependencies

- `next`, `react`, `react-dom` – Core framework
- `sanity`, `next-sanity` – Headless CMS integration
- `@radix-ui/react-*` – UI components
- `framer-motion`, `styled-components` – Animation and CSS-in-JS
- `lucide-react`, `uuid`, `clsx`, `tailwind-merge`, `zod` – Utility libraries
- `next-intl`, `@formatjs/intl-localematcher`, `negotiator` – Internationalization and locale matching
- `nodemailer` – Email handling

### Dev Dependencies

- `eslint`, `prettier`, `typescript` – Code quality and static analysis
- `@tailwindcss/postcss` – Tailwind-compatible PostCSS config
- `@types/*` – TypeScript type definitions

## 🤝 Contribution

1. Fork the project.
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push the branch (`git push origin feature-branch`)
5. Submit a Pull Request.

## ✍️ Authors

- **[@Ayberkyvs](https://github.com/Ayberkyvs)** – Fullstack Developer