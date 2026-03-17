import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessageCircle, Play, Clock } from "lucide-react"
import { episodes } from "@/lib/qa"
import { siteConfig } from "@/lib/config"

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
          
          <div className="mt-16 pt-12 border-t border-border">
            <div className="max-w-xl">
              <p className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-2">
                Have a question?
              </p>
              <h3 className="font-serif text-2xl text-foreground mb-3">
                Submit a question for the Q&A series
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Questions arising from sincere study are welcome. They may be addressed
                in upcoming Q&A sessions or during live classes. Questions are for
                clarification of understanding — not personal guidance.
              </p>
              <a
                href={siteConfig.qaFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium border border-border px-5 py-2.5 rounded hover:border-primary/30 hover:bg-secondary/50 transition-colors text-foreground"
              >
                Submit a question →
              </a>
              <p className="text-xs text-muted-foreground mt-4">
                Submitted questions may be addressed in future Q&A sessions at Swami Ji's discretion.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
