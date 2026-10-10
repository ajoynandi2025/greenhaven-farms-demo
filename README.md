# GreenHaven Farms — GitHub Pages demo

Responsive, nature-inspired website built with HTML, CSS, and JavaScript. Includes a journal landing section and three full-length demo articles. It is an original practice project inspired by the general subject and layout of the reference website; it does not include Hasiru Farms' proprietary source code or brand assets.

## Files
- `index.html` — main website
- `style.css` — layout, styling, responsive rules, and article styles
- `script.js` — mobile navigation and demo contact-form behavior
- `story-sustainable-garden.html` — sustainability and gardening article
- `story-time-in-nature.html` — wellbeing and nature article
- `story-choosing-a-farm.html` — farmland due-diligence article

## Preview locally
Open `index.html` in a browser. Internet access is required for Google Fonts and remote Unsplash photos.

## Recommended branch-based deployment workflow
GitHub Pages publishes the production website from `main`, while you make and review changes on a separate feature branch.

1. Create a GitHub repository (for example, `greenhaven-farms-demo`) and clone it: `git clone https://github.com/YOUR-USERNAME/greenhaven-farms-demo.git`
2. Copy all project files into the repository root.
3. Create a feature branch: `git switch -c feature/story-articles`
4. Stage and commit: `git add .` then `git commit -m "Expand journal with full articles"`
5. Push the branch: `git push -u origin feature/story-articles`
6. On GitHub, open a Pull Request from `feature/story-articles` into `main`, review the file changes, and merge it.
7. In the repository, go to **Settings → Pages**. Set **Build and deployment** to **Deploy from a branch**, choose `main` and `/(root)`, then save.
8. After the merge, open the **Actions** tab or **Settings → Pages** to check deployment status. Your website URL will be `https://YOUR-USERNAME.github.io/greenhaven-farms-demo/`.

## Quick commands for future updates
```bash
git switch main
git pull origin main
git switch -c feature/your-change
# edit files
git add .
git commit -m "Describe your change"
git push -u origin feature/your-change
```
Then open a Pull Request into `main`. Merge after review; Pages will redeploy from `main`.

## Notes
- The contact form is front-end demo behavior only; connect a form service or backend to receive submissions.
- Replace demo brand details and use only images/assets you own or have permission to use for a real business.
- Do not promise investment returns or treat the sample farm checklist as legal/financial advice.
