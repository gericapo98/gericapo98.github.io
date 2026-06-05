/* =============================================================================
 *  Renderer — reads window.CV (data.js) and builds the page. No dependencies.
 * ============================================================================= */
(function () {
  "use strict";
  var CV = window.CV;
  if (!CV) { console.error("data.js failed to load"); return; }

  /* ---------- tiny DOM helpers ---------- */
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else if (k === "html") n.innerHTML = attrs[k];
      else if (k.indexOf("on") === 0 && typeof attrs[k] === "function") n.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function $(sel) { return document.querySelector(sel); }
  function frag(nodes) { var f = document.createDocumentFragment(); nodes.forEach(function (x) { if (x) f.appendChild(x); }); return f; }

  /* ---------- inline icons ---------- */
  var ICON = {
    github: '<path fill="currentColor" d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/>',
    mail: '<path fill="currentColor" d="M2 4h20v16H2V4zm10 7L4 6v12h16V6l-8 5z"/>',
    link: '<path fill="currentColor" d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM13 7v1.9h4A3.1 3.1 0 0 1 17 15h-4V17h4a5 5 0 0 0 0-10h-4zm-5 4h8v2H8z"/>',
    ext: '<path fill="currentColor" d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3zM5 5h5v2H7v10h10v-3h2v5H5V5z"/>'
  };
  function icon(name) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24"); svg.setAttribute("aria-hidden", "true");
    svg.innerHTML = ICON[name] || ICON.link;
    return svg;
  }

  /* ---------- theme ---------- */
  function initTheme() {
    var stored = null;
    try { stored = localStorage.getItem("cv-theme"); } catch (e) {}
    if (!stored) stored = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", stored);
    var btn = $("#theme-btn");
    if (btn) btn.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("cv-theme", next); } catch (e) {}
    });
    var p = $("#print-btn");
    if (p) p.addEventListener("click", function () { window.print(); });
  }

  /* ---------- simple text bindings ---------- */
  function bindText() {
    var id = CV.identity;
    var map = { brandName: id.name, name: id.name, role: id.role, tagline: id.tagline,
                location: id.location, available: id.available };
    document.querySelectorAll("[data-bind]").forEach(function (n) {
      var key = n.getAttribute("data-bind");
      if (map[key] != null) n.textContent = map[key];
    });
    // brand: show first name only, compact
    var brand = $(".brand"); if (brand && id.name) brand.textContent = id.name.split(" ")[0] + " ·";
  }

  /* ---------- hero links ---------- */
  function renderLinks() {
    var wrap = $("#hero-links"); if (!wrap) return;
    (CV.identity.links || []).forEach(function (l) {
      wrap.appendChild(el("a", { href: l.href, rel: "noopener" }, [icon(l.icon), l.label]));
    });
    var foot = $("#footer-links");
    (CV.identity.links || []).forEach(function (l) { foot.appendChild(el("a", { href: l.href, rel: "noopener", text: l.label })); });
  }

  /* ---------- field chips + stats ---------- */
  function renderChipsAndStats() {
    var chips = $("#field-chips");
    (CV.fields || []).forEach(function (f) {
      chips.appendChild(el("button", { type: "button", text: f.name,
        onclick: function () { var t = document.getElementById("field-" + f.id); if (t) t.scrollIntoView(); } }));
    });
    var totalProjects = (CV.fields || []).reduce(function (a, f) { return a + (f.projects ? f.projects.length : 0); }, 0);
    var langs = (CV.skills || []).find(function (s) { return s.group === "Languages"; });
    var stats = [
      { v: String((CV.fields || []).length), l: "fields" },
      { v: totalProjects + "+", l: "projects" },
      { v: (langs ? langs.items.length : 0) + "", l: "languages" }
    ];
    var dl = $("#stats");
    stats.forEach(function (s) { dl.appendChild(el("div", null, [el("dt", { text: s.v }), el("dd", { text: s.l })])); });
  }

  /* ---------- nav ---------- */
  function renderNav() {
    var nav = $("#nav");
    (CV.fields || []).forEach(function (f) {
      nav.appendChild(el("a", { href: "#field-" + f.id, text: f.name, "data-field": f.id }));
    });
  }

  /* ---------- one project card ---------- */
  function card(p) {
    var top = el("div", { class: "card-top" }, [ el("h3", { text: p.name }) ]);
    if (p.kind === "own") top.appendChild(el("span", { class: "badge own", text: "my project" }));

    var tags = el("div", { class: "card-tags" }, (p.tags || []).map(function (t) { return el("span", { class: "tag", text: t }); }));

    var link;
    if (p.href) link = el("a", { class: "card-link", href: p.href, rel: "noopener", target: "_blank" }, ["View on GitHub", icon("ext")]);
    else link = el("span", { class: "card-link disabled" }, ["Local project"]);

    return el("article", { class: "card" + (p.featured ? " featured" : "") }, [
      top, el("p", { text: p.blurb }), tags, link
    ]);
  }

  /* ---------- field sections ---------- */
  function renderFields() {
    var host = $("#fields");
    (CV.fields || []).forEach(function (f) {
      var head = el("div", { class: "field-head" }, [ el("h2", { text: f.name }) ]);
      var skills = el("div", { class: "field-skills" }, (f.skills || []).map(function (s) { return el("span", { class: "tag", text: s }); }));
      var cards = el("div", { class: "cards" }, (f.projects || []).map(card));
      host.appendChild(el("section", { id: "field-" + f.id }, [
        head, el("p", { class: "field-blurb", text: f.blurb }), skills, cards
      ]));
    });
  }

  /* ---------- ecosystems ---------- */
  function renderEco() {
    var eco = CV.ecosystems; if (!eco) return;
    var note = $("#eco-note"); if (note) note.textContent = eco.note || "";
    var grid = $("#eco-grid");
    (eco.groups || []).forEach(function (g) {
      var ul = el("ul", null, (g.items || []).map(function (it) {
        return el("li", null, [ it.href ? el("a", { href: it.href, rel: "noopener", target: "_blank", text: it.name }) : el("span", { text: it.name }) ]);
      }));
      grid.appendChild(el("div", { class: "eco-card" }, [ el("h3", { text: g.group }), ul ]));
    });
  }

  /* ---------- skills ---------- */
  function renderSkills() {
    var grid = $("#skills-grid");
    (CV.skills || []).forEach(function (s) {
      var pills = el("div", { class: "pills" }, (s.items || []).map(function (i) { return el("span", { class: "pill", text: i }); }));
      grid.appendChild(el("div", { class: "skill-group" }, [ el("h3", { text: s.group }), pills ]));
    });
  }

  /* ---------- scroll-spy for nav ---------- */
  function initScrollSpy() {
    var links = {}; document.querySelectorAll("#nav a[data-field]").forEach(function (a) { links[a.getAttribute("data-field")] = a; });
    if (!("IntersectionObserver" in window)) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var id = e.target.id.replace("field-", "");
        if (e.isIntersecting && links[id]) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove("active"); });
          links[id].classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    (CV.fields || []).forEach(function (f) { var s = document.getElementById("field-" + f.id); if (s) obs.observe(s); });
  }

  /* ---------- title + year ---------- */
  function meta() {
    if (CV.identity.name) document.title = CV.identity.name + " · CV / Portfolio";
    var y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- go ---------- */
  initTheme();
  bindText();
  renderLinks();
  renderNav();
  renderChipsAndStats();
  renderFields();
  renderEco();
  renderSkills();
  initScrollSpy();
  meta();
})();
