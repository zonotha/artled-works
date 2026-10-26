# Artled Works

Artled Works is a Next.js portfolio and exhibition site for artist Zonotha Zwane. It presents the artist's work through focused pages for exhibitions, process, the artist, and contact information.

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in a browser.

## Checks

```bash
npm run lint
npm run build
```

## Routes

- `/` - Home
- `/about` - Artist information
- `/process` - Artistic process
- `/contact` - Contact details
- `/awakening` - The Awakening
- `/exhibitions` - Exhibition index
- `/exhibitions/moya` - MOYA exhibition
- `/exhibitions/selected-works` - Selected Works exhibition
- `/exhibitions/moya/veil-of-strength`
- `/exhibitions/moya/veil-of-strength-monochrome`
- `/exhibitions/moya/thula-moya`
- `/exhibitions/moya/where-the-flame-lives`
- `/exhibitions/moya/umthandazi`
- `/exhibitions/moya/indawo-yomoya`

## Project structure

- `app/` contains routes and route-specific styles.
- `components/` contains shared page components.
- `data/artworks.ts` is the shared artwork data source.
- `public/artworks/` contains artwork images.
- `public/images/` contains supporting photography and sketches.
- `public/videos/` contains process videos.

Generated directories such as `.next/` and `node_modules/` are local build and dependency output and are not source files.
