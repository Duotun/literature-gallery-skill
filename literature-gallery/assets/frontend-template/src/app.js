(function () {
  const papers = Array.isArray(window.PAPER_LIBRARY) ? window.PAPER_LIBRARY : [];
  const state = {
    query: "",
    sort: "year-desc",
    years: new Set(),
    areas: new Set(),
    venues: new Set(),
    keywords: new Set()
  };

  const el = {
    search: document.querySelector("#searchInput"),
    sort: document.querySelector("#sortSelect"),
    gallery: document.querySelector("#gallery"),
    empty: document.querySelector("#emptyState"),
    count: document.querySelector("#resultCount"),
    clear: document.querySelector("#clearFilters"),
    dialog: document.querySelector("#paperDialog"),
    detail: document.querySelector("#paperDetail"),
    filters: {
      years: document.querySelector("#yearFilters"),
      areas: document.querySelector("#areaFilters"),
      venues: document.querySelector("#venueFilters"),
      keywords: document.querySelector("#keywordFilters")
    }
  };

  const filterSources = {
    years: unique(papers.map((paper) => String(paper.year))).sort((a, b) => Number(b) - Number(a)),
    areas: unique(papers.map((paper) => paper.area)).sort(localeSort),
    venues: unique(papers.map((paper) => paper.venue)).sort(localeSort),
    keywords: unique(papers.flatMap((paper) => paper.keywords || [])).sort(localeSort)
  };

  function unique(values) {
    return [...new Set(values.filter(Boolean))];
  }

  function localeSort(a, b) {
    return String(a).localeCompare(String(b), "en");
  }

  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderFilters() {
    Object.entries(filterSources).forEach(([group, values]) => {
      el.filters[group].innerHTML = values
        .map((value) => {
          const active = state[group].has(value);
          return `<button class="chip ${active ? "is-active" : ""}" type="button" data-group="${group}" data-value="${escapeHTML(value)}">${escapeHTML(value)}</button>`;
        })
        .join("");
    });
  }

  function paperMatches(paper) {
    const haystack = [
      paper.title,
      paper.description,
      paper.abstract,
      paper.area,
      paper.venue,
      paper.year,
      ...(paper.authors || []),
      ...(paper.keywords || []),
      ...(paper.notes || [])
    ]
      .join(" ")
      .toLowerCase();

    const queryOK = !state.query || haystack.includes(state.query.toLowerCase());
    const yearOK = !state.years.size || state.years.has(String(paper.year));
    const areaOK = !state.areas.size || state.areas.has(paper.area);
    const venueOK = !state.venues.size || state.venues.has(paper.venue);
    const keywordOK =
      !state.keywords.size || (paper.keywords || []).some((keyword) => state.keywords.has(keyword));

    return queryOK && yearOK && areaOK && venueOK && keywordOK;
  }

  function sortPapers(items) {
    return [...items].sort((a, b) => {
      if (state.sort === "year-asc") return a.year - b.year || localeSort(a.title, b.title);
      if (state.sort === "title-asc") return localeSort(a.title, b.title);
      if (state.sort === "venue-asc") return localeSort(a.venue, b.venue) || b.year - a.year;
      return b.year - a.year || localeSort(a.title, b.title);
    });
  }

  function renderGallery() {
    const visible = sortPapers(papers.filter(paperMatches));
    el.count.textContent = `${visible.length} paper${visible.length === 1 ? "" : "s"}`;
    el.empty.hidden = visible.length > 0;
    el.gallery.innerHTML = visible.map(renderCard).join("");
  }

  function renderCard(paper) {
    const keywords = (paper.keywords || [])
      .slice(0, 3)
      .map((keyword) => `<span>${escapeHTML(keyword)}</span>`)
      .join("");

    return `
      <button class="paper-card" type="button" data-paper-id="${escapeHTML(paper.id)}">
        <img src="${escapeHTML(paper.cover)}" alt="${escapeHTML(paper.title)} cover" loading="lazy" />
        <span class="status">${escapeHTML(paper.status || "paper")}</span>
        <span class="card-body">
          <span class="meta-line">${escapeHTML(paper.year)} · ${escapeHTML(paper.venue)} · ${escapeHTML(paper.area)}</span>
          <strong>${escapeHTML(paper.title)}</strong>
          <span class="description">${escapeHTML(paper.description)}</span>
          <span class="mini-tags">${keywords}</span>
        </span>
      </button>
    `;
  }

  function showPaper(id) {
    const paper = papers.find((item) => item.id === id);
    if (!paper) return;

    const links = Object.entries(paper.links || {})
      .filter(([, url]) => url)
      .map(([label, url]) => `<a href="${escapeHTML(url)}" target="_blank" rel="noreferrer">${escapeHTML(label)}</a>`)
      .join("");

    el.detail.innerHTML = `
      <button class="close-button" type="button" aria-label="关闭详情">×</button>
      <div class="detail-grid">
        <img class="detail-cover" src="${escapeHTML(paper.cover)}" alt="${escapeHTML(paper.title)} cover" />
        <section>
          <p class="meta-line">${escapeHTML(paper.year)} · ${escapeHTML(paper.venue)} · ${escapeHTML(paper.area)}</p>
          <h2>${escapeHTML(paper.title)}</h2>
          <p class="authors">${escapeHTML((paper.authors || []).join(", "))}</p>
          <p class="abstract">${escapeHTML(paper.abstract || paper.description)}</p>
          <div class="detail-tags">
            ${(paper.keywords || []).map((keyword) => `<span>${escapeHTML(keyword)}</span>`).join("")}
          </div>
          <div class="detail-links">${links}</div>
        </section>
      </div>
      <section class="notes">
        <h3>Reading Notes</h3>
        <ul>
          ${(paper.notes || []).map((note) => `<li>${escapeHTML(note)}</li>`).join("")}
        </ul>
      </section>
    `;

    if (!el.dialog.open) el.dialog.showModal();
    window.location.hash = `paper/${paper.id}`;
  }

  function closeDialog() {
    if (el.dialog.open) el.dialog.close();
    if (window.location.hash.startsWith("#paper/")) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  }

  function hydrateFromHash() {
    const id = window.location.hash.replace("#paper/", "");
    if (id) showPaper(id);
  }

  function clearFilters() {
    state.query = "";
    state.sort = "year-desc";
    Object.values(state).forEach((value) => {
      if (value instanceof Set) value.clear();
    });
    el.search.value = "";
    el.sort.value = state.sort;
    renderFilters();
    renderGallery();
  }

  function bindEvents() {
    el.search.addEventListener("input", (event) => {
      state.query = event.target.value.trim();
      renderGallery();
    });

    el.sort.addEventListener("change", (event) => {
      state.sort = event.target.value;
      renderGallery();
    });

    document.addEventListener("click", (event) => {
      const chip = event.target.closest(".chip");
      if (chip) {
        const group = chip.dataset.group;
        const value = chip.dataset.value;
        if (state[group].has(value)) state[group].delete(value);
        else state[group].add(value);
        renderFilters();
        renderGallery();
      }

      const card = event.target.closest(".paper-card");
      if (card) showPaper(card.dataset.paperId);

      if (event.target.closest(".close-button")) closeDialog();
    });

    el.dialog.addEventListener("click", (event) => {
      if (event.target === el.dialog) closeDialog();
    });

    el.clear.addEventListener("click", clearFilters);

    window.addEventListener("hashchange", hydrateFromHash);
  }

  renderFilters();
  renderGallery();
  bindEvents();
  hydrateFromHash();
})();
