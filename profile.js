const profile = {
  pageTitle: "Xiaoxuan He | Homepage",
  biography: [
    "I am currently a Ph.D. candidate focusing on generative models, multimodal learning, and efficient post-training for vision systems. My recent interests include image and video generation, reinforcement learning for generative models, and controllable multimodal reasoning.",
    "This homepage follows the classic academic style of Jie Yang's website: concise top information, a biography section, a running news list, and a publication-centered layout.",
    "At this stage, the page intentionally does not include a profile photo. If you want, a photo can still be added later without changing the overall structure."
  ],
  news: [
    "Launched this personal homepage in a classic academic layout.",
    "Preparing research materials around video generation, diffusion modeling, and multimodal post-training.",
    "Actively exploring reinforcement learning methods for generative foundation models."
  ],
  publications: [
    {
      title: "Replace with Your Paper Title",
      titleUrl: "#",
      authors: "Your Name, Coauthor A, Coauthor B.",
      venue: "Conference / Journal, 2026.",
      description:
        "Use this item for your most representative paper or project.",
      links: [
        { label: "Paper", url: "#" },
        { label: "Code", url: "#" },
        { label: "Project", url: "#" }
      ]
    },
    {
      title: "A Second Representative Work",
      titleUrl: "#",
      authors: "Your Name, Coauthor A, Coauthor B.",
      venue: "Conference / Journal, 2025.",
      description:
        "You can keep one short sentence here, or remove descriptions entirely for a more minimal style.",
      links: [
        { label: "Paper", url: "#" },
        { label: "Slides", url: "#" }
      ]
    }
  ],
  experience: [
    {
      title: "Research Intern / Visiting Student",
      meta: "2025 - Present | Your Lab or Company",
      detail:
        "Describe your role, topic, or main contribution in one concise sentence."
    },
    {
      title: "Graduate Researcher",
      meta: "2023 - Present | Your Advisor / Research Group",
      detail:
        "Mention your research direction, systems, or representative tasks."
    }
  ],
  education: [
    {
      title: "Ph.D. in Computer Science",
      meta: "2023 - Present | Your University",
      detail: "Advisor: Your Advisor Name"
    },
    {
      title: "B.S. or M.S. in Related Field",
      meta: "2019 - 2023 | Your Previous University",
      detail: "Optional thesis topic or distinction."
    }
  ],
  honors: [
    "Scholarship / Award Name, 2025.",
    "Competition, Fellowship, or Recognition, 2024."
  ],
  contactNote:
    "If you are interested in collaboration, internships, or research discussions, feel free to reach out by email.",
  footer: "© Xiaoxuan He | Last updated: May 2026"
};

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderAnchor(label, url) {
  return `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`;
}

function renderInlineLinks(links) {
  return links.map((link) => renderAnchor(link.label, link.url)).join(" | ");
}

function renderTextList(containerId, items, renderer) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }
  container.innerHTML = items.map(renderer).join("");
}

document.title = profile.pageTitle;

document.getElementById("hero-name").textContent = profile.name;
document.getElementById("hero-title").textContent = profile.title;
document.getElementById("hero-affiliation").textContent = profile.affiliation;
document.getElementById("hero-location").textContent = profile.location;

const heroEmail = document.getElementById("hero-email");
heroEmail.textContent = profile.email;
heroEmail.href = `mailto:${profile.email}`;

document.getElementById("hero-links").innerHTML = renderInlineLinks(profile.links);
document.getElementById("contact-links").innerHTML = renderInlineLinks([
  { label: "Email", url: `mailto:${profile.email}` },
  ...profile.links
]);
document.getElementById("contact-note").textContent = profile.contactNote;
document.getElementById("footer-text").textContent = profile.footer;

const scholarLink = document.getElementById("scholar-link");
scholarLink.innerHTML = profile.scholarUrl
  ? `[${renderAnchor("Google Scholar", profile.scholarUrl)}]`
  : "";

renderTextList(
  "biography-content",
  profile.biography,
  (paragraph) => `<p>${escapeHtml(paragraph)}</p>`
);

renderTextList(
  "news-list",
  profile.news,
  (item) => `<li>${escapeHtml(item)}</li>`
);

renderTextList(
  "publication-list",
  profile.publications,
  (item) => `
    <article class="publication-item">
      <p class="publication-title">${renderAnchor(item.title, item.titleUrl)}</p>
      <p class="publication-authors">${escapeHtml(item.authors)}</p>
      <p class="publication-venue">${escapeHtml(item.venue)}</p>
      <p class="publication-description">${escapeHtml(item.description)}</p>
      <p class="publication-links">${renderInlineLinks(item.links)}</p>
    </article>
  `
);

renderTextList(
  "experience-list",
  profile.experience,
  (item) => `
    <div class="simple-item">
      <div class="simple-item-title">${escapeHtml(item.title)}</div>
      <p class="simple-item-meta">${escapeHtml(item.meta)}</p>
      <p class="simple-item-detail">${escapeHtml(item.detail)}</p>
    </div>
  `
);

renderTextList(
  "education-list",
  profile.education,
  (item) => `
    <div class="simple-item">
      <div class="simple-item-title">${escapeHtml(item.title)}</div>
      <p class="simple-item-meta">${escapeHtml(item.meta)}</p>
      <p class="simple-item-detail">${escapeHtml(item.detail)}</p>
    </div>
  `
);

renderTextList(
  "honor-list",
  profile.honors,
  (item) => `<li>${escapeHtml(item)}</li>`
);
