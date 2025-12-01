## White Card Practice Test (Static Site)

This is a static website with HTML, CSS, and JavaScript. It is ready to be deployed on **Vercel** via **GitHub** with no extra build steps.

### Project Structure

- `index.html` – main page
- `legal.html` – legal page
- `style.css` – styling
- `script.js`, `questions.js` – JavaScript logic
- Images/icons: `logo.png`, `apple-touch-icon.png`, `favicon.ico`, `og-image.jpg`, `twitter-image.jpg`
- SEO files: `robots.txt`, `sitemap.xml`

### Running Locally

You can open `index.html` directly in your browser, or serve the folder with any simple static server (e.g. VS Code Live Server).

### Deploying to Vercel via GitHub

1. **Initialize Git (once per project)**
   - Open a terminal in this folder.
   - Run:
     ```bash
     git init
     git add .
     git commit -m "Initial commit: white card practice test site"
     ```

2. **Create a GitHub repository**
   - Go to GitHub and create a new **empty** repo (no README, no `.gitignore`, no license).
   - Follow the instructions GitHub shows, for example:
     ```bash
     git remote add origin https://github.com/<your-username>/<your-repo>.git
     git branch -M main
     git push -u origin main
     ```

3. **Connect GitHub repo to Vercel**
   - Go to `https://vercel.com` and log in.
   - Click **“Add New Project”** → **“Import Git Repository”**.
   - Select your GitHub repository.
   - Vercel will automatically detect this as a **Static Site** (no framework, no build command).
   - For most cases you can leave all settings as default:
     - **Framework Preset**: `Other`
     - **Build Command**: _(leave empty)_
     - **Output Directory**: `./` (root – contains `index.html`)
   - Click **Deploy**.

4. **Update the site**
   - Make changes locally.
   - Commit and push:
     ```bash
     git add .
     git commit -m "Update site content"
     git push
     ```
   - Each push to the default branch will trigger a new deployment on Vercel.



