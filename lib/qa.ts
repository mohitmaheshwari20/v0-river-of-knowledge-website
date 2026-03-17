export interface Episode {
  id: number
  number: number
  title: string
  date: string
  duration: string
  questions: string[]
}

export const episodes: Episode[] = [
  {
    id: 1,
    number: 12,
    title: "On Effort and Grace",
    date: "March 2026",
    duration: "38 min",
    questions: [
      "What role does personal effort play if liberation is already the truth?",
      "How do we understand grace in the context of non-duality?",
      "Is there a point where study is no longer necessary?"
    ]
  },
  {
    id: 2,
    number: 11,
    title: "The Witness and the Witnessed",
    date: "February 2026",
    duration: "42 min",
    questions: [
      "How do I know I am the witness and not the thoughts?",
      "Does the witness have any qualities or is it completely empty?",
      "What is the relationship between the witness and deep sleep?"
    ]
  },
  {
    id: 3,
    number: 10,
    title: "Dealing with Doubt",
    date: "February 2026",
    duration: "35 min",
    questions: [
      "Doubt arises again and again even after understanding. What to do?",
      "Is certainty the same as knowledge?",
      "How to distinguish valid doubt from neurotic doubt?"
    ]
  },
  {
    id: 4,
    number: 9,
    title: "Action After Knowledge",
    date: "January 2026",
    duration: "44 min",
    questions: [
      "After self-knowledge, how should one relate to worldly responsibilities?",
      "Does the jñānī still have desires?",
      "What is the meaning of naiṣkarmya siddhi?"
    ]
  },
  {
    id: 5,
    number: 8,
    title: "The Nature of the Mind",
    date: "January 2026",
    duration: "40 min",
    questions: [
      "Is the mind an obstacle or a tool in Vedanta?",
      "How does one prepare the mind for knowledge?",
      "What is the difference between thinking and meditation?"
    ]
  },
  {
    id: 6,
    number: 7,
    title: "Understanding Māyā",
    date: "December 2025",
    duration: "48 min",
    questions: [
      "If the world is māyā, why does it appear so solid and real?",
      "Is māyā a power of Brahman or something separate?",
      "How do we understand suffering if all is Brahman?"
    ]
  },
  {
    id: 7,
    number: 6,
    title: "Self-Inquiry in Daily Life",
    date: "December 2025",
    duration: "36 min",
    questions: [
      "How to practice self-inquiry while engaged in work?",
      "Is formal sitting practice necessary?",
      "What is the role of devotion in jñāna mārga?"
    ]
  },
  {
    id: 8,
    number: 5,
    title: "The Teaching Tradition",
    date: "November 2025",
    duration: "32 min",
    questions: [
      "Why is a teacher necessary if the truth is already known?",
      "How to find a qualified teacher?",
      "What is the sampradāya and why does it matter?"
    ]
  }
]

export const totalEpisodes = episodes.length
