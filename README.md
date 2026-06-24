# SustainAura website

The live site is the **static site in `public_html/`** (hand-built HTML/CSS/JS).
On every push to `main`, the GitHub Action (`.github/workflows/deploy.yml`)
FTP-uploads `public_html/` to GoDaddy `/public_html/` using the repo's FTP secrets.

Pages: `/` (home), `/shop`, `/contact`, `/about`. Chatbot, 3D spin ring,
contact form (posts to the Render backend), SEO meta + sitemap included.

The previous Next.js application remains in this repo's git history.
