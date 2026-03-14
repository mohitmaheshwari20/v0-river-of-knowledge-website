import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight, Play } from "lucide-react"
import { lectures, moduleInfo } from "@/lib/vakyavrtti"

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
              {moduleInfo.title}
            </h1>
            <p className="text-lg text-muted-foreground italic mb-6">
              {moduleInfo.subtitle}
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
            <h2 className="font-serif text-xl text-foreground mb-6">
              Lessons <span className="text-sm font-sans font-normal text-muted-foreground ml-2">{lectures.length} total</span>
            </h2>
            <div className="flex flex-col gap-4">
              {lectures.map((lecture) => (
                <Link
                  key={lecture.id}
                  href={`/modules/vakyavrtti/${lecture.slug}`}
                  className="group p-5 border border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Play className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg text-foreground flex-1 leading-snug">
                      {lecture.id}. {lecture.youtubeTitle.split(", study of")[0]}
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
