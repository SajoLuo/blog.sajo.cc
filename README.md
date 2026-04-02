# blog.sajo.cc

Personal blog of Sajo, migrated from Jekyll (HuxBlog theme) to Astro. Chinese-language blog about tech, life, and miscellaneous thoughts.

Live at [blog.sajo.cc](https://blog.sajo.cc)

## Tech Stack

- [Astro 6](https://astro.build/) -- Static site generator
- [Tailwind CSS v4](https://tailwindcss.com/) -- Utility-first CSS
- [Giscus](https://giscus.app/) -- Comments powered by GitHub Discussions
- [Cloudflare Pages](https://pages.cloudflare.com/) -- Hosting and deployment
- [Cloudflare R2](https://www.cloudflare.com/r2/) -- Image storage (via `img.sajo.cc`)

## Local Development

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:4321`.

### Build

```bash
npm run build
npm run preview   # preview the build locally
```

## Deployment

This site is deployed automatically via Cloudflare Pages on push to `main`.

To set up your own:

1. Fork this repo
2. Connect to Cloudflare Pages
3. Set build command to `npm run build` and output directory to `dist/`
4. Set Node.js version to 22+ in environment variables

## Project Structure

```
src/
  components/     # Astro components (Nav, Header, Footer, Sidebar, etc.)
  content/posts/  # Markdown blog posts with frontmatter
  layouts/        # Page layouts (Base, Page, Post)
  pages/          # Route pages (index, about, tags, RSS, 404)
  styles/         # Global CSS (Tailwind + prose styles)
  config.ts       # Site configuration
  content.config.ts  # Content collection schema
```

## Writing Posts

Create a new `.md` file in `src/content/posts/` with this frontmatter:

```yaml
---
title: "Post Title"
subtitle: "Optional subtitle"
date: 2025-01-01
author: Sajo
headerImg: "https://img.sajo.cc/example.jpg"  # optional
headerMask: 0.4  # optional, overlay opacity
catalog: true    # optional, show table of contents
tags:
  - tag1
  - tag2
---
```

## Credits

- Original design inspired by [HuxBlog](https://github.com/Huxpro/huxpro.github.io) by Huxpro
- Built with [Astro](https://astro.build/)

## License

MIT
