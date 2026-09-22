# Zamora Lab website

Static site for the Zamora Lab (UC Davis), hosted on GitHub Pages at
<https://aezamora14.github.io/zamora-lab/>.

No build step, no dependencies. Plain HTML, CSS, and JavaScript.

```
index.html            page structure (rarely needs editing)
assets/site-data.js   ALL site content — people, research, publications, gallery, news…
assets/styles.css     design (colors, type, layout)
assets/main.js        renders the content from site-data.js
assets/favicon.svg    browser-tab icon
images/               portraits and figures
images/gallery/       lab photos shown in the Gallery section
.nojekyll             tells GitHub Pages to serve files exactly as-is
```

## Deploying (replacing the current site)

1. In your local clone of the `zamora-lab` repository, delete the old
   `index.html`, `assets/` and `images/` folders.
2. Copy everything from this folder into the repository root (including the
   hidden `.nojekyll` file).
3. Commit and push:
   ```
   git add -A
   git commit -m "Redesigned lab website"
   git push
   ```
4. GitHub Pages redeploys automatically within a minute or two. Hard-refresh
   the browser (Shift + Reload) if you still see the old design.

If you prefer the GitHub web interface: open the repo → **Add file → Upload
files**, drag the contents of this folder in, and commit. Upload `index.html`,
`README.md` and `.nojekyll` first, then the `assets` and `images` folders.

## Editing content

Everything visible on the site lives in **`assets/site-data.js`**. Open it in
any text editor (or directly on GitHub with the pencil icon), change the
text, commit. Sections:

| Section | Key in `site-data.js` | Notes |
|---|---|---|
| Hero text, mission, address, email, links | `lab` | The **Complete bibliography** button uses `lab.links.bibliography`. |
| At-a-glance numbers | `stats` | |
| Research programs | `research` | Order in the file = order on the page. `image: null` shows a placeholder tile. |
| Approach steps & competencies | `approach` | |
| Technology platforms | `technology` | Platforms without an `image` get an icon. |
| Current members | `people` | Add a portrait to `images/` and point `image` at it. |
| Alumni | `alumni` | One card per person: `name`, `role` (position + years), optional `focus` (one line on their project), optional `now` (current position), optional `image`, and `links`. Cards without an image show initials. |
| PI biography & timeline | `about` | |
| Publications | `publications`, `bookChapters` | See below. |
| Gallery | `gallery` | See below. |
| News | `news` | Newest first. Leave the array empty `[]` to hide the section. |
| Join / positions | `join` | |

### Adding a publication

Add an object to the **top** of the `publications` array:

```js
{ year: 2026, type: "article",          // article | review | preprint
  title: "Paper title without trailing period",
  authors: "Last FM, Last FM, Zamora AE",
  journal: "Journal Name",
  pmid: "12345678",                      // PubMed ID → makes the title a link
  doi: "10.xxxx/xxxxx",                  // optional
  pmc: "PMC1234567" },                   // optional → "Free full text" link
```

Names listed in `highlightAuthors` (Zamora AE, Schmeling JL, and the alumni
who appear on lab papers) are shown in bold in every author list — add new
lab members there.

### Adding lab photos

1. Resize photos to roughly 1400 px on the long edge (keeps the site fast)
   and save them as `.jpg` or `.webp` in `images/gallery/`.
2. Add an entry to `gallery` (the first entries appear at the top):
   ```js
   { image: "images/gallery/retreat-2026.jpg", caption: "Lab retreat, spring 2026", span: "wide" },
   ```
   `span` is optional: `"wide"` spans two columns, `"tall"` spans two rows.

### Adding a team member

```js
{ name: "First Last, PhD",
  role: "Postdoctoral Fellow",
  affiliation: "Department of Internal Medicine · UC Davis",
  bio: "One or two sentences.",
  image: "images/first-last.jpg",
  links: [ { label: "Email", href: "mailto:…" }, { label: "LinkedIn", href: "https://…" } ] }
```

Portraits look best at a 4:5 ratio (e.g. 1000 × 1250 px), face near the top.

## Design notes

Colors and fonts are defined as variables at the top of `assets/styles.css`
(`--navy`, `--gold`, etc.). Headings use *Fraunces* and body text uses
*Inter*, both loaded from Google Fonts; if the fonts can't load the site falls
back to system serif/sans faces.
