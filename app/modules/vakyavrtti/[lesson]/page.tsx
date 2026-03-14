import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, ArrowRight } from "lucide-react"

const lessonData: Record<string, {
  number: number
  title: string
  videoId: string
}> = {
  "lesson-1": {
    number: 1,
    title: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 1",
    videoId: "eXNHjHolyQE"
  },
  "lesson-2": {
    number: 2,
    title: "Parokṡa – Aparokṡa Jnana, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 2",
    videoId: "l_UqCLrFIhM"
  },
  "lesson-3": {
    number: 3,
    title: "The 'Witness', is the Self, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 3",
    videoId: "RQvxJro-OKU"
  },
  "lesson-4": {
    number: 4,
    title: "सन्निधिमात्रेण सोऽहमित्यवधारय, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 4",
    videoId: "rpFiPYo3l6Q"
  },
  "lesson-5": {
    number: 5,
    title: "Avikāritayā-Ᾱtmanaḥ, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 5",
    videoId: "wd-BBaCYtNw"
  },
  "lesson-6": {
    number: 6,
    title: "Ādityavarṇaṁ tamasaḥ parastāt, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 6",
    videoId: "-bH0ZY8x7Kg"
  },
  "lesson-7": {
    number: 7,
    title: "Nirastātiśayānandaḥ, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 7",
    videoId: "sVtz6DwlN9M"
  },
  "lesson-8": {
    number: 8,
    title: "Parapremāspadatayā, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 8",
    videoId: "OV44Z05NyZ0"
  },
  "lesson-9": {
    number: 9,
    title: "So'hamityavadhāraya, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 9",
    videoId: "LdM12aJpgKY"
  },
  "lesson-10": {
    number: 10,
    title: "साक्षित्वम्, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 10",
    videoId: "KmMMicUs8Ds"
  },
  "lesson-11": {
    number: 11,
    title: "Tvamarthamevaṁ niścitya, study of 'Vākya Vṛtti' with Swami Abhishek Chaitanya Giri - Lecture 11",
    videoId: "ZM7QNym8C9o"
  },
  "lesson-12": {
    number: 12,
    title: "Tadarthaṁ cintayetpunaḥ, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 12",
    videoId: "zthLhpUqVHc"
  },
  "lesson-13": {
    number: 13,
    title: "निरस्ताशेषसंसारदोषः, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 13",
    videoId: "i7WqDyDxA-w"
  },
  "lesson-14": {
    number: 14,
    title: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 14",
    videoId: "yuK110D2BRk"
  },
  "lesson-15": {
    number: 15,
    title: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 15",
    videoId: "_NpbcQBPnEo"
  },
  "lesson-16": {
    number: 16,
    title: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 16",
    videoId: "Q4c177RkP1M"
  },
  "lesson-17": {
    number: 17,
    title: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 17",
    videoId: "Ja4KemFrs-k"
  },
  "lesson-18": {
    number: 18,
    title: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 18",
    videoId: "HsKO-GmnpMo"
  },
  "lesson-19": {
    number: 19,
    title: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 19",
    videoId: "kZ6NMhtUcRk"
  },
  "lesson-20": {
    number: 20,
    title: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 20",
    videoId: "YqoRwSQWEu8"
  },
  "lesson-21": {
    number: 21,
    title: "Tat Tvam Asi, study of 'Vakya Vritti' with Swami Abhishek Chaitanya Giri - Lecture 21",
    videoId: "LltM599W50Y"
  }
}

interface PageProps {
  params: Promise<{ lesson: string }>
}

export default async function LessonPage({ params }: PageProps) {
  const { lesson: lessonSlug } = await params
  const lesson = lessonData[lessonSlug]
  
  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="font-serif text-2xl text-foreground mb-4">Lesson not found</h1>
            <Link href="/modules/vakyavrtti" className="text-primary hover:underline">
              Return to Vakyavrtti
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
  
  const totalLessons = 21
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
              <span className="text-sm text-muted-foreground">Lecture {lesson.number} of {totalLessons}</span>
            </div>
            <h1 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              {lesson.title}
            </h1>
          </div>
          
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
