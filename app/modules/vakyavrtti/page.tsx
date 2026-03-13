import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight, Play } from "lucide-react"

const lessons = [
  {
    number: 1,
    title: "Introduction to Vākyavṛtti",
    duration: "45 min",
    topics: ["Context and purpose", "The role of mahāvākyas", "Prerequisites for study"]
  },
  {
    number: 2,
    title: "The Nature of Inquiry",
    duration: "52 min",
    topics: ["Who is qualified?", "The four-fold qualification", "Desire for liberation"]
  },
  {
    number: 3,
    title: "Tat Tvam Asi — The Statement",
    duration: "48 min",
    topics: ["The three words", "Direct and implied meanings", "Apparent contradiction"]
  },
  {
    number: 4,
    title: "Analysis of 'Tat'",
    duration: "55 min",
    topics: ["Brahman as cause", "Sarvajñatva — omniscience", "Beyond attributes"]
  },
  {
    number: 5,
    title: "Analysis of 'Tvam'",
    duration: "50 min",
    topics: ["The individual self", "The five sheaths", "Witness consciousness"]
  },
  {
    number: 6,
    title: "The Meaning of 'Asi'",
    duration: "47 min",
    topics: ["Identity and equation", "Removing superimposition", "Non-difference"]
  },
  {
    number: 7,
    title: "Jahad-Ajahad Lakṣaṇā",
    duration: "58 min",
    topics: ["Method of indication", "Partial retention", "Resolving contradiction"]
  },
  {
    number: 8,
    title: "Objections and Responses",
    duration: "52 min",
    topics: ["Pūrvapakṣa views", "Logical refutation", "Strengthening understanding"]
  },
  {
    number: 9,
    title: "Knowledge and Action",
    duration: "45 min",
    topics: ["Role of action", "Knowledge as liberator", "Beyond karma"]
  },
  {
    number: 10,
    title: "The Liberated One",
    duration: "50 min",
    topics: ["Jīvanmukti", "Freedom while living", "Natural abidance"]
  },
  {
    number: 11,
    title: "Removal of Doubt",
    duration: "48 min",
    topics: ["Common misconceptions", "Final clarifications", "Firm conviction"]
  },
  {
    number: 12,
    title: "Conclusion and Integration",
    duration: "42 min",
    topics: ["Summary of teaching", "Continued practice", "The path forward"]
  }
]

export default function VakyavrttiPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            href="/modules"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            All Modules
          </Link>
          
          <div className="mb-16">
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
              Vākyavṛtti
            </h1>
            <p className="text-lg text-muted-foreground italic mb-6">
              Commentary on the Mahāvākyas
            </p>
            <div className="prose prose-neutral max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Vākyavṛtti is a profound prakaraṇa grantha (introductory text) attributed to 
                Śrī Śaṅkarācārya. In just 53 verses, it unfolds the meaning of the mahāvākya 
                {"'Tat Tvam Asi'"} — {"'That Thou Art'"} — revealing the identity of the individual self 
                with Brahman, the ultimate reality.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This module presents the text verse by verse, with detailed commentary on the 
                methodology of Vedantic inquiry and the precise means by which the scriptures 
                reveal non-dual knowledge.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="font-serif text-xl text-foreground mb-6">Lessons</h2>
            <div className="flex flex-col gap-4">
              {lessons.map((lesson) => (
                <Link
                  key={lesson.number}
                  href={`/modules/vakyavrtti/lesson-${lesson.number}`}
                  className="group p-6 border border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Play className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-serif text-lg text-foreground">
                          {lesson.number}. {lesson.title}
                        </h3>
                        <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {lesson.topics.map((topic, i) => (
                          <span key={i} className="text-xs text-muted-foreground bg-secondary px-2 py-1">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
