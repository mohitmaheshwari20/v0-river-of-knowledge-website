import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight, Clock, BookOpen } from "lucide-react"

const lessonData: Record<string, {
  number: number
  title: string
  duration: string
  videoId: string
  topics: string[]
  integration: string
  reflectionQuestions: string[]
}> = {
  "lesson-1": {
    number: 1,
    title: "Introduction to Vākyavṛtti",
    duration: "45 min",
    videoId: "dQw4w9WgXcQ",
    topics: [
      "Historical context and the place of Vākyavṛtti in Vedantic literature",
      "The purpose and methodology of prakaraṇa granthas",
      "Understanding the role of mahāvākyas in Vedantic teaching",
      "Prerequisites for undertaking this study"
    ],
    integration: "This lesson establishes the foundation for all that follows. As you proceed through the module, you will see how each subsequent teaching builds upon the framework introduced here. Take time to familiarize yourself with the key terms before moving forward.",
    reflectionQuestions: [
      "What draws you to the study of Vedanta at this point in your life?",
      "How do you understand the difference between information and transformation?",
      "In what ways might this study challenge your current understanding of who you are?"
    ]
  },
  "lesson-2": {
    number: 2,
    title: "The Nature of Inquiry",
    duration: "52 min",
    videoId: "dQw4w9WgXcQ",
    topics: [
      "Adhikāritva — who is qualified for this inquiry",
      "The four-fold qualification (sādhana catuṣṭaya)",
      "Viveka — discrimination between the real and unreal",
      "Mumukṣutva — the burning desire for liberation"
    ],
    integration: "The qualifications discussed are not checkboxes but ongoing orientations. Return to this lesson periodically to assess where you are and what still needs to be cultivated through study and practice.",
    reflectionQuestions: [
      "To what degree do you experience dispassion toward worldly pursuits?",
      "What does liberation mean to you in practical terms?",
      "How strong is your faith in the scriptures and the teaching tradition?"
    ]
  },
  "lesson-3": {
    number: 3,
    title: "Tat Tvam Asi — The Statement",
    duration: "48 min",
    videoId: "dQw4w9WgXcQ",
    topics: [
      "The structure of the mahāvākya as a sentence",
      "Apparent meanings of each word",
      "The seeming contradiction between Tat and Tvam",
      "Introduction to lakṣaṇā — implied meaning"
    ],
    integration: "This lesson introduces the central statement that will be unpacked throughout the module. Hold the apparent contradiction lightly — the resolution will come through patient study.",
    reflectionQuestions: [
      "When you hear 'That Thou Art,' what is your initial reaction?",
      "How do you currently understand the relationship between yourself and the ultimate reality?",
      "What objections arise naturally in your mind to the claim of identity?"
    ]
  }
}

interface PageProps {
  params: Promise<{ lesson: string }>
}

export default async function LessonPage({ params }: PageProps) {
  const { lesson: lessonSlug } = await params
  const lesson = lessonData[lessonSlug] || lessonData["lesson-1"]
  
  const totalLessons = 12
  const prevLesson = lesson.number > 1 ? `lesson-${lesson.number - 1}` : null
  const nextLesson = lesson.number < totalLessons ? `lesson-${lesson.number + 1}` : null
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            href="/modules/vakyavrtti"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Vākyavṛtti
          </Link>
          
          {/* Video */}
          <div className="aspect-video bg-foreground/5 mb-8 relative overflow-hidden border border-border">
            <iframe
              src={`https://www.youtube.com/embed/${lesson.videoId}`}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          
          {/* Lesson Info */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-muted-foreground">Lesson {lesson.number}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {lesson.duration}
              </span>
            </div>
            <h1 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              {lesson.title}
            </h1>
          </div>
          
          {/* Topics Covered */}
          <section className="mb-12">
            <h2 className="font-serif text-lg text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Topics Covered
            </h2>
            <ul className="space-y-3">
              {lesson.topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </section>
          
          {/* Integration Note */}
          <section className="mb-12 p-6 bg-secondary/50 border border-border">
            <h2 className="font-serif text-lg text-foreground mb-4">Integration Note</h2>
            <p className="text-muted-foreground leading-relaxed">
              {lesson.integration}
            </p>
          </section>
          
          {/* Reflection Questions */}
          <section className="mb-16">
            <h2 className="font-serif text-lg text-foreground mb-6">Questions for Reflection</h2>
            <div className="space-y-4">
              {lesson.reflectionQuestions.map((question, i) => (
                <div key={i} className="p-5 border border-border bg-card">
                  <p className="text-foreground leading-relaxed italic">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-border">
            {prevLesson ? (
              <Link 
                href={`/modules/vakyavrtti/${prevLesson}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous Lesson
              </Link>
            ) : (
              <div />
            )}
            
            {nextLesson ? (
              <Link 
                href={`/modules/vakyavrtti/${nextLesson}`}
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Next Lesson
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <Link 
                href="/modules/vakyavrtti"
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Complete Module
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
