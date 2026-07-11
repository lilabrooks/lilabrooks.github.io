const practices = [
  {
    number: "01",
    title: "Platform engineering",
    copy: "Internal platforms with reliable foundations and clear paths to production.",
  },
  {
    number: "02",
    title: "Developer experience",
    copy: "Tools and workflows that cut waiting and make the right path obvious.",
  },
  {
    number: "03",
    title: "Technical strategy",
    copy: "Architecture choices tied to product direction and the work ahead.",
  },
  {
    number: "04",
    title: "Organizational systems",
    copy: "Team structures and operating rhythms that keep ownership clear as companies grow.",
  },
];

const work = [
  {
    date: "2026 · current",
    title: "Platform foundations",
    copy: "Advising a growing company on its platform roadmap, an AWS ECS-to-EKS migration, service intake, ownership, and operating rituals.",
    tags: ["AWS", "ECS / EKS", "Platform roadmap"],
  },
  {
    date: "2023 · 2026",
    title: "Customer and internal platforms",
    copy: "Managed 9 engineers at MongoDB. Led a 0-to-1 support product, platform cleanup, observability practices, and cloud cost work.",
    tags: ["SaaS", "Reliability", "Developer productivity"],
  },
  {
    date: "2022 · 2023",
    title: "Multi-platform delivery",
    copy: "Led Staff Engineers and Engineering Managers across backend, web, iOS, and Android at League through a high-pressure release window.",
    tags: ["Digital health", "Sentry", "Manager coaching"],
  },
  {
    date: "recent focus",
    title: "Applied AI in real products",
    copy: "Moved GenAI work through discovery, prototypes, and production use, including an agentic chatbot and vendor evaluation for AI insights products.",
    tags: ["LLMs", "RAG", "Agentic workflows"],
  },
];

const interests = [
  "Platforms treated as products, with users and a point of view",
  "Reliable AI inside the workflows where people already work",
  "Engineering measures that lead to a better decision",
  "Team design that makes ownership easy to see",
];

export default function Home() {
  return (
    <main id="main">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header shell">
        <a className="wordmark" href="#main" aria-label="Lila Brooks, home">
          <span className="wordmark-mark">LB</span>
          <span>Lila Brooks</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#interests">Interests</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div id="content">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-main">
            <p className="eyebrow">Senior engineering leader · Ontario, Canada</p>
            <h1 id="hero-title">
              I build software and platforms that help teams ship{" "}
              <em>with confidence.</em>
            </h1>
          </div>
          <div className="hero-aside">
            <p className="intro">
              I work where technical systems and organizational systems meet.
              I turn messy problem spaces into work teams can understand,
              operate, and improve.
            </p>
            <div className="signal">
              <span>15+ years</span>
              <p>across SaaS, platform, digital health, automotive, and media products.</p>
            </div>
          </div>
        </section>

        <section className="practice shell" aria-labelledby="practice-title">
          <div className="section-label">
            <p className="eyebrow" id="practice-title">What I work on</p>
          </div>
          <div className="practice-grid">
            {practices.map((practice) => (
              <article className="practice-item" key={practice.number}>
                <span className="item-number">{practice.number}</span>
                <div>
                  <h2>{practice.title}</h2>
                  <p>{practice.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="selected-work shell" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Work that leaves the system better.</h2>
            <p>
              My best work gives teams useful structure, clears recurring
              friction, and holds up after the launch date.
            </p>
          </div>
          <div className="work-list">
            {work.map((item) => (
              <article className="work-item" key={item.title}>
                <p className="work-date">{item.date}</p>
                <h3>{item.title}</h3>
                <p className="work-copy">{item.copy}</p>
                <ul className="tag-list" aria-label={`Topics for ${item.title}`}>
                  {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="approach" id="approach" aria-labelledby="approach-title">
          <div className="shell approach-grid">
            <p className="eyebrow light">How I lead</p>
            <div>
              <h2 id="approach-title">
                Make the goal clear. Put the right people in the room. Build
                something the team can support afterward.
              </h2>
              <p className="approach-copy">
                I care about the operating system around engineering work:
                charters, role expectations, onboarding, growth plans, manager
                coaching, planning rituals, and the quiet habits that make
                delivery more predictable.
              </p>
            </div>
            <aside className="proof" aria-label="Leadership experience">
              <span>People leadership</span>
              <p>
                Hiring, coaching, performance management, career growth, and
                manager coaching across distributed teams.
              </p>
              <span>Technical depth</span>
              <p>
                AWS, APIs, observability, incident response, cloud cost,
                CI/CD, LLMs, RAG, and developer productivity measures.
              </p>
            </aside>
          </div>
        </section>

        <section className="interests shell" id="interests" aria-labelledby="interests-title">
          <div className="section-heading compact">
            <p className="eyebrow">What I’m interested in now</p>
            <h2 id="interests-title">The next useful system.</h2>
          </div>
          <ol className="interest-list">
            {interests.map((interest, index) => (
              <li key={interest}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{interest}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="experience shell" aria-labelledby="experience-title">
          <p className="eyebrow" id="experience-title">Experience includes</p>
          <p className="company-list">
            MongoDB <span>·</span> League <span>·</span> Klick Health <span>·</span>{" "}
            AutoTrader <span>·</span> Torstar Digital
          </p>
        </section>

        <section className="contact shell" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Start a conversation</p>
          <h2 id="contact-title">Building through a messy problem?</h2>
          <p>
            I’m always interested in thoughtful engineering leadership,
            platform, product, and Applied AI work.
          </p>
          <div className="contact-links">
            <a href="mailto:lila.m.brooks@gmail.com">Email me</a>
            <a href="https://www.linkedin.com/in/lilabrooks">LinkedIn</a>
            <a href="https://github.com/lilabrooks">GitHub</a>
          </div>
        </section>
      </div>

      <footer className="site-footer shell">
        <p>© 2026 Lila Brooks</p>
        <a href="#main">Back to top ↑</a>
      </footer>
    </main>
  );
}
