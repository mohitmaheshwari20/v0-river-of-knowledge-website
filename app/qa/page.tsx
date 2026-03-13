import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessageCircle, Play, Clock } from "lucide-react"

const episodes = [
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

export default function QAPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Q&A Series
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Recorded sessions addressing sincere questions from seekers. 
              Questions arise naturally through study — here they are met with clarity.
            </p>
          </div>
          
          <div className="space-y-6">
            {episodes.map((episode) => (
              <div key={episode.id} className="p-6 border border-border bg-card group hover:border-primary/30 transition-colors cursor-pointer">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Play className="h-5 w-5 text-primary" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-muted-foreground">Episode {episode.number}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{episode.date}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {episode.duration}
                      </span>
                    </div>
                    
                    <h2 className="font-serif text-xl text-foreground mb-4">
                      {episode.title}
                    </h2>
                    
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                        <MessageCircle className="h-3 w-3" />
                        Questions Addressed
                      </p>
                      <ul className="space-y-2">
                        {episode.questions.map((question, i) => (
                          <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                            <span className="text-primary mt-1">·</span>
                            {question}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Submit Question */}
          <div className="mt-16 p-8 bg-secondary/50 border border-border text-center">
            <h3 className="font-serif text-lg text-foreground mb-3">Have a Question?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Questions arising from sincere study are welcome. They may be addressed 
              in upcoming Q&A sessions or during live classes.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
