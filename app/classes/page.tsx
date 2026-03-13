import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, Video } from "lucide-react"

const upcomingClasses = [
  {
    id: 1,
    title: "Bhagavad Gītā Chapter 2 — Continuing",
    date: "March 15, 2026",
    time: "10:00 AM EST",
    description: "We continue our study of the second chapter, focusing on the nature of the eternal self.",
    platform: "Zoom"
  },
  {
    id: 2,
    title: "Bhagavad Gītā Chapter 2 — Verses 20-25",
    date: "March 22, 2026",
    time: "10:00 AM EST",
    description: "Detailed analysis of the immortality of the self and the nature of transformation.",
    platform: "Zoom"
  },
  {
    id: 3,
    title: "Monthly Satsang — Open Discussion",
    date: "March 29, 2026",
    time: "11:00 AM EST",
    description: "An open session for questions, clarifications, and discussion of practice.",
    platform: "Zoom"
  }
]

const pastClasses = [
  {
    id: 1,
    title: "Bhagavad Gītā Chapter 2 — Verses 11-15",
    date: "March 8, 2026",
    description: "Introduction to Sāṅkhya Yoga and the opening teachings on the nature of grief.",
    recordingAvailable: true
  },
  {
    id: 2,
    title: "Bhagavad Gītā Chapter 2 — Introduction",
    date: "March 1, 2026",
    description: "Overview of the second chapter and its significance in the Gītā's teaching.",
    recordingAvailable: true
  },
  {
    id: 3,
    title: "Bhagavad Gītā Chapter 1 — Summary",
    date: "February 22, 2026",
    description: "Summary of Arjuna Viṣāda Yoga and transition to the teaching proper.",
    recordingAvailable: true
  },
  {
    id: 4,
    title: "Monthly Satsang — February",
    date: "February 15, 2026",
    description: "Discussion on obstacles to practice and maintaining clarity in daily life.",
    recordingAvailable: true
  },
  {
    id: 5,
    title: "Bhagavad Gītā Chapter 1 — Verses 26-47",
    date: "February 8, 2026",
    description: "Arjuna's grief and the arising of vairāgya as a prerequisite for knowledge.",
    recordingAvailable: false
  }
]

export default function ClassesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Weekly Classes
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Live sessions where the teaching continues and sincere questions 
              are welcomed and addressed.
            </p>
          </div>
          
          {/* Upcoming Classes */}
          <section className="mb-16">
            <h2 className="font-serif text-xl text-foreground mb-6">Upcoming Sessions</h2>
            <div className="space-y-4">
              {upcomingClasses.map((cls) => (
                <div key={cls.id} className="p-6 border border-border bg-card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-lg text-foreground mb-2">{cls.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {cls.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {cls.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {cls.time}
                        </span>
                        <span className="flex items-center gap-2">
                          <Video className="h-4 w-4" />
                          {cls.platform}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Past Classes */}
          <section>
            <h2 className="font-serif text-xl text-foreground mb-6">Past Sessions</h2>
            <div className="space-y-4">
              {pastClasses.map((cls) => (
                <div key={cls.id} className="p-6 border border-border bg-card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-lg text-foreground mb-2">{cls.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {cls.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {cls.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {cls.recordingAvailable ? (
                        <span className="text-xs text-primary bg-primary/10 px-3 py-1.5">
                          Recording Available
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground bg-secondary px-3 py-1.5">
                          No Recording
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Info Box */}
          <div className="mt-16 p-8 bg-secondary/50 border border-border text-center">
            <h3 className="font-serif text-lg text-foreground mb-3">Joining Classes</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
              All classes are held via Zoom. Links are shared with registered students 
              prior to each session. If you are new to the study, please begin with 
              the introductory modules before joining live classes.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
