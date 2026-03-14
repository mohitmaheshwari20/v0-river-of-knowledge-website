import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight, Play } from "lucide-react"

const lessons = [
  { number: 1, title: "Tat Tvam Asi - Lecture 1" },
  { number: 2, title: "Parokṡa – Aparokṡa Jnana - Lecture 2" },
  { number: 3, title: "The 'Witness', is the Self - Lecture 3" },
  { number: 4, title: "सन्निधिमात्रेण सोऽहमित्यवधारय - Lecture 4" },
  { number: 5, title: "Avikāritayā-Ᾱtmanaḥ - Lecture 5" },
  { number: 6, title: "Ādityavarṇaṁ tamasaḥ parastāt - Lecture 6" },
  { number: 7, title: "Nirastātiśayānandaḥ - Lecture 7" },
  { number: 8, title: "Parapremāspadatayā - Lecture 8" },
  { number: 9, title: "So'hamityavadhāraya - Lecture 9" },
  { number: 10, title: "साक्षित्वम् - Lecture 10" },
  { number: 11, title: "Tvamarthamevaṁ niścitya - Lecture 11" },
  { number: 12, title: "Tadarthaṁ cintayetpunaḥ - Lecture 12" },
  { number: 13, title: "निरस्ताशेषसंसारदोषः - Lecture 13" },
  { number: 14, title: "Tat Tvam Asi - Lecture 14" },
  { number: 15, title: "Tat Tvam Asi - Lecture 15" },
  { number: 16, title: "Tat Tvam Asi - Lecture 16" },
  { number: 17, title: "Tat Tvam Asi - Lecture 17" },
  { number: 18, title: "Tat Tvam Asi - Lecture 18" },
  { number: 19, title: "Tat Tvam Asi - Lecture 19" },
  { number: 20, title: "Tat Tvam Asi - Lecture 20" },
  { number: 21, title: "Tat Tvam Asi - Lecture 21" }
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
                  className="group p-5 border border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Play className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg text-foreground flex-1">
                      {lesson.number}. {lesson.title}
                    </h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
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
