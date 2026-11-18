import type { FaqItem } from '../components/Faq.astro';

// ---------------------------------------------------------------------------
// Shared answers (written by Dr. Tammy for the original site)
// ---------------------------------------------------------------------------
export const isThisTherapy: FaqItem = {
  q: 'Is this therapy?',
  a: [
    "No. Coaching and therapy are different. Therapy is typically focused on diagnosing and treating mental health conditions and is conducted by a licensed mental health professional. Coaching, including trauma transformation coaching, is focused on helping you identify what's holding you back, addressing it at the root, and moving forward with clarity and freedom. If you need a licensed therapist, I will always tell you so. But for many people, what they need is exactly what coaching provides: a safe, Spirit-led space to get real, go deep, and experience genuine transformation.",
  ],
};

export const mustBeChristian: FaqItem = {
  q: 'Do I have to be a Christian to work with you?',
  a: [
    "My work is deeply rooted in Biblical truth and the belief that Jesus is the healer of the brokenhearted. That said, I meet people where they are. If you are open to exploring faith as part of your healing journey, there is a place for you here. If you have questions, doubts, or are simply curious, that's okay too. What matters most is that you are ready to get honest about what's happening inside.",
  ],
};

export const sessionLooksLike: FaqItem = {
  q: 'What does a session actually look like?',
  a: [
    'Every session is different because every person is different. Generally, we begin by checking in on where you are, then we go to work: identifying patterns, beliefs, memories, or wounds that are keeping you stuck. I use a combination of Trauma Transformation Coaching™, NLP, timeline work, inner healing, and Spirit-led tools tailored to what you need in that moment. Sessions are 50 minutes and can happen in person or virtually on a secure Zoom link. They are always confidential, always safe, and always focused on moving you toward freedom.',
  ],
};

export const howLong: FaqItem = {
  q: 'How long does the process take?',
  a: [
    "Healing is not a program you graduate from. Some people experience profound breakthroughs in a very short time. Others need more sustained support as they work through deeper layers. What I can tell you is this: we don't rush, and we don't stop until something real has shifted. The discovery call is a great opportunity to talk through what a realistic timeline might look like for your specific situation.",
  ],
};

export const counselingAndPrayer: FaqItem = {
  q: "I've done counseling and prayer for years. Why would this be different?",
  a: [
    "That's one of the most honest questions I get, and I love it. Here's what I've found: many people have done tremendous amounts of good work and still feel stuck because the root has not been addressed. We can manage symptoms, build better habits, and even experience genuine moments of relief, and still have something unresolved underneath. My work is specifically designed to go to that root. Not to replace what you've already done, but to get to the place that hasn't yet been healed.",
  ],
};

export const confidentiality: FaqItem = {
  id: 'faq-confidentiality',
  q: 'Is what I share kept confidential?',
  a: [
    "Absolutely. Everything you share with me is held in complete confidence, including conversations, disclosures, and personal history. This is a safe place, not just as a professional commitment, but as a personal one. You will never have to wonder whether what you've shared is going further than this space. That safety is foundational to the work we do together.",
    'Confidentiality will be maintained except in the following limited circumstances: you provide written authorization for us to share specific information; disclosure is required by applicable law; or certain topics may be shared anonymously and hypothetically with other coaching professionals for training, consultation, or research purposes. In that case, no identifying information will ever be disclosed.',
    'One important distinction: coaching through One Heart One Hope Coaching is not therapy, counseling, psychotherapy, psychoanalysis, mental health treatment, or substance abuse treatment, and does not involve the diagnosis or treatment of mental disorders as defined by the American Psychiatric Association. Dr. Tammy Young does not function as a licensed mental health professional. If you require mental health support, we will always encourage you to seek appropriate professional care.',
  ],
};

export const leaderOrCrisis: FaqItem = {
  q: "I'm a leader. Is this really for me, or is it more for people in personal crisis?",
  a: [
    "It's for both, and often the line between the two is thinner than we'd like to admit. Many of the leaders I work with came to me because something in their leadership felt off: exhaustion, reactivity, patterns they couldn't break, a sense that they were leading from a deficit rather than a place of wholeness. What we discovered together is that leadership challenges often have a personal root. Lead Unbound is specifically designed for leaders who are ready to lead from a healthier, freer place and who understand that the work begins on the inside.",
  ],
};

export const howReady: FaqItem = {
  q: "How do I know if I'm ready?",
  a: [
    "If you're asking that question, you're probably closer to ready than you think. Readiness doesn't mean having it all figured out. It means being willing: willing to be honest, willing to go to the uncomfortable places, and willing to trust that God can meet you there. You don't have to have the words. You don't have to have a plan. You just have to be willing to begin.",
  ],
};

// Placeholder questions shared by several services
export const costAndPackages: FaqItem = {
  q: 'What does it cost?',
  a: [
    "We'll talk about pricing on your complimentary discovery call, once we know what kind of coaching fits you. Individual coaching starts at $250 per session. Team and group engagements are priced as packages.",
    "A sliding scale based on household income is often available. It works on the honor system: you will never be asked to prove your finances.",
  ],
};

// ---------------------------------------------------------------------------
// FAQ sets per page
// Each question appears on ONE page only. Shared questions (therapy, faith,
// sessions, confidentiality, cost) live on the general FAQ; service pages link to it.
// ---------------------------------------------------------------------------
export const generalFaqs: FaqItem[] = [
  isThisTherapy, mustBeChristian, sessionLooksLike, confidentiality, costAndPackages,
];

export const restoreWithinFaqs: FaqItem[] = [
  counselingAndPrayer, howLong, howReady,
];

export const leadUnboundFaqs: FaqItem[] = [
  leaderOrCrisis,
  { q: 'Do you work with ministry teams or whole organizations?', a: ['Yes. Lead Unbound is for leaders in any kind of organization. That includes ministry teams and staff, church board members, altar and prayer teams, connect teams, and high-level volunteers who support an organization or ministry.'] },
  { q: 'What does a typical Lead Unbound engagement look like?', a: ['It depends on the setting. For groups, Lead Unbound can be a one-day workshop or a weekend retreat with three or four sessions. For individual leaders, it is usually six sessions, and you can add more as needed.'] },
];

export const relationshipFaqs: FaqItem[] = [
  { q: 'Do we both need to take part?', a: [
    "No. Usually the person who reaches out is the one who wants change, and that's a good place to start. Often, as one partner begins to grow, the other notices and starts asking questions.",
    "Sometimes Dr. Tammy will invite your partner to join the sessions. If they aren't ready, we'll work with that when it comes.",
  ] },
  { q: 'Is this marriage counseling?', a: [
    "No. A licensed counselor works as the expert, telling a couple what the problems are and how to fix them. A coach partners with you to find the answers that are already inside you. Careful listening helps you get to what is keeping you stuck, often faster than you'd expect.",
    "If something comes up that is outside what a coach should handle, such as a mental health or medical issue, Dr. Tammy will refer you to the right professional.",
  ] },
  { q: 'Do you work with engaged or dating couples?', a: ["Yes. Relationship coaching is for married, engaged, and dating couples, and for individuals working through challenges in any relationship."] },
  { q: 'What if we are in crisis?', a: [
    "If you are ever in physical danger, call 911 or contact the police right away. Your safety comes first.",
    "Infidelity and separation are deeply painful, and they are a kind of trauma. If no one is in physical danger, trauma transformation coaching can be a good fit, because healing that trauma matters for your whole health.",
  ] },
];

export const fosterAdoptiveFaqs: FaqItem[] = [
  { q: 'Do you work with children directly, or with parents?', a: ['Whether sessions are with parents, children, or both, and what ages she works with.'], placeholder: true },
  { q: 'Is this therapy for my child?', a: ["How this coaching differs from therapy for children in foster care or adopted children, and when she'd recommend a licensed child therapist alongside it."], placeholder: true },
  { q: 'Do both parents need to be involved?', a: ['Expectations for parent involvement, single parents, and extended family.'], placeholder: true },
  { q: 'How is confidentiality handled with minors?', a: ["What parents are told about a child's sessions, and how consent works. For children in foster care, who gives consent (foster parent, agency, or caseworker)."], placeholder: true },
  { q: 'Do you work with kinship caregivers or guardians too?', a: ['Whether kinship, relative, or guardianship families are included.'], placeholder: true },
];

export const speakingFaqs: FaqItem[] = [
  { q: 'Do you travel for events?', a: ['Travel range, whether she speaks internationally, and how travel costs are handled.'], placeholder: true },
  { q: 'Can you speak virtually?', a: ['Whether she offers virtual keynotes, workshops, or trainings.'], placeholder: true },
  { q: 'What are your speaking fees?', a: ['Fee range or "contact for a quote", plus any options for churches or nonprofits.'], placeholder: true },
  { q: 'How far in advance should we book?', a: ['Typical lead time.'], placeholder: true },
  { q: 'Can you tailor a message for our audience?', a: ['How she customizes talks, and what she needs to know about the audience.'], placeholder: true },
];
