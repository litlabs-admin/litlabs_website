import type { BlogPost } from "./types";

export const MOCK_POSTS: BlogPost[] = [
  {
    slug: "what-actually-makes-an-ai-employee-work",
    title: "What Actually Makes an AI Employee Work",
    excerpt:
      "Most AI pilots stall for the same reason: they were scoped to a tool, not a workflow. Here's what separates agents that stick from demos that don't.",
    category: "AI Systems",
    date: "2026-08-24",
    readingMinutes: 7,
    featured: true,
    isNew: true,
    tags: [
      "ai agents",
      "automation",
      "guardrails",
      "workflow design",
      "human in the loop",
    ],
    cover: {
      src: "/images/blog/ai-employee-cover.jpg",
      alt: "A hand reaching toward a glowing AI icon in the dark",
      width: 1199,
      height: 1533,
    },
    author: {
      name: "Vandan Mandloi",
      role: "Founder | Lit Labs",
      avatar: "/images/people/p12.jpg",
    },
    body: [
      {
        type: "paragraph",
        text: "Every founder we talk to has already tried an AI pilot. Most of them didn't stick. Not because the model wasn't good enough (the models have been good enough for a while), but because the pilot was scoped to a tool instead of a workflow. A chatbot bolted onto a website. A summarizer dropped into an inbox. Something that demos well and then quietly stops getting used.",
      },
      {
        type: "paragraph",
        text: "The systems that actually stick look different. They're built around a specific, repeatable workflow: qualifying inbound leads, chasing down missing information, following up on a stalled deal. They're judged on whether that workflow gets done, not on how impressive the underlying model is.",
      },
      {
        type: "heading",
        text: "1. Start with the workflow, not the model",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The question isn't \"where can we use AI?\" It's \"which of our workflows are high-volume, well-defined, and currently bottlenecked on a human being available at the right moment?\" Speed-to-lead is the classic example: a prospect fills out a form, and every minute that passes before someone responds measurably lowers the odds of a booked call. That's not a model problem. It's a staffing and availability problem, and it's exactly the kind of problem an agent is built to remove.",
      },
      {
        type: "callout",
        variant: "accent",
        title: "The scoping test",
        text: "If you can't describe the workflow in one sentence (trigger, steps, and success condition), it isn't ready to hand to an agent yet. Fix the definition before you touch the build.",
      },
      {
        type: "heading",
        text: "2. Build guardrails before you build capability",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The systems that earn trust aren't the ones that can do the most. They're the ones that fail safely. That means defining, up front, what the agent is never allowed to do without a human sign-off: issuing refunds above a threshold, making legally binding claims, or closing out a support ticket that mentions churn risk. Guardrails aren't a constraint on capability. They're what makes it safe to give the agent more responsibility over time.",
      },
      {
        type: "list",
        items: [
          "Define hard stops before deployment, not after an incident",
          "Log every decision the agent makes so it's auditable after the fact",
          "Route ambiguous cases to a human queue instead of guessing",
          "Review a sample of transcripts weekly for the first month",
        ],
      },
      {
        type: "heading",
        text: "3. Keep a human in the loop, on purpose",
        level: 2,
      },
      {
        type: "paragraph",
        text: "\"Fully autonomous\" is the wrong goal for almost every business we work with. The right goal is knowing exactly where the human sits: reviewing exceptions, handling the top 5% of complex cases, and spot-checking quality. The agent handles volume; the human handles judgment. That division of labor is what makes the system trustworthy enough to actually scale.",
      },
      {
        type: "quote",
        text: "We went from chasing leads to choosing them. The system books qualified demos while we sleep, and it paid for itself in the first month.",
        attribution: "Marcus Reed, Founder & CEO, Northwind Labs",
      },
      {
        type: "heading",
        text: "4. Measure the workflow, not the model",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Response quality is a leading indicator. The metrics that matter are the ones the business already tracks: reply rate, time-to-first-touch, booked-meeting rate, deflection rate. If those numbers move, the system is working, regardless of how the underlying model performs on any benchmark.",
      },
      {
        type: "stats",
        items: [
          { value: "3x", label: "Average pipeline growth across Lit Labs clients" },
          { value: "42%", label: "Average reply rate on AI-driven outreach" },
          { value: "20+ hrs", label: "Saved per week, per team, on manual work" },
        ],
      },
      {
        type: "heading",
        text: "5. Ship narrow, then expand",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The fastest path to a system that actually works is the least ambitious one: one workflow, one channel, a clear success metric, and a short feedback loop. Once that's proven, the same agent architecture extends to the next workflow, and the next, without starting from zero. That's the difference between an AI pilot and an AI employee: the pilot proves a concept, the employee keeps showing up.",
      },
    ],
    faq: [
      {
        q: "How is this different from a chatbot?",
        a: "A chatbot answers questions when someone happens to ask. An AI employee owns a workflow end to end: it initiates contact, follows a defined process, escalates when it hits a guardrail, and is measured against the same outcomes a human in that role would be measured against.",
      },
      {
        q: "What if the agent gets something wrong?",
        a: "Every deployment starts with guardrails that route ambiguous or high-stakes cases to a human queue, and every decision is logged so it's auditable. The goal isn't zero mistakes on day one. It's mistakes that are caught, visible, and cheap to fix.",
      },
      {
        q: "How long does it take to see results?",
        a: "Most systems go from first call to fully deployed in a matter of weeks. Because the scope starts narrow (one workflow, one channel), the feedback loop is short enough to see whether it's working within the first two weeks.",
      },
      {
        q: "Do we need to change our existing tools?",
        a: "No. The agent is built to sit inside the stack you already use (your CRM, your calendar, your support desk) rather than requiring a migration to a new platform.",
      },
    ],
    seo: {
      description:
        "Most AI pilots stall because they're scoped to a tool, not a workflow. Here's the framework that separates agents that stick from demos that don't.",
    },
  },
  {
    slug: "automating-enrolment-and-student-follow-up",
    title: "Automating Enrolment and Student Follow-Up",
    excerpt:
      "Tutoring and course businesses lose more revenue to slow follow-up than to bad product. Here's where the leaks happen, and what to automate first.",
    category: "Automation",
    date: "2026-08-10",
    readingMinutes: 6,
    tags: [
      "edtech",
      "enrolment",
      "student follow-up",
      "speed to lead",
      "scheduling",
    ],
    cover: {
      src: "/images/blog/edtech-automation-cover.jpg",
      alt: "A student on a video call, studying with notes and a laptop",
      width: 5120,
      height: 3414,
    },
    author: {
      name: "Vandan Mandloi",
      role: "Founder | Lit Labs",
      avatar: "/images/people/p12.jpg",
    },
    body: [
      {
        type: "paragraph",
        text: "Tutoring companies, course providers, and coaching businesses tend to have the same conversation with us: the product is good, the reviews are good, and enrolment is still inconsistent. The cause is almost never the offer. It's what happens, or doesn't happen, in the hours after someone first shows interest.",
      },
      {
        type: "heading",
        text: "Where the revenue actually leaks",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Three moments account for most of the lost enrolments we see, and none of them are about the quality of instruction.",
      },
      {
        type: "list",
        items: [
          "Speed-to-lead: a parent or student inquires, and nobody responds for hours, by which point they've booked a trial with a competitor",
          "Scheduling friction: booking a trial session takes five email round-trips instead of one link",
          "Silent drop-off: a student finishes a trial or a free module and never hears from anyone again",
        ],
      },
      {
        type: "callout",
        variant: "note",
        title: "The pattern",
        text: "None of these are content problems. They're all availability problems, and availability is exactly what an agent pipeline is built to solve.",
      },
      {
        type: "heading",
        text: "What gets automated",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The first-touch response, the scheduling handoff, and the follow-up sequence are the highest-leverage places to start, because they're high-volume, well-defined, and currently bottlenecked on someone being at their desk at the right moment.",
      },
      {
        type: "image",
        src: "/images/blog/edtech-automation-cover.jpg",
        alt: "A student reviewing notes during an online tutoring session",
        width: 5120,
        height: 3414,
        caption:
          "First-touch response time is the single biggest lever in education enrolment.",
      },
      {
        type: "heading",
        text: "An AI agent can:",
        level: 3,
      },
      {
        type: "list",
        items: [
          "Reply to every inbound inquiry within seconds, on the channel the family used to reach out",
          "Ask qualifying questions (subject, level, availability) and offer trial slots instantly",
          "Send reminders before a scheduled trial so no-show rates drop",
          "Follow up after a trial or free module with a specific next step, not a generic \"let us know\"",
          "Flag any conversation that needs a human (pricing objections, special needs, complaints) instead of guessing",
        ],
      },
      {
        type: "heading",
        text: "What stays human",
        level: 2,
      },
      {
        type: "paragraph",
        text: "The actual teaching, obviously, and anything that requires judgment about a specific student's needs. The agent's job is to make sure no interested family falls through the cracks before a human ever needs to get involved, and to hand off cleanly, with full context, the moment a conversation needs one.",
      },
      {
        type: "quote",
        text: "Setup was shockingly fast. Two weeks in, we were generating more qualified pipeline than the entire previous quarter.",
        attribution: "Priya Nair, Head of Growth, Meridian",
      },
      {
        type: "heading",
        text: "Where to start",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Pick the single leakiest moment in your funnel (for most tutoring and course businesses, that's the gap between inquiry and first response) and automate that one step before touching anything else. Prove it moves booked trials or enrolments, then expand to scheduling and follow-up.",
      },
    ],
    faq: [
      {
        q: "Will this feel impersonal to parents and students?",
        a: "Done well, it's the opposite: families get an instant, relevant response instead of waiting hours for a form-letter reply, and the agent is trained on your program's tone and details rather than sounding generic.",
      },
      {
        q: "Does this replace our admissions team?",
        a: "No. It handles the repetitive first-touch and scheduling work so your team spends its time on the conversations that actually need a person: pricing questions, placement decisions, and follow-through with enrolled families.",
      },
      {
        q: "What if a question is outside what the agent should answer?",
        a: "Those conversations are routed to a human queue automatically. The agent is scoped narrowly on purpose, so it knows what it doesn't know.",
      },
    ],
    seo: {
      description:
        "Tutoring and course businesses lose more enrolments to slow follow-up than to bad product. Here's what to automate first, and what to keep human.",
    },
  },
];
