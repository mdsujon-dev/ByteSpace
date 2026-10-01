# ByteSpace

ByteSpace is an online learning platform where creators publish courses and learners discover them. This repository holds the marketing site and course catalog front end, built with the Next.js App Router.

## Features

- **Home page:** a hero with course search, sponsors, course discovery by category, learning paths, feature highlights, a creator call to action and testimonials.
- **Course catalog:** search with a scope picker, filters, a course card grid and pagination.
- **Course details:** a statically generated page for each course, with a video preview, About / Lessons / Reviews tabs, a sneak-peek gallery and an enrollment sidebar.
- **Creators:** a featured creator page and statically generated profile pages that list each creator's courses.
- **Authentication screens:** login and signup pages with their own minimal layout.
- **Responsive design:** the desktop layout is tuned at 1024px and up. Phones and tablets get simplified versions of the decorated sections.

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack), [React 19](https://react.dev) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| UI components | [Ant Design 6](https://ant.design) (tabs, dropdowns) |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) |
| Font | Poppins, loaded with `next/font` |
| Package manager | pnpm |

## Getting started

### Prerequisites

- Node.js 20.9 or later
- pnpm 10 (`corepack enable` sets it up from the `packageManager` field)

### Install and run

```bash
git clone https://github.com/mdsujon-dev/ByteSpace.git
cd ByteSpace
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Starts the development server with hot reload |
| `pnpm build` | Creates an optimized production build |
| `pnpm start` | Serves the production build (run `pnpm build` first) |
| `pnpm lint` | Runs ESLint |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/courses` | Course catalog |
| `/courses/[id]` | Course details (static, for example `/courses/course-1`) |
| `/creators` | Featured creator profile |
| `/creators/[id]` | Creator profile (static, for example `/creators/purepearl-studio`) |
| `/login` | Sign in |
| `/signup` | Create an account |

## Project structure

```
src/
├── app/
│   ├── (site)/          # Pages with the shared header and footer
│   ├── (auth)/          # Login and signup, with their own layout
│   ├── layout.tsx       # Root layout: font, Ant Design registry, global styles
│   ├── globals.css      # Tailwind setup, brand color tokens, shared CSS
│   └── not-found.tsx
├── components/
│   ├── home/            # Home page sections
│   ├── courses/         # Course catalog and course detail components
│   ├── creators/        # Creator page components
│   ├── auth/            # Login and signup forms and layout
│   ├── layout/          # Header and footer
│   ├── sections/        # Shared page sections, such as the generic hero
│   ├── ui/              # Reusable building blocks (Container, AppImage, DecorShape, …)
│   └── icons/
├── data/                # Static JSON content, such as creators
└── lib/                 # Sample data, data helpers and shared style objects
public/                  # Images: course thumbnails, avatars, decorative shapes
```

## Design system

- **Colors** are defined as CSS variables in `src/app/globals.css` and exposed as Tailwind colors:

  | Token | Value | Tailwind class |
  | --- | --- | --- |
  | Brand blue | `#003BE2` | `bg-brand-blue`, `text-brand-blue` |
  | Brand lime | `#D4F42B` | `bg-brand-lime` |
  | Brand pink | `#FF24BD` | `bg-brand-pink` |
  | Brand gray | `#CED0D3` | `bg-brand-gray` |

- **Typography** uses Poppins as the default sans-serif font.
- **Layout:** `Container` caps content at 1199px with responsive side padding.
- **Decorative shapes:** `DecorShape` renders the floating 3D shapes, which can be recolored with a `tint`. `DecorStage` places them on a centered 1700px stage that scales down on narrower desktop screens, so the arrangement stays the same at any width or browser zoom level.
- **Shared cards:** reusable pieces such as `HappyStudentsCard` and `CourseCard` live in `components/ui` and `components/courses`, so every page uses the same version.

## Content

The site currently uses local sample data. There is no backend yet.

- Courses: `src/lib/sample-courses.ts`
- Creators: `src/data/creators.json`
- Course details: generated from the sample courses in `src/lib/get-course-detail.ts`

## Deployment

The project deploys to [Vercel](https://vercel.com). Pushing to `main` triggers a production deployment, and other branches get preview deployments.

If the deployed site shows a Vercel login page instead of the app, turn off **Settings → Deployment Protection → Vercel Authentication** for production in the Vercel project.

## Contributing

1. Create a branch from `main`.
2. Make your changes and check that `pnpm lint` and `pnpm build` pass.
3. Open a pull request into `main`.
