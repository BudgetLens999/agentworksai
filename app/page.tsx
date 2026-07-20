import LeadForm from "./LeadForm";

export default function Home() {
  return (
    <>
      <div className="grain" />

      <header className="site-header">
        <div className="wrap header-inner">
          <a href="#top" className="brand">
            AgentWorks<span className="brand-dot">AI</span>
          </a>
          <nav className="site-nav">
            <a href="#use-cases">Use cases</a>
            <a href="#process">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact" className="nav-cta">Book a call</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AI agents for small business — billed monthly</p>
              <h1>Hire the work your team keeps putting off.</h1>
              <p className="hero-sub">
                AgentWorksAI builds a custom AI agent for your business — one that answers
                your inbox, follows up on leads, or chases overdue invoices — and bills
                it like a software subscription. No dev team, no project fees, cancel
                anytime.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">Book a 20-minute build call</a>
                <a href="#use-cases" className="btn btn-ghost">See what agents can do</a>
              </div>
            </div>

            <div className="hero-card" aria-label="Small business AI adoption statistic">
              <div className="punchcard">
                <div className="punchcard-top">
                  <span className="punchcard-label">Time card</span>
                  <span className="punchcard-serial">No. 2026</span>
                </div>
                <div className="punchcard-stat">
                  <span className="stat-number">16.5</span>
                  <span className="stat-unit">hrs / week</span>
                </div>
                <p className="punchcard-desc">
                  Median combined owner + employee time saved weekly at small
                  businesses already using AI tools.
                </p>
                <div className="punchcard-holes" aria-hidden="true">
                  <span></span><span></span><span></span><span></span><span></span><span></span>
                </div>
                <p className="punchcard-source">
                  Source: SBE Council, 2026 Small Business Tech Use Survey (n=517 employers)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="problem">
          <div className="wrap">
            <p className="section-eyebrow">01 — The backlog</p>
            <h2>The tasks that never make it onto today&apos;s calendar</h2>
            <div className="problem-grid">
              <div className="problem-item">
                <span className="problem-mark">—</span>
                <p>Leads that come in after 6pm and don&apos;t hear back until tomorrow — if at all.</p>
              </div>
              <div className="problem-item">
                <span className="problem-mark">—</span>
                <p>Invoices that sit unpaid because nobody has time to chase them.</p>
              </div>
              <div className="problem-item">
                <span className="problem-mark">—</span>
                <p>The same customer question, answered by hand, for the fortieth time this month.</p>
              </div>
              <div className="problem-item">
                <span className="problem-mark">—</span>
                <p>Data that has to be typed into two or three different systems by hand.</p>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="use-cases" id="use-cases">
          <div className="wrap">
            <p className="section-eyebrow">02 — Where agents earn their keep</p>
            <h2>The five things small businesses are already automating</h2>
            <p className="section-sub">
              Ranked by actual small-business adoption, not guesswork — drawn from the
              SBE Council&apos;s 2026 Small Business Tech Use Survey and reporting on
              small-business AI usage. <a href="#sources">Full sources below.</a>
            </p>

            <div className="ledger">
              {[
                {
                  rank: "01",
                  title: "Marketing & content creation",
                  body: "The single most common AI use case among small businesses today — social posts, ad copy, email campaigns, product descriptions.",
                  example: "drafts and schedules a week of social and email content from a one-line brief, in your brand voice.",
                },
                {
                  rank: "02",
                  title: "Customer service & communications",
                  body: "Chatbots and automated email responses are a top-three engagement use case for small businesses, especially those selling online or across channels.",
                  example: "triages inbound email and chat, answers common questions instantly, and flags anything that needs a human.",
                },
                {
                  rank: "03",
                  title: "Sales support & lead generation",
                  body: "Sales support and lead generation is one of the top areas small businesses are building into their AI stack, alongside AI-powered CRM tools for lead scoring.",
                  example: "qualifies inbound leads, replies within minutes, and books a meeting straight onto your calendar.",
                },
                {
                  rank: "04",
                  title: "Administrative automation",
                  body: "Scheduling, data entry, and workflow management is one of the fastest-growing AI use cases for small businesses.",
                  example: "keeps your booking calendar, spreadsheet, and CRM in sync so nobody re-types the same information twice.",
                },
                {
                  rank: "05",
                  title: "Financial management",
                  body: "Automated bookkeeping, invoicing, and real-time financial visibility — an emerging but increasingly impactful use case for long-term sustainability.",
                  example: "sends invoice reminders on a schedule and flags cash-flow issues before they become a problem.",
                },
              ].map((row) => (
                <article className="ledger-row" key={row.rank}>
                  <div className="ledger-rank">{row.rank}</div>
                  <div className="ledger-body">
                    <h3>{row.title}</h3>
                    <p>{row.body}</p>
                    <p className="ledger-example">
                      <strong>Agent example:</strong> {row.example}
                    </p>
                  </div>
                  <div className="ledger-cite">SBE Council, 2026</div>
                </article>
              ))}
            </div>

            <div className="adoption-strip">
              <div className="adoption-stat">
                <span className="adoption-number">82%</span>
                <span className="adoption-label">of small business employers have already invested in AI tools</span>
              </div>
              <div className="adoption-stat">
                <span className="adoption-number">93%</span>
                <span className="adoption-label">of small-business AI users plan to keep investing over the next 12 months</span>
              </div>
              <div className="adoption-stat">
                <span className="adoption-number">5</span>
                <span className="adoption-label">is the median number of AI tools a small business now runs as a &quot;stack&quot;</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process" id="process">
          <div className="wrap">
            <p className="section-eyebrow">03 — How it works</p>
            <h2>From call to live agent, in four steps</h2>
            <div className="process-list">
              {[
                { num: "01", title: "Discovery call", body: "20 minutes. We map the three tasks eating the most time on your team this month." },
                { num: "02", title: "Build", body: "Your agent gets built and connected to the tools you already use — inbox, calendar, CRM, spreadsheets." },
                { num: "03", title: "Test week", body: "The agent runs alongside your team for a week. We tune it against real cases before it's trusted solo." },
                { num: "04", title: "Go live", body: "Billed monthly like any other software subscription. No long-term contract, cancel anytime." },
              ].map((step) => (
                <div className="process-step" key={step.num}>
                  <span className="process-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="pricing" id="pricing">
          <div className="wrap">
            <p className="section-eyebrow">04 — Pricing</p>
            <h2>Priced like software, not a consulting project</h2>
            <p className="section-sub placeholder-note">
              Growth and Full stack are marked &quot;Custom&quot; — replace with real
              numbers before this goes live. See SETUP-CHECKLIST.md.
            </p>
            <div className="pricing-grid">
              <div className="price-card">
                <h3>Starter</h3>
                <p className="price-amount">$500<span>/mo</span></p>
                <p className="price-desc">One agent, one workflow. Good for a single high-friction task.</p>
              </div>
              <div className="price-card price-card-featured">
                <h3>Growth</h3>
                <p className="price-amount">Custom</p>
                <p className="price-desc">Up to three connected agents across inbox, scheduling, and CRM.</p>
              </div>
              <div className="price-card">
                <h3>Full stack</h3>
                <p className="price-amount">Custom</p>
                <p className="price-desc">Custom build across every repetitive workflow in the business.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="wrap contact-grid">
            <div>
              <p className="section-eyebrow">05 — Get started</p>
              <h2>Tell us what&apos;s eating your week.</h2>
              <p className="section-sub">
                Fill this in and we&apos;ll reply within one business day to book your
                discovery call.
              </p>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>

      <footer className="site-footer" id="sources">
        <div className="wrap footer-grid">
          <div>
            <a href="#top" className="brand">
              AgentWorks<span className="brand-dot">AI</span>
            </a>
            <p className="footer-tag">Custom AI agents for small businesses, billed monthly.</p>
          </div>
          <div className="footer-contact">
            <p><a href="mailto:REPLACE_WITH_YOUR_EMAIL">REPLACE_WITH_YOUR_EMAIL</a></p>
          </div>
          <div className="footer-sources">
            <p className="footer-sources-title">Sources</p>
            <p>
              Small Business &amp; Entrepreneurship Council, <em>2026 Small Business
              Tech Use Survey</em> and <em>&quot;The AI Tools Small Businesses Are
              Using&quot;</em> (April 2026) —{" "}
              <a href="https://sbecouncil.org/2026/04/25/the-ai-tools-small-businesses-are-using/" target="_blank" rel="noopener">
                sbecouncil.org
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
