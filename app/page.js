const facebookIdeas = [
  {
    title: "Bangladesh theke Japan: High Salary Spotlight",
    hook: "🚀 Dream job in Japan? Salary te double boost!",
    points: [
      "Share how JLPT N4/N3 pass kore average ¥250k+ monthly income possible.",
      "Highlight a Bangladeshi success story with before/after salary comparison.",
      "CTA: “Comment ‘Japan’ and amader counselor apnake call dibe.”"
    ],
    tone: "English + বাংলা mix, inspiring, data-driven"
  },
  {
    title: "JLPT Crash Prep Marathon",
    hook: "📚 JLPT ready korar shera time — ekhon!",
    points: [
      "Explain 6-week intensive batch with mock tests & speaking partner.",
      "Add visual checklist: Vocabulary, Grammar, Listening drills.",
      "CTA: “Inbox e ‘JLPT GO’ send korun for free placement test.”"
    ],
    tone: "Motivational, FOMO-driven"
  },
  {
    title: "Japan Skill Visa Update",
    hook: "🛠️ SSW Visa new quota open!",
    points: [
      "Break down top industries hiring: caregiving, food service, manufacturing.",
      "Share requirements: SSC/HSC result + JLPT N4/N3 + skill test.",
      "CTA: “Live webinar e join korte ‘SSW’ comment korun.”"
    ],
    tone: "Authoritative, urgent, community-focused"
  }
];

const tiktokScripts = [
  {
    title: "Salary Reveal Challenge",
    shots: [
      "Shot 1: Dhaka traffic backdrop — “Bangladesh e chokhe dhora salary?”",
      "Shot 2: Flash cut to Tokyo skyline — “Japan e same skill e salary ¥250,000+!”",
      "Shot 3: Counselor overlay explaining JLPT + SSW path.",
      "Outro: “STANDEX sathe dream upgrade korun, link bio te.”"
    ],
    sound: "Upbeat lo-fi beat, captions Banglish"
  },
  {
    title: "JLPT Quick Hack Reel",
    shots: [
      "Shot 1: Desk setup with notebooks — “3 mini hacks JLPT crack korar jonno.”",
      "Shot 2: On-screen text for vocab flashcards, shadowing drills, daily speaking room.",
      "Shot 3: Student reaction clip — “Eto easy chilo na!”",
      "Outro: “Try the hacks & join amader free masterclass.”"
    ],
    sound: "Trend synth pop, quick jump cuts"
  },
  {
    title: "Visa Myth Busting",
    shots: [
      "Shot 1: Counselor with text ‘Myth: Visa paite লাখ লাখ লাগবে’",
      "Shot 2: Breakdown of actual cost timeline and STANDEX support.",
      "Shot 3: Client success reel with passport stamp close-up.",
      "Outro: “Myth break holo? Comment ‘Visa’ & amra DM korbo.”"
    ],
    sound: "Confident bass drop, on-screen checklist"
  }
];

const leadFlows = [
  {
    name: "Facebook Messenger Qualification",
    entryHook: "Agent: “Assalamu alaikum! Japan dream? SSC/HSC result share korben?”",
    steps: [
      "Prospect shares SSC/HSC GPA → bot tags GPA bucket (>=4, 3.5-4, <3.5).",
      "Follow-up: “JLPT porikkha niyechhen naki? Nibondhon korte ichchuk?”",
      "Based on response → offer free JLPT diagnostic or starter class seat.",
      "CTA: “Phone number & best time diye din, counselor call korbe today.”"
    ],
    outcome: "Qualified lead gets moved to CRM with GPA, JLPT status, preferred industry."
  },
  {
    name: "TikTok DM Flow",
    entryHook: "Auto reply: “Konnichiwa! Japan e kaaj korte chaile 2 steps.”",
    steps: [
      "Ask current education status: “SSC complete? HSC running?”",
      "Ask interest: “Study route naki direct job via SSW?”",
      "Send tailored carousel: JLPT classes or SSW coaching details.",
      "Collect email/WhatsApp for document checklist delivery."
    ],
    outcome: "Lead tagged by route preference, automation triggers webinar invite."
  },
  {
    name: "Website Chatbot Playbook",
    entryHook: "Widget prompt: “Japan e cholun 🇯🇵 — 60s e profile check!”",
    steps: [
      "Capture name + phone instantly.",
      "Ask GPA & graduation year to assess eligibility timeline.",
      "Ask language comfort: “Bangla guidance naki fully Japanese immersion?”",
      "Recommend batch: JLPT Fast Track vs. Foundation, schedule counselor callback."
    ],
    outcome: "Dashboard auto-creates lead card with readiness score & next action."
  }
];

const visaInfo = [
  {
    title: "Specified Skilled Worker (SSW) Visa",
    highlights: [
      "Eligibility: Minimum SSC/HSC, JLPT N4+ (industry dependent), JFT-Basic/SSW skill test pass.",
      "Industries hiring Bangladeshi talent: Nursing care, food service, manufacturing, building cleaning, agriculture.",
      "Process timeline: 2-3 months for exams + documents, 1-2 months employer match, COE issuance ~6 weeks.",
      "Benefits: Full-time work rights, renewable 5-year path, spouse/child dependent option after category switch.",
      "STANDEX support: JLPT bootcamp, skill test prep, interview coaching, document vetting, employer placement."
    ],
    callout: "Tip: Result pillar GPA≥3.5 elevates employer interest; include SSC & HSC transcripts early."
  },
  {
    title: "Japan Student Visa",
    highlights: [
      "Eligibility: HSC or equivalent with consistent GPA, bank solvency proof (~¥2M equivalent), JLPT N5 ticket boosts acceptance.",
      "Document essentials: School transcripts, recommendation, Statement of Purpose in English/Bangla + Japanese summary.",
      "Process timeline: 1 month document prep, COE submission to language school, 2-3 months approval, visa stamping 1-2 weeks.",
      "Work rights: 28 hours/week part-time, unlocks smooth transition to SSW or higher studies pathway.",
      "STANDEX support: School shortlisting, SOP drafting clinic, financial documentation guidance, pre-departure cultural training."
    ],
    callout: "Pro move: Highlight future JLPT goals in SOP to show commitment—admission committee loves growth mindset."
  }
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <p className="badge">STANDEX Business Growth Agent</p>
        <h1>Grow Japan-focused enrollment & visa success, ek sathe.</h1>
        <p className="lead">
          Professional, encouraging, trustworthy guidance — Banglish vibe, world-class execution. Convert followers into
          confident JLPT students, then visa-approved professionals.
        </p>
        <div className="cta-row">
          <a className="cta primary" href="#content">View Campaign Playbook</a>
          <a className="cta secondary" href="#visa">Visa Expert Desk</a>
        </div>
      </section>

      <section id="content" className="section">
        <header className="section-header">
          <h2>High-Engagement Content Bank</h2>
          <p>Ready-to-post Facebook ideas & TikTok scripts that highlight Japan e high salary opportunity & JLPT confidence.</p>
        </header>
        <div className="grid">
          {facebookIdeas.map((idea) => (
            <article key={idea.title} className="card">
              <h3>{idea.title}</h3>
              <p className="hook">{idea.hook}</p>
              <ul>
                {idea.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="tone">Tone: {idea.tone}</p>
              <span className="tag">Facebook</span>
            </article>
          ))}
          {tiktokScripts.map((script) => (
            <article key={script.title} className="card">
              <h3>{script.title}</h3>
              <p className="hook">Hook & Shots</p>
              <ol>
                {script.shots.map((shot) => (
                  <li key={shot}>{shot}</li>
                ))}
              </ol>
              <p className="tone">Sound: {script.sound}</p>
              <span className="tag tiktok">TikTok</span>
            </article>
          ))}
        </div>
      </section>

      <section id="lead" className="section">
        <header className="section-header">
          <h2>Lead Qualification Flowcharts</h2>
          <p>Conversation scripts that capture SSC/HSC result, JLPT interest, and immediate call scheduling.</p>
        </header>
        <div className="grid">
          {leadFlows.map((flow) => (
            <article key={flow.name} className="card flow">
              <h3>{flow.name}</h3>
              <p className="hook">{flow.entryHook}</p>
              <ol>
                {flow.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="outcome">{flow.outcome}</p>
              <span className="tag lead">Lead Flow</span>
            </article>
          ))}
        </div>
      </section>

      <section id="visa" className="section">
        <header className="section-header">
          <h2>Visa Expert Desk</h2>
          <p>Accurate, up-to-date insights on SSW & Student visas tailored for Bangladeshi applicants.</p>
        </header>
        <div className="grid">
          {visaInfo.map((visa) => (
            <article key={visa.title} className="card visa">
              <h3>{visa.title}</h3>
              <ul>
                {visa.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <p className="callout">{visa.callout}</p>
              <span className="tag visa-tag">Visa Strategy</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section action">
        <header className="section-header">
          <h2>Action Accelerator</h2>
          <p>Deploy the playbook today — enroll 100+ JLPT-ready learners & secure Japan-bound visas.</p>
        </header>
        <div className="action-grid">
          <div className="action-card">
            <h3>Daily Operating Rhythm</h3>
            <ul>
              <li>Morning: Post FB idea #1, boost to GPA ≥3.5 audience.</li>
              <li>Afternoon: TikTok script shoot & publish, add “Visa” DM keyword.</li>
              <li>Evening: Messenger leads follow-up within 15 min, schedule counselor calls.</li>
            </ul>
          </div>
          <div className="action-card">
            <h3>KPIs & Target</h3>
            <ul>
              <li>50 qualified leads/week (SSC/HSC verified).</li>
              <li>30 JLPT class enrollments/month.</li>
              <li>15 SSW visa files submitted quarterly.</li>
            </ul>
          </div>
          <div className="action-card">
            <h3>Support Channels</h3>
            <ul>
              <li>📞 Hotline: +880-1XXX-XXXXXX</li>
              <li>💬 Messenger & WhatsApp automation synced to CRM.</li>
              <li>🎓 Weekly webinar: “Japan Job & Study Fast Track”.</li>
            </ul>
          </div>
        </div>
        <div className="cta-row">
          <a className="cta primary" href="mailto:hello@standex.jp">Book Strategy Call</a>
          <a className="cta secondary" href="https://cal.com" target="_blank" rel="noreferrer">
            Schedule Webinar
          </a>
        </div>
      </section>
    </main>
  );
}
