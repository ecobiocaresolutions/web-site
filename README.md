# ECOBIOCARE SOLUTIONS Website

Modern, responsive website for ECOBIOCARE SOLUTIONS PVT LTD built with React, TypeScript, and Vite.

## Tech Stack

- React 19 with TypeScript
- Vite for build tooling
- React Router for SPA navigation
- Tailwind CSS for styling
- Framer Motion for animations
- Web3Forms for contact form submissions

## Development

1. Clone the repository:
   ```bash
   git clone https://github.com/ecobiocaresolutions/web-site.git
   cd web-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```bash
   cp .env.example .env
   ```
   Update environment variables as needed.

4. Start development server:
   ```bash
   npm run dev
   ```

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Deployment

This site is configured for deployment on Netlify with SPA routing support.

### Netlify Setup

1. Push your repo to GitHub
2. Login to Netlify
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18.x (or latest LTS)

### Environment Variables

Set these in Netlify dashboard (Settings > Build & Deploy > Environment):
- `VITE_WEB3FORMS_KEY` - Your Web3Forms access key

## Contact Form

The contact form uses Web3Forms. To set it up:

1. Sign up at [Web3Forms](https://web3forms.com/)
2. Get your access key
3. Add it to your environment variables
