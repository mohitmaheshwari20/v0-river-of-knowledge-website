import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, BookOpen, Users, MessageCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-river.jpg"
              alt="Calm river at sunrise"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-background/60" />
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight text-balance">
              River of Knowledge
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Scripture-based Vedantic study for sincere seekers
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
              An Introduction to Vedanta Study
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div>
                <h3 className="font-serif text-xl text-foreground mb-4">Grounded in Tradition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The teachings presented here follow the traditional methodology of Advaita Vedanta, 
                  where the student engages with the scriptures under the guidance of a qualified teacher. 
                  This is not a path of mere information, but one of transformation through understanding.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-4">Guided Study</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Each text is unfolded systematically, verse by verse, allowing the teaching to reveal itself 
                  in its own time. Questions are welcomed and addressed, ensuring clarity at every step 
                  of the journey toward self-knowledge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Path of Study */}
        <section className="py-20 px-6 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-12 text-center">
              The Path of Study
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-lg text-primary">1</span>
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">Listen</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Attend to the teachings with an open and receptive mind, allowing the words to settle.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-lg text-primary">2</span>
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">Reflect</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Contemplate what has been heard until all doubts are resolved through reason.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-lg text-primary">3</span>
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">Assimilate</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Abide in the understanding until it becomes natural and unshakeable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Study Options */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-12 text-center">
              Begin the Study of Vedantic Texts
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                href="/modules"
                className="group p-8 bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <BookOpen className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-serif text-xl text-foreground mb-3">Learning Modules</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Systematic study of foundational Vedantic texts, each unfolded verse by verse.
                </p>
                <span className="text-sm text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore texts <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              
              <Link 
                href="/classes"
                className="group p-8 bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <Users className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-serif text-xl text-foreground mb-3">Weekly Classes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Live sessions where the teaching continues and questions are addressed in real time.
                </p>
                <span className="text-sm text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                  View schedule <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              
              <Link 
                href="/qa"
                className="group p-8 bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <MessageCircle className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-serif text-xl text-foreground mb-3">Q&A Series</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Recorded sessions addressing sincere questions from seekers on the path.
                </p>
                <span className="text-sm text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                  Browse episodes <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
