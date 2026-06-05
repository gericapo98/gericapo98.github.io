# CV / Portfolio — self-hosted

A single-page, multi-field CV/portfolio site. Pure static files (no build step),
served by **nginx in Docker** so you can self-host it on any machine you control —
your laptop, a home server, or a VPS.

The content was auto-generated from your `~/repos` and split into:

- **My projects** — repositories you authored.
- **Ecosystems I work with** — upstream codebases you studied/used (clearly labelled, never claimed as yours).

> Personal details (name, location, email, links) are **placeholders** — edit them
> in [`docs/assets/data.js`](docs/assets/data.js). Every word on the page comes from
> that one file.

---

## Run it (Docker — recommended)

```sh
cd cv-portfolio
docker compose up -d --build
```

Open **http://localhost:8080**.

Stop / update:

```sh
docker compose down                 # stop
docker compose up -d --build        # rebuild after editing data.js
```

Change the port by editing the left side of `"8080:80"` in `docker-compose.yml`.

## Deploy to your own server (VPS)

```sh
# copy the folder to the server, then on the server:
cd cv-portfolio
docker compose up -d --build
```

Point a reverse proxy / your domain at port 8080 (or change the published port to
`80:80`). With Caddy you get HTTPS in two lines; with nginx/Traefik, proxy_pass to
`localhost:8080`.

## Run without Docker (quick preview)

Any static file server works — no toolchain needed:

```sh
cd cv-portfolio/docs
python3 -m http.server 8080        # http://localhost:8080
```

---

## Edit your content

Open [`docs/assets/data.js`](docs/assets/data.js). It's a single `window.CV = { … }`
object:

| Key             | What it controls                                              |
| --------------- | ------------------------------------------------------------- |
| `identity`      | Name, role, tagline, location, email, header/footer links     |
| `fields[]`      | Each field/section: name, blurb, skills, and `projects[]`     |
| `ecosystems`    | Upstream tools you've studied/used (kept separate from yours) |
| `skills[]`      | The categorized skills grid                                   |

Each project: `{ name, blurb, tags[], href, kind: "own", featured: true|false }`.
Set `href: null` for local-only projects (renders as “Local project”, no link).

After editing, rebuild: `docker compose up -d --build` (or just refresh the browser
if you're using `python3 -m http.server`).

## Save as PDF

Click the **printer icon** in the top bar (or `Cmd/Ctrl+P`). A print stylesheet
strips the nav/theme controls and lays the content out cleanly on A4, with links
expanded — so you get a tidy downloadable CV from the same source.

## Light / dark

Toggle with the moon/sun button; the choice is remembered (localStorage) and the
first visit follows your OS preference.

---

## Project layout

```
cv-portfolio/
├── docs/
│   ├── index.html            # static shell
│   └── assets/
│       ├── data.js           # <-- YOUR CONTENT (edit this)
│       ├── style.css         # theme + responsive + print styles
│       ├── app.js            # renders the page from data.js
│       └── favicon.svg
├── nginx/default.conf        # gzip, caching, security headers
├── Dockerfile                # nginx:alpine + your site
├── docker-compose.yml        # one-command self-host on :8080
└── .dockerignore / .gitignore
```

No external CDNs or fonts — the site works fully offline.
