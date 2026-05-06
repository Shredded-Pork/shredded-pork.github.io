const profile = {
  pageTitle: "Xiaoxuan He | Homepage",
  name: "Xiaoxuan He",
  nameSecondary: "",
  title: "Ph.D. Candidate in AI",
  affiliation: "Your University / Lab Name",
  location: "Shanghai, China",
  email: "your.email@example.com",
  photo: "",
  summary:
    "I work on generative modeling, multimodal learning, and post-training methods for vision and video systems.",
  highlights: [
    "Open to research collaborations, internships, and academic exchange.",
    "Interested in diffusion models, reinforcement learning, and multimodal reasoning.",
    "This homepage is driven by a single editable data file: profile.js."
  ],
  heroLinks: [
    { label: "Email", url: "mailto:your.email@example.com" },
    { label: "Google Scholar", url: "#" },
    { label: "GitHub", url: "#" },
    { label: "CV", url: "#" }
  ],
  biography: [
    "I am currently a Ph.D. candidate focusing on generative models, multimodal learning, and efficient post-training for vision systems. My recent interests include image and video generation, reinforcement learning for generative models, and controllable multimodal reasoning.",
    "I enjoy building research systems that connect strong modeling ideas with practical training pipelines. This homepage is inspired by the clean academic style of Jie Yang's personal website, while using a more modern card-based layout and a data-driven structure that is easy to customize.",
    "You can replace the placeholder text, affiliations, links, and publication entries below with your own information. If you later want, this template can also be extended into a full GitHub Pages site."
  ],
  news: [
    {
      date: "2026.05",
      text: "Launched this personal homepage template inspired by Jie Yang's academic website."
    },
    {
      date: "2026.04",
      text: "Preparing research materials around video generation, diffusion modeling, and multimodal post-training."
    },
    {
      date: "2026.03",
      text: "Actively exploring reinforcement learning methods for flow matching and generative foundation models."
    }
  ],
  interests: [
    "Generative Models",
    "Diffusion and Flow Matching",
    "Multimodal Learning",
    "Video Generation",
    "Vision-Language Models",
    "Post-training and RL",
    "Efficient Inference",
    "Interactive AI Systems"
  ],
  publications: [
    {
      title: "Replace with Your Paper Title",
      authors: "Your Name, Coauthor A, Coauthor B",
      venue: "Conference / Journal",
      year: "2026",
      description:
        "Use this card for your most important publication. You can add a short one-sentence summary of the main idea or contribution here.",
      links: [
        { label: "Paper", url: "#" },
        { label: "Code", url: "#" },
        { label: "Project", url: "#" }
      ]
    },
    {
      title: "A Second Representative Work",
      authors: "Your Name, Coauthor A, Coauthor B",
      venue: "Conference / Journal",
      year: "2025",
      description:
        "Keep the description concise and concrete, for example: real-time video generation, preference optimization, or multimodal reasoning.",
      links: [
        { label: "Paper", url: "#" },
        { label: "Slides", url: "#" }
      ]
    },
    {
      title: "A Third Publication or Project",
      authors: "Your Name, Coauthor A, Coauthor B",
      venue: "Conference / Journal",
      year: "2024",
      description:
        "If you do not yet want a publication list, you can rename this whole section to Selected Projects and keep the same layout.",
      links: [
        { label: "Paper", url: "#" },
        { label: "Demo", url: "#" }
      ]
    }
  ],
  experience: [
    {
      title: "Research Intern / Visiting Student",
      meta: "2025 - Present | Your Lab or Company",
      detail:
        "Describe your role, research topic, or technical contribution in one or two compact sentences."
    },
    {
      title: "Graduate Researcher",
      meta: "2023 - Present | Your Advisor / Research Group",
      detail:
        "Mention your research direction, representative tasks, and the kind of systems or methods you work on."
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
      detail: "Optional thesis topic or graduation distinction."
    }
  ],
  honors: [
    {
      title: "Scholarship / Award Name",
      detail: "Year or brief context."
    },
    {
      title: "Competition, Fellowship, or Recognition",
      detail: "Year or brief context."
    }
  ],
  contactNote:
    "I am always happy to discuss research collaborations, internship opportunities, and shared interests in generative AI, multimodal systems, and efficient model training.",
  footer:
    "© Xiaoxuan He | Last updated: May 2026 | Replace the placeholder information in profile.js"
};

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderLinks(links) {
  return links
    .map(
      (link) =>
        `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`
    )
    .join("");
}

function renderPortrait() {
  const portrait = document.getElementById("portrait");
  if (!portrait) {
    return;
  }

  if (profile.photo && profile.photo.trim()) {
    portrait.innerHTML = `<img class="portrait-image" src="${escapeHtml(
      profile.photo
    )}" alt="${escapeHtml(profile.name)}" />`;
    return;
  }

  const initials = profile.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  portrait.innerHTML = `<div class="portrait-initials">${escapeHtml(initials)}</div>`;
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
document.getElementById("card-name").textContent = profile.name;
document.getElementById("hero-title").textContent = profile.title;
document.getElementById("hero-affiliation").textContent = profile.affiliation;
document.getElementById("hero-location").textContent = profile.location;
document.getElementById("card-summary").textContent = profile.summary;
document.getElementById("hero-links").innerHTML = renderLinks(profile.heroLinks);
document.getElementById("contact-links").innerHTML = renderLinks(profile.heroLinks);
document.getElementById("contact-note").textContent = profile.contactNote;
document.getElementById("footer-text").textContent = profile.footer;

renderPortrait();

renderTextList(
  "highlights",
  profile.highlights,
  (item) => `<li>${escapeHtml(item)}</li>`
);

renderTextList(
  "biography-content",
  profile.biography,
  (paragraph) => `<p>${escapeHtml(paragraph)}</p>`
);

renderTextList(
  "news-list",
  profile.news,
  (item) => `
    <article class="timeline-item">
      <div class="timeline-date">${escapeHtml(item.date)}</div>
      <div class="timeline-text">${escapeHtml(item.text)}</div>
    </article>
  `
);

renderTextList(
  "research-tags",
  profile.interests,
  (item) => `<span>${escapeHtml(item)}</span>`
);

renderTextList(
  "publication-list",
  profile.publications,
  (item) => `
    <article class="publication-item">
      <h3>${escapeHtml(item.title)}</h3>
      <div class="publication-meta">${escapeHtml(item.venue)} · ${escapeHtml(item.year)}</div>
      <p class="publication-authors">${escapeHtml(item.authors)}</p>
      <p class="publication-description">${escapeHtml(item.description)}</p>
      <div class="publication-links">${renderLinks(item.links)}</div>
    </article>
  `
);

renderTextList(
  "experience-list",
  profile.experience,
  (item) => `
    <article class="stack-card">
      <h3>${escapeHtml(item.title)}</h3>
      <div class="stack-meta">${escapeHtml(item.meta)}</div>
      <p>${escapeHtml(item.detail)}</p>
    </article>
  `
);

renderTextList(
  "education-list",
  profile.education,
  (item) => `
    <article class="stack-card">
      <h3>${escapeHtml(item.title)}</h3>
      <div class="stack-meta">${escapeHtml(item.meta)}</div>
      <p>${escapeHtml(item.detail)}</p>
    </article>
  `
);

renderTextList(
  "honor-list",
  profile.honors,
  (item) => `
    <article class="award-card">
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.detail)}</p>
    </article>
  `
);
