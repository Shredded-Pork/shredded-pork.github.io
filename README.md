# Personal Homepage

This is a static academic homepage inspired by [Jie Yang's website](https://yangjie-cv.github.io/), organized for direct deployment to GitHub Pages.

## Files

- `index.html`: page structure
- `styles.css`: styling and layout
- `profile.js`: all editable personal content
- `.nojekyll`: tells GitHub Pages to serve the site as plain static files

## Customize Your Content

Open `profile.js` and replace the placeholder fields:

- `name`
- `title`
- `affiliation`
- `location`
- `email`
- `summary`
- `heroLinks`
- `biography`
- `news`
- `interests`
- `publications`
- `experience`
- `education`
- `honors`

If you want a real profile photo:

1. Put the image file in this folder.
2. Set `photo` in `profile.js` to something like `./photo.jpg`.

## Preview Locally

You can open `index.html` directly in a browser.

Or use a local server:

```bash
cd /Users/hexiaoxuan.3/Desktop/博士毕业论文/test/personal-homepage
python3 -m http.server 8000
```

Then visit:

`http://localhost:8000`

## Deploy To GitHub Pages

If you want a homepage like `yourname.github.io`, do this:

1. Create a GitHub account if you do not already have one.
2. Choose your GitHub username carefully, because the final site will usually be `https://YOUR-USERNAME.github.io`.
3. Create a new repository named exactly:

   `YOUR-USERNAME.github.io`

4. Upload all files in this folder to that repository root:

   - `index.html`
   - `styles.css`
   - `profile.js`
   - `.nojekyll`
   - your photo files, if any

5. Go to GitHub repository settings.
6. Open `Pages`.
7. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
8. Save and wait a minute or two.

Your site will then be available at:

`https://YOUR-USERNAME.github.io`

## If You Already Have A Different Repo Name

If your repo is not named `YOUR-USERNAME.github.io`, the site address will usually look like:

`https://YOUR-USERNAME.github.io/REPO-NAME`

For a personal homepage, the username-style repository name is the cleanest option.

## Recommended Next Step

Before uploading, edit `profile.js` once so the site already shows your real name, affiliation, links, and publications.
