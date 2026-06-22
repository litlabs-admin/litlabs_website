// Central content/data for the LitLabs site.
// Design/template is the Machina build; content is sourced from litlabs.io.

// Booking link (LitLabs' Cal.com) — used by every primary "Book a call" CTA.
export const CAL_LINK =
  "https://cal.com/vandan-mandloi/30min?user=vandan-mandloi";
export const CONTACT_HREF = "/contact";
export const EMAIL = "hello@litlabs.agency";

export const NAV_LINKS = [
  { label: "Solutions", href: "#services" },
  { label: "Process", href: "#our-process" },
  { label: "Results", href: "#case-study" },
  { label: "FAQ", href: "#faq" },
] as const;

// ---- Hero ----
export const HERO = {
  eyebrow: "Full-cycle AI implementation agency",
  avatars: [
    "/images/MNjRCS5Mik1hOHefzXhvi4WAU.png",
    "/images/ppRAyrufayFZIKYJMrXLdxTEII.png",
    "/images/zkocU3IoD2SqUHHd0mPfjeP6d4.png",
  ],
  titleLine1: "We'll build your",
  titleAccent: "next employee.",
  description:
    "Your next top performer isn't another hire. We build systems that work across sales, marketing, and operations to help businesses scale faster, operate smarter, and achieve more with less effort.",
  primaryCta: { label: "Schedule a demo", href: CAL_LINK },
  secondaryCta: { label: "See How It Works", href: "#our-process" },
  productShot: "/images/fOIymGAL6P5ufypyy7ijliIRgY.png",
};

// ---- Client logos ----
export const CLIENTS_LABEL = "Trusted by teams scaling with AI";
export const CLIENT_LOGOS = [
  "/images/clients/feather.png",
  "/images/clients/daylii.png",
  "/images/clients/roswell.png",
  "/images/clients/sutton-studios.png",
  "/images/clients/propxx.png",
  "/images/clients/venture.png",
  "/images/clients/chapeau_collective.png",
  "/images/clients/racam.png",
];

// ---- Solutions (Services accordion) ----
export type Industry = {
  name: string;
  description: string;
  stats: string[];
  image: string;
};

export const SERVICES_EYEBROW = "The Lit Labs system";
export const INDUSTRIES: Industry[] = [
  {
    name: "AI LeadGen Ecosystem",
    description:
      "An end-to-end, AI-driven lead generation engine that runs from smart market segmentation to automated multichannel outreach and follow-up.",
    stats: [
      "Smart segmentation & prospect scoring",
      "Automated multichannel outreach & follow-up",
      "A steady stream of qualified leads",
    ],
    image: "/images/7ExrANrvGkRWcp9uDLIIlPNT1Y.png",
  },
  {
    name: "AI Sales Representative",
    description:
      "A virtual sales agent that engages prospects in real time—answering questions, recommending products, handling objections, and booking meetings.",
    stats: [
      "Engages every prospect in real time, 24/7",
      "Answers questions & handles objections",
      "Books meetings straight to your calendar",
    ],
    image: "/images/wGrjrQtSC3wDjuxYF13MNa1fc.png",
  },
  {
    name: "Conversational AI Systems",
    description:
      "Custom voice and chat agents trained on your business that stay on-brand across every channel.",
    stats: [
      "Custom voice & chat on every channel",
      "Trained on your business & brand voice",
      "Consistent, on-brand conversations",
    ],
    image: "/images/sAqWHBkuECN9NnNrjGXoIQ9o92o.png",
  },
  {
    name: "AI Workflow Automation",
    description:
      "Orchestrated agent pipelines that connect your existing tools, eliminate manual handoffs, and execute multi-step processes end to end.",
    stats: [
      "Connects your existing tools end to end",
      "Eliminates manual handoffs",
      "Executes multi-step processes automatically",
    ],
    image: "/images/kQyJ4P03T8q5CU0SVzVCyIHhVg8.png",
  },
];

// ---- Case Studies (Results) ----
export type CaseStudy = {
  headline: string;
  stats: { value: string; label: string }[];
  quote: string;
  author: string;
  authorTitle: string;
  avatar: string;
  image: string;
  brandLogo: string;
};

export const CASE_STUDY_EYEBROW = "Case studies";
export const CASE_STUDIES: CaseStudy[] = [
  {
    headline: "From chasing leads to choosing them",
    stats: [
      { value: "3.2x", label: "Pipeline growth in the first quarter" },
      { value: "30 days", label: "To full payback on the build" },
    ],
    quote:
      "We went from chasing leads to choosing them. Lit Labs built a system that books qualified demos while we sleep, and it paid for itself in the first month.",
    author: "Marcus Reed",
    authorTitle: "Founder & CEO | Northwind Labs",
    avatar: "/images/people/p12.jpg",
    image: "/images/DElH23YvC7guPQEoE5EX08t8Qw.png",
    brandLogo: "/images/clients/feather.png",
  },
  {
    headline: "An AI sales rep that fills the calendar",
    stats: [
      { value: "42%", label: "Average reply rate across outbound" },
      { value: "2x", label: "More booked demos per rep" },
    ],
    quote:
      "The AI sales rep handles first-touch and objections better than half my team. Our calendar fills itself now.",
    author: "Elena Voss",
    authorTitle: "VP of Sales | Vantage",
    avatar: "/images/mXZ1qU00f9mlCP09rwyqg8Eepw.png",
    image: "/images/gt35u1HClutWpYo62HTEy4VMuI.png",
    brandLogo: "/images/clients/daylii.png",
  },
  {
    headline: "More pipeline in two weeks than the prior quarter",
    stats: [
      { value: "2 wks", label: "From kickoff to qualified pipeline" },
      { value: "4x", label: "More qualified pipeline vs. prior quarter" },
    ],
    quote:
      "Setup was shockingly fast. Two weeks in, we were generating more qualified pipeline than the entire previous quarter.",
    author: "Priya Nair",
    authorTitle: "Head of Growth | Meridian",
    avatar: "/images/Vn5hZw09rJXKwdlurXzc3NHXwzA.png",
    image: "/images/E0lHzsrd9eC1tNuDgkcX4q8ghNg.png",
    brandLogo: "/images/clients/roswell.png",
  },
];

// ---- Testimonials ----
// Distinct from the case-study and single-testimonial quotes (no repeats).
export const TESTIMONIALS_EYEBROW = "Wall of love";
export const TESTIMONIALS = [
  {
    quote:
      "Avatar content automation replaced an entire production workflow. We ship 10x the content at a fraction of the cost.",
    author: "James Okoro",
    title: "CMO | Cobalt",
    avatar: "/images/wubP9EELp5gar0YDftUV0fdcybY.png",
  },
  {
    quote:
      "Our SDRs stopped doing data entry and started closing. The agents handle the grind from first touch to booked call.",
    author: "Daniel Hoff",
    title: "Head of RevOps | Arcadia",
    avatar: "/images/mj7RFlaWltmOdnmD5tvUtcyQK4.png",
  },
  {
    quote:
      "It feels like we hired a full growth team overnight—without the overhead or the months of ramp time.",
    author: "Sofia Marchetti",
    title: "Founder | Lumen",
    avatar: "/images/MNjRCS5Mik1hOHefzXhvi4WAU.png",
  },
  {
    quote:
      "The avatars let us localize campaigns into six languages in a day. Output went up and cost went down.",
    author: "Aaron Webb",
    title: "VP Marketing | Tidal",
    avatar: "/images/ppRAyrufayFZIKYJMrXLdxTEII.png",
  },
  {
    quote:
      "Support deflection passed 60% in week three. My team finally spends its time on the cases that actually need a human.",
    author: "Nina Patel",
    title: "COO | Brightside",
    avatar: "/images/zkocU3IoD2SqUHHd0mPfjeP6d4.png",
  },
  {
    quote:
      "Every inbound lead now gets a reply in seconds. Speed-to-lead used to be our biggest leak—now it's a strength.",
    author: "Liam Carter",
    title: "Director of Sales | Northpeak",
    avatar: "/images/mXZ1qU00f9mlCP09rwyqg8Eepw.png",
  },
];

// ---- Single testimonial (full-bleed) ----
export const SINGLE_TESTIMONIAL = {
  bgImage: "/images/6UuyuqNeu7Bn6FikMMOsFdXVths.png",
  quote:
    "Lit Labs didn't just automate our outreach—they rebuilt how our entire revenue engine runs. It's the best hire we never made.",
  author: "Marcus Reed",
  title: "Founder & CEO | Northwind Labs",
  avatar: "/images/people/p12.jpg",
};

// ---- Impact / Results stats (animated counters) ----
// LitLabs displays animated placeholder metrics; these targets are best-effort.
export const IMPACT = {
  eyebrow: "Results",
  description:
    "Real systems, real outcomes. We measure every action and optimize relentlessly so the wins keep compounding long after launch.",
  stats: [
    {
      value: 3,
      prefix: "",
      suffix: "x",
      label: "Average pipeline growth across LitLabs clients",
    },
    {
      value: 42,
      prefix: "",
      suffix: "%",
      label: "Average reply rate on AI-driven outreach",
    },
    {
      value: 20,
      prefix: "",
      suffix: "+ hrs",
      label: "Saved per week, per team, on manual work",
    },
  ],
};

// ---- Our Process ----
export const PROCESS = {
  eyebrow: "Our Process",
  description:
    "From first call to fully deployed in weeks. We don't hand you another tool to manage—we embed AI into your existing stack and stay hands-on as it scales.",
  cta: { label: "Schedule a demo", href: CAL_LINK },
  steps: [
    {
      num: "01",
      title: "Discover",
      description:
        "We map your workflows and pinpoint the highest-leverage places AI can replace manual work—then show you the projected impact before we build anything.",
      graphicOuter: "/images/ERLH5C4pXwBlwh8VdqUou1JewVo.png",
      graphicInner: "/images/3nVMHN91Irtnnduo08fp2GRuaI.png",
    },
    {
      num: "02",
      title: "Design",
      description:
        "We architect the agent pipeline around your existing stack, define the guardrails, and align on exactly what gets built and how success is measured.",
      graphicOuter: "/images/bvoGoiFnHgFRJ8kyU6fRvSoUEt0.png",
      graphicInner: "/images/ITXsoRUqwmFLH8E9CkEbkvBvUk.png",
    },
    {
      num: "03",
      title: "Deploy",
      description:
        "We launch live agents into your tools, run them against real workflows, and tune until they perform reliably in production.",
      graphicOuter: "/images/fzKVGyusnSGzaq0ikQA7QfkH7k.png",
      graphicInner: "/images/MejvxRCxMdI3XodzZOBdMpC94.png",
    },
    {
      num: "04",
      title: "Scale",
      description:
        "We expand across teams and use-cases, monitor every action, and optimize relentlessly so the system keeps compounding results.",
      graphicOuter: "/images/0H0x13wike5lPJdQGLLsfFUiGAc.png",
      graphicInner: "/images/fTU54KHy5N6826kgtrcTOd1T0vE.png",
    },
  ],
};

// ---- Integration ----
export const INTEGRATION = {
  eyebrow: "Technology & Integrations",
  logoRows: [
    [
      "/images/logos/hubspot.svg",
      "/images/logos/notion.svg",
      "/images/logos/gmail.svg",
      "/images/logos/zapier.svg",
    ],
    [
      "/images/logos/stripe.svg",
      "/images/logos/intercom.svg",
      "/images/logos/airtable.svg",
      "/images/logos/linear.svg",
    ],
    [
      "/images/logos/hubspot.svg",
      "/images/logos/zapier.svg",
      "/images/logos/notion.svg",
      "/images/logos/stripe.svg",
    ],
  ],
  features: [
    {
      title: "Plugs into your stack",
      description:
        "No rip-and-replace—we embed AI into the tools you already use, with no migrations or disruption.",
    },
    {
      title: "Real-time insight",
      description:
        "Decisions backed by live data—no manual exports, no stale information, no delays.",
    },
    {
      title: "Workflow automation",
      description:
        "Operations that run themselves—agents execute multi-step processes end to end.",
    },
  ],
};

// ---- FAQ ----
// LitLabs lists these questions without published answers; answers below are
// drafted to match their positioning.
export const FAQ_EYEBROW = "Frequently asked questions";
export const FAQ_GROUPS = [
  {
    tab: "Getting Started",
    items: [
      {
        q: "What if it doesn't work for my business?",
        a: "Every build starts with a discovery phase where we validate the use-case and projected ROI before committing. If we don't see a clear path to impact, we'll tell you up front.",
      },
      {
        q: "How fast can we launch?",
        a: "Most systems go from first call to fully deployed in a matter of weeks—many clients see qualified pipeline within the first two weeks.",
      },
      {
        q: "Who owns the system once it's built?",
        a: "You do. Everything we build is yours—the workflows, the agents, and the data that runs through them.",
      },
    ],
  },
  {
    tab: "Integration & Data",
    items: [
      {
        q: "Do you integrate with our existing tools?",
        a: "Yes. We embed AI into the stack you already use—HubSpot, Notion, Gmail, Zapier, Stripe, Intercom and more—with no rip-and-replace.",
      },
      {
        q: "Is our data secure?",
        a: "Security is foundational. We use encrypted connections, role-based access, and keep your data private to your own systems.",
      },
    ],
  },
  {
    tab: "Support",
    items: [
      {
        q: "What kind of support do we get?",
        a: "Ongoing optimization and support are built in. We monitor every action, tune continuously, and stay hands-on as you scale.",
      },
    ],
  },
];

// ---- Before-footer CTA ----
export const BEFORE_FOOTER = {
  eyebrow: "book a call",
  title: "Ready to hire your next employee?",
  description:
    "Book a 30-minute call. We'll map your highest-leverage workflows, show you what we'd build, and the impact you can expect—before you commit to anything.",
  cta: { label: "Schedule a demo", href: CAL_LINK },
};

// ---- Footer ----
export const FOOTER = {
  socials: [
    {
      label: "X",
      href: "https://x.com/litlabs",
      icon: "/images/NryyUiaS6jaLIqsiCCjmQUMUJk.svg",
    },
  ],
  columns: [
    {
      title: "Company",
      links: [
        { label: "Solutions", href: "#services" },
        { label: "Process", href: "#our-process" },
        { label: "Results", href: "#case-study" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Terms of Service", href: "/legal/terms-of-service" },
        { label: "Data Processing", href: "/legal/data-processing" },
      ],
    },
  ],
  others: {
    title: "Contact",
    links: [
      { label: "Book a call", href: CAL_LINK },
      { label: "Contact", href: "/contact" },
      { label: EMAIL, href: `mailto:${EMAIL}` },
    ],
  },
  copyright: "© 2025 LitLabs. All rights reserved.",
};
