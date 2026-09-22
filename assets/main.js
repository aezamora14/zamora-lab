/* ZAMORA LAB — page logic. Reads window.ZAMORA_LAB_DATA and renders the page. */
(function () {
  "use strict";
  const D = window.ZAMORA_LAB_DATA;
  if (!D) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const get = (path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), D);

  /* ── Simple text bindings: <el data-bind="lab.tagline"> ────────────── */
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const v = get(el.dataset.bind);
    if (v != null) el.textContent = v;
  });

  /* ── Stats ─────────────────────────────────────────────────────────── */
  $("#stats").innerHTML = (D.stats || []).map((s) => `<li><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></li>`).join("");

  /* ── Mission: italicise the last clause for emphasis ───────────────── */
  (function () {
    const bq = $(".mission blockquote");
    const t = D.lab.mission || "";
    const i = t.lastIndexOf("—");
    bq.innerHTML = i > 0 ? `${esc(t.slice(0, i))}—<em>${esc(t.slice(i + 1).trim())}</em>` : esc(t);
  })();

  /* ── Research ──────────────────────────────────────────────────────── */
  const flaskIcon = `<svg viewBox="0 0 120 90" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
      <circle cx="30" cy="45" r="14"/><circle cx="90" cy="45" r="14"/><circle cx="60" cy="18" r="10"/><circle cx="60" cy="72" r="10"/>
      <path d="M44 45h32M60 28v34M40 35 52 24M80 35 68 24M40 55l12 11M80 55 68 66"/></svg>`;
  $("#research-list").innerHTML = D.research.map((r, i) => {
    const media = r.image
      ? `<figure class="research-media"><button type="button" data-lightbox="${esc(r.image)}" data-caption="${esc(r.title)}" aria-label="Open figure: ${esc(r.title)}"><img src="${esc(r.image)}" alt="${esc(r.imageAlt || "Schematic for " + r.title)}" loading="lazy"></button><figcaption>Open figure</figcaption></figure>`
      : `<div class="research-media"><div class="research-placeholder" aria-hidden="true">${flaskIcon}</div></div>`;
    return `<article class="research-item reveal${r.wide ? " wide" : ""}">
      <div class="research-copy">
        <div class="research-num">Program ${pad(i + 1)}</div>
        <h3>${esc(r.title)}</h3>
        <p class="research-short">${esc(r.short)}</p>
        ${r.goal ? `<p class="research-goal"><strong>Goal.</strong> ${esc(r.goal)}</p>` : ""}
        ${r.details ? `<details class="research-details"><summary>Project focus</summary><p>${esc(r.details)}</p></details>` : ""}
        ${r.tags?.length ? `<ul class="tags">${r.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
      </div>
      ${media}
    </article>`;
  }).join("");

  /* ── Approach ──────────────────────────────────────────────────────── */
  $("#pipeline").innerHTML = D.approach.steps.map((s) => `<li>${esc(s)}</li>`).join("");
  $("#competencies").innerHTML = D.approach.competencies.map((c, i) => `<div class="competency reveal"><div class="idx">${pad(i + 1)}</div><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></div>`).join("");

  /* ── Technology ────────────────────────────────────────────────────── */
  const techIcons = {
    "sequencing": `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 8c0 16 28 16 28 32s-28 16-28 16M46 8c0 16-28 16-28 32s28 16 28 16"/><path d="M22 16h20M20 26h24M20 38h24M22 48h20"/></svg>`,
    "automation": `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="12" width="44" height="40" rx="6"/><path d="M20 22h24M20 32h10M20 42h16"/><circle cx="42" cy="38" r="6"/><path d="M42 32v-4M42 48v-4M48 38h4M32 38h4"/></svg>`,
    "single cell": `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="32" cy="32" r="20"/><circle cx="32" cy="32" r="8"/><circle cx="20" cy="22" r="2.5"/><circle cx="44" cy="40" r="2.5"/><circle cx="42" cy="20" r="2"/></svg>`
  };
  const feature = D.technology.length % 3 === 2 ? D.technology.findIndex((t) => t.image) : -1; // feature card only when it completes the row
  $("#tech-grid").innerHTML = D.technology.map((t, i) => {
    const type = (t.type || "").toLowerCase();
    const media = t.image
      ? `<div class="tech-media"><img src="${esc(t.image)}" alt="${esc(t.name)} in the Zamora Lab" loading="lazy"></div>`
      : `<div class="tech-media placeholder" aria-hidden="true">${techIcons[type] || techIcons["single cell"]}</div>`;
    return `<article class="tech-card reveal${i === feature ? " feature" : ""}">${media}<div class="tech-body"><div class="tech-type">${esc(t.type)}</div><h3>${esc(t.name)}</h3><p>${esc(t.description)}</p></div></article>`;
  }).join("");

  /* ── People ────────────────────────────────────────────────────────── */
  const linkRow = (links, cls = "") => links?.length ? `<div class="link-row ${cls}">${links.map((l) => `<a class="text-link${/^mailto:/.test(l.href) ? "" : " ext"}" href="${esc(l.href)}"${/^mailto:/.test(l.href) ? "" : ' target="_blank" rel="noopener"'}>${esc(l.label)}</a>`).join("")}</div>` : "";
  $("#people-grid").innerHTML = D.people.map((p) => `<article class="person reveal">
      <div class="person-media"><img src="${esc(p.image)}" alt="Portrait of ${esc(p.name)}" loading="lazy"></div>
      <div class="person-body">
        <div class="person-role">${esc(p.role)}</div>
        <h3>${esc(p.name)}</h3>
        <div class="person-aff">${esc(p.affiliation)}</div>
        <p class="person-bio">${esc(p.bio)}</p>
        ${linkRow(p.links)}
      </div></article>`).join("") +
    `<article class="person join-card reveal"><div class="person-body">
        <div class="person-role">We're growing</div>
        <h3>Join the lab</h3>
        <p class="person-bio">We're recruiting postdoctoral fellows, graduate students, and research staff who want to work at the intersection of immunology, cell engineering, and single-cell science.</p>
        <a class="btn btn-gold" href="#join">Open positions</a>
      </div></article>`;

  /* ── Alumni ────────────────────────────────────────────────────────── */
  (function () {
    const a = D.alumni || [];
    const initials = (name) => name.split(",")[0].trim().split(/\s+/).map((w) => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
    $("#alumni-grid").innerHTML = a.length
      ? a.map((x) => `<article class="alum reveal">
          ${x.image ? `<div class="alum-avatar"><img src="${esc(x.image)}" alt="Portrait of ${esc(x.name)}" loading="lazy"></div>` : `<div class="alum-avatar mono" aria-hidden="true">${esc(initials(x.name))}</div>`}
          <h3>${esc(x.name)}</h3>
          ${x.role ? `<p class="alum-role">${esc(x.role)}</p>` : ""}
          ${x.focus ? `<p class="alum-focus">${esc(x.focus)}</p>` : ""}
          ${x.now ? `<p class="alum-now"><span>Now</span>${esc(x.now)}</p>` : ""}
          ${linkRow(x.links, "alum-links")}
        </article>`).join("")
      : `<p class="alumni-empty">Former members of the lab will be listed here as the team grows.</p>`;
  })();

  /* ── Publications ──────────────────────────────────────────────────── */
  const pubs = [...(D.publications || []), ...(D.bookChapters || [])].sort((a, b) => b.year - a.year);
  const types = [["", "All"], ["article", "Articles"], ["review", "Reviews"], ["preprint", "Preprints"], ["chapter", "Book chapters"]]
    .filter(([k]) => !k || pubs.some((p) => p.type === k));
  const state = { q: "", type: "", year: "" };

  $("#pub-links").innerHTML = [
    D.lab.links.bibliography && `<a class="btn btn-navy ext" href="${esc(D.lab.links.bibliography)}" target="_blank" rel="noopener">Complete bibliography</a>`,
    D.lab.links.pubmed && `<a class="btn btn-outline ext" href="${esc(D.lab.links.pubmed)}" target="_blank" rel="noopener">PubMed</a>`
  ].filter(Boolean).join("");

  $("#pub-types").innerHTML = types.map(([k, label]) => `<button type="button" class="chip" data-type="${k}" aria-pressed="${k === "" ? "true" : "false"}">${label}</button>`).join("");
  const yearSel = $("#pub-year");
  [...new Set(pubs.map((p) => p.year))].forEach((y) => { const o = document.createElement("option"); o.value = y; o.textContent = y; yearSel.appendChild(o); });

  const hl = (authors) => {
    let s = esc(authors);
    (D.highlightAuthors || []).forEach((n) => { s = s.replace(new RegExp(`(^|,\\s*)(${esc(n).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})(?=,|$)`, "g"), "$1<b>$2</b>"); });
    return s;
  };
  const typeLabel = { article: "Article", review: "Review", preprint: "Preprint", chapter: "Chapter" };

  function renderPubs() {
    const q = state.q.trim().toLowerCase();
    const list = pubs.filter((p) =>
      (!state.type || p.type === state.type) &&
      (!state.year || String(p.year) === state.year) &&
      (!q || `${p.title} ${p.authors} ${p.journal} ${p.year}`.toLowerCase().includes(q)));
    $("#pub-count").textContent = list.length === pubs.length ? `${pubs.length} publications` : `Showing ${list.length} of ${pubs.length}`;
    if (!list.length) { $("#pub-list").innerHTML = `<p class="pub-empty">No publications match those filters.</p>`; return; }
    const groups = new Map();
    list.forEach((p) => { if (!groups.has(p.year)) groups.set(p.year, []); groups.get(p.year).push(p); });
    $("#pub-list").innerHTML = [...groups].map(([year, items]) => `<div class="pub-year-group">
        <div class="pub-year-label">${year}</div>
        <div class="pub-items">${items.map((p) => {
          const href = p.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${p.pmid}/` : p.doi ? `https://doi.org/${p.doi}` : null;
          const outs = [
            p.pmid && `<a href="https://pubmed.ncbi.nlm.nih.gov/${p.pmid}/" target="_blank" rel="noopener">PubMed</a>`,
            p.doi && `<a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">DOI</a>`,
            p.pmc && `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/${esc(p.pmc)}/" target="_blank" rel="noopener">Free full text</a>`
          ].filter(Boolean).join("");
          return `<article class="pub">
            <h3 class="pub-title">${href ? `<a href="${href}" target="_blank" rel="noopener">${esc(p.title)}</a>` : esc(p.title)}</h3>
            <p class="pub-authors">${hl(p.authors)}</p>
            <div class="pub-meta"><span class="pub-journal">${esc(p.journal)}</span><span class="pub-type ${esc(p.type)}">${typeLabel[p.type] || esc(p.type)}</span>${outs ? `<span class="pub-out">${outs}</span>` : ""}</div>
          </article>`;
        }).join("")}</div></div>`).join("");
  }
  renderPubs();
  $("#pub-search").addEventListener("input", (e) => { state.q = e.target.value; renderPubs(); });
  yearSel.addEventListener("change", (e) => { state.year = e.target.value; renderPubs(); });
  $("#pub-types").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    state.type = b.dataset.type;
    $("#pub-types").querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
    renderPubs();
  });

  /* ── Gallery ───────────────────────────────────────────────────────── */
  $("#gallery-grid").innerHTML = (D.gallery || []).length
    ? D.gallery.map((g) => `<button type="button" class="gallery-item reveal${g.span ? " " + esc(g.span) : ""}" data-lightbox="${esc(g.image)}" data-caption="${esc(g.caption || "")}" aria-label="${esc(g.caption || "Open photo")}"><img src="${esc(g.image)}" alt="${esc(g.caption || "")}" loading="lazy"><figcaption>${esc(g.caption || "")}</figcaption></button>`).join("")
    : `<p class="gallery-empty">Photos coming soon.</p>`;

  /* ── News ──────────────────────────────────────────────────────────── */
  if ((D.news || []).length) {
    const fmt = (d) => { const [y, m] = d.split("-"); return m ? new Date(+y, +m - 1, 1).toLocaleDateString("en-US", { month: "long", year: "numeric" }) : y; };
    $("#news").hidden = false;
    $("#news-list").innerHTML = D.news.map((n) => `<li><span class="news-date">${esc(fmt(n.date))}</span><p>${esc(n.text)}${n.href ? ` <a class="text-link ext" href="${esc(n.href)}" target="_blank" rel="noopener">Read more</a>` : ""}</p></li>`).join("");
  }

  /* ── About ─────────────────────────────────────────────────────────── */
  $("#about-paragraphs").innerHTML = D.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#timeline").innerHTML = D.about.timeline.map((t) => `<li><strong>${esc(t.year)}</strong><span>${esc(t.text)}</span></li>`).join("");
  $("#about-links").innerHTML = [
    `<a class="text-link ext" href="${esc(D.lab.links.facultyProfile)}" target="_blank" rel="noopener">UC Davis faculty profile</a>`,
    `<a class="text-link ext" href="${esc(D.lab.links.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,
    `<a class="text-link ext" href="${esc(D.lab.links.pubmed)}" target="_blank" rel="noopener">PubMed</a>`
  ].join("");

  /* ── Join ──────────────────────────────────────────────────────────── */
  const posIcons = [
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/><path d="M7.5 15h9"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9.5" r="2.5"/><path d="M15.5 20a5 5 0 0 1 6-4.6"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12h8M12 8v8"/><circle cx="12" cy="12" r="9"/></svg>`
  ];
  $("#positions").innerHTML = D.join.positions.map((p, i) => `<div class="position reveal"><div class="icon" aria-hidden="true">${posIcons[i % posIcons.length]}</div><div><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div></div>`).join("");
  $("#join-cta").innerHTML = `<div><h3>Get in touch</h3><p>${esc(D.lab.unit)} · ${esc(D.lab.institution)}</p></div>
    <div class="actions">
      ${D.lab.email ? `<a class="btn btn-gold" href="mailto:${esc(D.lab.email)}">Email Dr. Zamora</a>` : ""}
      <a class="btn btn-ghost ext" href="${esc(D.lab.links.gradGroup)}" target="_blank" rel="noopener">Immunology Graduate Group</a>
    </div>`;

  /* ── Footer ────────────────────────────────────────────────────────── */
  $("#footer-address").innerHTML = `${esc(D.lab.department)}<br>${esc(D.lab.address)}${D.lab.email ? `<br><a href="mailto:${esc(D.lab.email)}">${esc(D.lab.email)}</a>` : ""}`;
  $("#footer-links").innerHTML = [
    ["UC Davis faculty profile", D.lab.links.facultyProfile],
    ["LinkedIn", D.lab.links.linkedin],
    ["PubMed", D.lab.links.pubmed],
    ["Complete bibliography", D.lab.links.bibliography],
    ["GitHub", D.lab.links.github]
  ].filter(([, h]) => h).map(([l, h]) => `<a class="ext" href="${esc(h)}" target="_blank" rel="noopener">${esc(l)}</a>`).join("");
  $("#year").textContent = new Date().getFullYear();

  /* ── Header, nav, active section ───────────────────────────────────── */
  const header = $(".site-header"), nav = $("#site-nav"), toggle = $("#nav-toggle");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  toggle.addEventListener("click", () => { const open = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu"); });
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); } });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("open")) { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); } });

  const navLinks = [...nav.querySelectorAll("a[href^='#']")];
  const sections = navLinks.map((a) => document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id)); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach((s) => spy.observe(s));

    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); reveal.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .08 });
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  }

  /* ── Lightbox ──────────────────────────────────────────────────────── */
  const lb = $("#lightbox"), lbImg = $("#lightbox-img"), lbCap = $("#lightbox-cap");
  let lastFocus = null;
  const openLb = (src, cap) => { lastFocus = document.activeElement; lbImg.src = src; lbImg.alt = cap || ""; lbCap.textContent = cap || ""; lb.hidden = false; document.body.style.overflow = "hidden"; $("#lightbox-close").focus(); };
  const closeLb = () => { lb.hidden = true; lbImg.removeAttribute("src"); document.body.style.overflow = ""; lastFocus?.focus?.(); };
  let current = null; // the [data-lightbox] element currently shown, for prev/next within the gallery
  const step = (dir) => {
    if (!current || !current.classList.contains("gallery-item")) return;
    const items = [...document.querySelectorAll(".gallery-item")];
    const next = items[(items.indexOf(current) + dir + items.length) % items.length];
    current = next; lbImg.src = next.dataset.lightbox; lbImg.alt = next.dataset.caption || ""; lbCap.textContent = next.dataset.caption || "";
  };
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-lightbox]");
    if (b) { current = b; openLb(b.dataset.lightbox, b.dataset.caption); return; }
    if (e.target.closest("#lightbox-prev")) { step(-1); return; }
    if (e.target.closest("#lightbox-next")) { step(1); return; }
    if (e.target === lb || e.target.closest("#lightbox-close")) closeLb();
  });
  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "ArrowLeft") step(-1);
  });
})();
