import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { fetchClasses } from "@/lib/classes"
import { siteConfig } from "@/lib/config"
import { Calendar, Clock, Video } from "lucide-react"

export const revalidate = 3600

export default async function ClassesPage() {
  const classes = await fetchClasses()
  console.log("Classes fetched:", JSON.stringify(classes))
  
  const upcoming = classes.filter(c => c.status === "upcoming")
  const past = classes.filter(c => c.status === "past")

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Weekly Classes
            </h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Live sessions with {siteConfig.teacherName} where the teaching continues 
              and questions are addressed in real time.
            </p>
          </div>
          {upcoming.length > 0 ? (
            <div className="mb-16">
              <p className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-6">
                Upcoming classes
              </p>
              <div className="space-y-4">
                {upcoming.map((cls, i) => (
                  <div key={i} className="p-6 border border-border bg-card">
                    <div className="flex-1">
                      <h2 className="font-serif text-xl text-foreground mb-2">{cls.topic}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cls.description}</p>
                      <div className="flex items-center gap-5 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" />{cls.date}</span>
                        <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" />{cls.time}</span>
                        <span className="flex items-center gap-1.5"><Video className="h-3 w-3" />{cls.platform}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mb-16 p-8 border border-border bg-card text-center">
              <p className="font-serif text-lg text-foreground mb-2">No upcoming classes scheduled</p>
              <p className="text-sm text-muted-foreground">Check back soon or submit a question through the Q&A series.</p>
            </div>
          )}
          {past.length > 0 && (
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-6">Past classes</p>
              <div className="space-y-4">
                {past.map((cls, i) => (
                  <div key={i} className="p-6 border border-border bg-card opacity-60">
                    <h2 className="font-serif text-lg text-foreground mb-1">{cls.topic}</h2>
                    <div className="flex items-center gap-5 text-xs text-muted-foreground mt-2">
                      <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" />{cls.date}</span>
                      <span className="flex items-center gap-1.5"><Video className="h-3 w-3" />{cls.platform}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="mt-16 pt-12 border-t border-border">
            <p className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-2">Joining a class</p>
            <h3 className="font-serif text-2xl text-foreground mb-3">How to attend</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
              Classes are held via {siteConfig.classesPlatform}. To receive the joining 
              details for an upcoming class, please submit a request below.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}