/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH
 *  Every word, date and link on the invitation lives here.
 *  Anything marked  ⚠ CONFIRM  is a placeholder — replace it and the whole
 *  page updates. Nothing else needs to be touched.
 *
 *  Copy register: numerals for facts you act on (times, dates, berth,
 *  phone), words for the lyrical lines. Never both in the same breath.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const invitation = {
  meta: {
    title: "Teresa Calitis — 49, A Night on the Gulf",
    description:
      "An invitation to Teresa Calitis' 49th birthday, aboard a yacht cruising from Dubai Marina — Saturday 5 September 2026, meet at 17:30.",
    themeColor: "#FBF8F3",
  },

  celebrant: {
    first: "Teresa",
    last: "Calitis",
    full: "Teresa Calitis",
    monogram: "TC",
  },

  hero: {
    folioLeft: "Dubai · The Invitation",
    folioRight: "No. XLIX",
    kicker: "You are cordially invited aboard",
    meta: ["Her 49th Birthday", "Saturday 5 September 2026", "Dubai Marina · The Palm · Burj Al Arab"],
    scrollLabel: "The particulars",
    imageAlt: "", // decorative — the mood is carried by the text
  },

  // Vertical rail on the left edge (desktop only, decorative)
  folioRail: "Dubai · MMXXVI",

  // Copy shown on the gatefold overture (never hardcoded in the component)
  envelope: {
    eyebrow: "You are cordially invited aboard",
    addressee: "To our cherished guest",
    lockup: "Birthday Invitation",
    occasion: "Her 49th Birthday · A Night on the Gulf",
    date: "Saturday 5 September 2026 · Dubai",
    action: "Tap to open",
    continueAction: "Tap to enter",
  },

  details: {
    index: "I",
    eyebrow: "The Particulars",
    titleTop: "One night,",
    titleEm: "one horizon",
    intro:
      "We meet at Dubai Marina Dock, board with time to spare, then cruise past the Palm toward the Burj Al Arab — dinner, swimming, and the city lights all in one evening.",
    entries: [
      {
        term: "The Date",
        value: "Saturday 5 September 2026",
        note: "A full evening on the water, from golden hour until the city lights rise.",
      },
      {
        term: "Meeting Time",
        value: "17:30",
        note: "Docking and loading take time — please be early. The yacht sails on time and we cannot stop it if you are not there.",
      },
      {
        term: "Location",
        value: "Dubai Marina Dock",
        note: "Al Sufouh, Dubai · Arrive at the marina gate with time to board.",
      },
      {
        term: "Attire",
        value: "All White",
        note: "Resort formal, in the old manner. Soft soles for the deck — heels stay ashore (bring a swimsuit if you'd like to swim).",
      },
    ],
    figureAlt:
      "Polished brass cleat and coiled line on the teak deck of a yacht, the Dubai skyline burning gold behind it.",
    figureCaption: "Dubai Marina, 17:45",

    order: {
      title: "Order of the Evening",
      lines: [
        { time: "17:30", event: "Meet at Dubai Marina Dock" },
        { time: "18:00", event: "Sightseeing from Dubai Marina to The Palm — swim if you wish" },
        { time: "19:00", event: "Dinner while cruising toward the Burj Al Arab" },
        { time: "20:00", event: "Return to Dubai Marina Dock" },
      ],
    },

    arrival: {
      title: "Arrival & Parking",
      body: "Enter at Dubai Marina Dock off Al Sufouh Road. Please arrive no later than 17:15 so boarding can finish before we cast off.", // ⚠ CONFIRM
    },
  },

  quote: {
    text: "49 years, and the tide has never once run against her.",
    attribution: "The hosts",
  },

  countdown: {
    eyebrow: "The Waiting",
    titleTop: "We meet at the dock in",
    // Meeting time, 17:30 Gulf Standard Time (UTC+4)
    target: "2026-09-05T17:30:00+04:00",
    note: "Counting down to meeting at Dubai Marina Dock — Saturday 5 September 2026, 17:30 Dubai time.",
    units: [
      { key: "days", label: "Days" },
      { key: "hours", label: "Hours" },
      { key: "minutes", label: "Minutes" },
      { key: "seconds", label: "Seconds" },
    ],
    live: "Tonight — the gangway is down",
    past: "She sailed. Thank you for being aboard.",
  },

  rsvp: {
    index: "II",
    eyebrow: "Répondez s’il vous plaît",
    titleTop: "Kindly reply by",
    titleEm: "27 August 2026",
    body: "There are 25 places aboard and they are held strictly by name. Confirm for yourself and one guest so the manifest may close in good time.",
    primary: {
      label: "Accept with pleasure",
      href: "https://wa.me/971565703723?text=Hello%2C%20I%20am%20delighted%20to%20accept%20the%20invitation%20to%20Teresa%20Calitis%E2%80%99%2049th%20birthday%20celebration%20on%20Saturday%2C%205%20September%202026.%20I%20will%20be%20there%20at%20Dubai%20Marina%20Dock%20by%2017%3A30.%20Thank%20you%20for%20having%20me.",
    },
    secondary: {
      label: "Send regrets",
      href: "https://wa.me/971565703723?text=Hello%2C%20with%20regret%20I%20am%20unable%20to%20attend%20Teresa%20Calitis%E2%80%99%2049th%20birthday%20celebration%20on%20Saturday%2C%205%20September%202026.%20Thank%20you%20for%20thinking%20of%20me.",
    },
    contacts: [
      { term: "By WhatsApp", value: "+971 56 570 3723", href: "https://wa.me/971565703723" },
      { term: "By telephone", value: "+971 56 570 3723", href: "tel:+971565703723" },
    ],
    note: "Be at Dubai Marina Dock no later than 17:15 — the gangway comes up at 17:45.",
  },

  footer: {
    lines: ["In honour of Teresa Calitis", "Saturday 5 September 2026", "Dubai Marina · The Palm · Burj Al Arab"],
    closing: "All white · By invitation only",
  },
};

export default invitation;
