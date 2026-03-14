// lib/vakyavrtti.ts
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for the Vākyavṛtti module.
// Every lesson page, nav item, breadcrumb, and next-lesson card reads from here.
//
// HOW TO ADD OR UPDATE CONTENT:
//   - verses: add the Sanskrit/English/Hindi for each verse in the lecture
//   - pdfUrl: once PDFs are ready, add the path e.g. "/pdfs/vakyavrtti-lecture-1.pdf"
//   - reflectionQuestions: add 2–3 questions per lecture when ready
//   - Everything else (routing, nav, next-lesson card) is automatic
// ─────────────────────────────────────────────────────────────────────────────

export interface Verse {
  number: number
  sanskrit: string
  english: string
  hindi: string
}

export interface ReflectionQuestion {
  id: number
  question: string
}

export interface Lecture {
  id: number
  slug: string
  title: string                     // key topic from the YouTube title
  youtubeTitle: string              // full original YouTube title
  youtubeId: string                 // YouTube video ID
  verses: Verse[]                   // populated when verse content is ready
  pdfUrl: string | null             // path in /public — null until PDF is added
  pdfLabel: string | null
  reflectionQuestions: ReflectionQuestion[]  // populated when content is ready
}

// ─── Module metadata ──────────────────────────────────────────────────────────

export const moduleInfo = {
  slug: "vakyavrtti",
  title: "Vākyavṛtti",
  author: "Śaṅkarācārya",
  subtitle: "Commentary on the Mahāvākyas",
  description:
    "A foundational text by Śaṅkarācārya exploring the Mahāvākya — Tat Tvam Asi — and preparing the sincere seeker for self-inquiry.",
  teacher: "Swami Abhishek Chaitanya Giri",
}

// ─── Lectures ─────────────────────────────────────────────────────────────────

export const lectures: Lecture[] = [
  {
    id: 1,
    slug: "lesson-1",
    title: "Tat Tvam Asi",
    youtubeTitle: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 1",
    youtubeId: "eXNHjHolyQE",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 1 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 2,
    slug: "lesson-2",
    title: "Parokṣa and Aparokṣa Jñāna",
    youtubeTitle: "Parokṡa – Aparokṡa Jnana, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 2",
    youtubeId: "l_UqCLrFIhM",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 2 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 3,
    slug: "lesson-3",
    title: "The Witness is the Self",
    youtubeTitle: "The 'Witness', is the Self, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 3",
    youtubeId: "RQvxJro-OKU",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 3 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 4,
    slug: "lesson-4",
    title: "सन्निधिमात्रेण सोऽहमित्यवधारय",
    youtubeTitle: "सन्निधिमात्रेण सोऽहमित्यवधारय, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 4",
    youtubeId: "rpFiPYo3l6Q",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 4 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 5,
    slug: "lesson-5",
    title: "Avikāritayā Ātmanaḥ",
    youtubeTitle: "Avikāritayā-Ᾱtmanaḥ, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 5",
    youtubeId: "wd-BBaCYtNw",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 5 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 6,
    slug: "lesson-6",
    title: "Ādityavarṇaṁ tamasaḥ parastāt",
    youtubeTitle: "Ādityavarṇaṁ tamasaḥ parastāt, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 6",
    youtubeId: "-bH0ZY8x7Kg",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 6 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 7,
    slug: "lesson-7",
    title: "Nirastātiśayānandaḥ",
    youtubeTitle: "Nirastātiśayānandaḥ, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 7",
    youtubeId: "sVtz6DwlN9M",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 7 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 8,
    slug: "lesson-8",
    title: "Parapremāspadatayā",
    youtubeTitle: "Parapremāspadatayā, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 8",
    youtubeId: "OV44Z05NyZ0",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 8 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 9,
    slug: "lesson-9",
    title: "So'ham ityavadhāraya",
    youtubeTitle: "So'hamityavadhāraya, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 9",
    youtubeId: "LdM12aJpgKY",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 9 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 10,
    slug: "lesson-10",
    title: "साक्षित्वम्",
    youtubeTitle: "साक्षित्वम्, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 10",
    youtubeId: "KmMMicUs8Ds",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 10 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 11,
    slug: "lesson-11",
    title: "Tvamartham evaṁ niścitya",
    youtubeTitle: "Tvamarthamevaṁ niścitya, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 11",
    youtubeId: "ZM7QNym8C9o",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 11 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 12,
    slug: "lesson-12",
    title: "Tadarthaṁ cintayetpunaḥ",
    youtubeTitle: "Tadarthaṁ cintayetpunaḥ, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 12",
    youtubeId: "zthLhpUqVHc",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 12 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 13,
    slug: "lesson-13",
    title: "निरस्ताशेषसंसारदोषः",
    youtubeTitle: "निरस्ताशेषसंसारदोषः, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 13",
    youtubeId: "i7WqDyDxA-w",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 13 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 14,
    slug: "lesson-14",
    title: "Tat Tvam Asi",
    youtubeTitle: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 14",
    youtubeId: "yuK110D2BRk",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 14 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 15,
    slug: "lesson-15",
    title: "Tat Tvam Asi",
    youtubeTitle: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 15",
    youtubeId: "_NpbcQBPnEo",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 15 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 16,
    slug: "lesson-16",
    title: "Tat Tvam Asi",
    youtubeTitle: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 16",
    youtubeId: "Q4c177RkP1M",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 16 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 17,
    slug: "lesson-17",
    title: "Tat Tvam Asi",
    youtubeTitle: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 17",
    youtubeId: "Ja4KemFrs-k",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 17 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 18,
    slug: "lesson-18",
    title: "Tat Tvam Asi",
    youtubeTitle: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 18",
    youtubeId: "HsKO-GmnpMo",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 18 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 19,
    slug: "lesson-19",
    title: "Tat Tvam Asi",
    youtubeTitle: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 19",
    youtubeId: "kZ6NMhtUcRk",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 19 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 20,
    slug: "lesson-20",
    title: "Tat Tvam Asi",
    youtubeTitle: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 20",
    youtubeId: "YqoRwSQWEu8",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 20 — Thought Flow",
    reflectionQuestions: [],
  },
  {
    id: 21,
    slug: "lesson-21",
    title: "Tat Tvam Asi",
    youtubeTitle: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 21",
    youtubeId: "LltM599W50Y",
    verses: [],
    pdfUrl: null,
    pdfLabel: "Lecture 21 — Thought Flow",
    reflectionQuestions: [],
  },
]

// ─── Helper functions ─────────────────────────────────────────────────────────

/** Returns a lecture by its slug */
export function getLectureBySlug(slug: string): Lecture | undefined {
  return lectures.find((l) => l.slug === slug)
}

/** Returns the next lecture, or null if this is the last */
export function getNextLecture(currentId: number): Lecture | null {
  return lectures.find((l) => l.id === currentId + 1) ?? null
}

/** Returns the previous lecture, or null if this is the first */
export function getPrevLecture(currentId: number): Lecture | null {
  return lectures.find((l) => l.id === currentId - 1) ?? null
}

/** Total number of lectures — for "Lecture X of Y" display */
export const totalLectures = lectures.length
