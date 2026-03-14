// app/modules/vakyavrtti/[slug]/page.tsx

import { notFound } from "next/navigation"
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
import {
  getLectureBySlug,
  getNextLecture,
  lectures,
  totalLectures,
  type Lecture,
} from "@/lib/vakyavrtti"

// ─── Static params — tells Next.js which slugs to pre-render ─────────────────
export async function generateStaticParams() {
  return lectures.map((lecture) => ({ lesson: lecture.slug }))
}

// ─── Page metadata ────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: { lesson: string } }) {
  const lecture = getLectureBySlug(params.lesson)
  if (!lecture) return {}
  return {
    title: `${lecture.title} — Vākyavṛtti | River of Knowledge`,
    description: lecture.youtubeTitle,
  }
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
  
// ─── Page ─────────────────────────────────────────────────────────────────────
export default function LecturePage({ params }: { params: { lesson: string } }) {
  const lecture = getLectureBySlug(params.lesson)
  if (!lecture) notFound()

  const nextLecture = getNextLecture(lecture.id)

  return (
    <div className="min-h-screen bg-[#FAFAF8]">

      {/* ── Breadcrumb ── */}
      <div className="border-b border-stone-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center gap-2 text-xs text-stone-400 tracking-wide">
          <Link href="/modules" className="hover:text-amber-700 transition-colors">
            Learning Modules
          </Link>
          <span>›</span>
          <Link href="/modules/vakyavrtti" className="hover:text-amber-700 transition-colors">
            Vākyavṛtti
          </Link>
          <span>›</span>
          <span className="text-stone-500">Lecture {lecture.id}</span>
        </div>
      </div>

      {/* ── Main content ── */}
      <main className="max-w-3xl mx-auto px-6 py-12 pb-24">

        {/* Lesson header */}
        <div className="mb-12 pb-8 border-b border-stone-100">
          <div className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-3">
            Lecture {lecture.id} of {totalLectures}
          </div>
          <h1 className="font-serif text-3xl text-stone-800 mb-2 leading-snug">
            {lecture.title}
          </h1>
          <p className="font-serif italic text-lg text-stone-400">
            {lecture.youtubeTitle.split(" - Lecture")[0].split(", study of")[0]}
          </p>
        </div>

        {/* ── 1. Verses ── */}
        {lecture.verses.length > 0 && (
          <section className="mb-12">
            <div className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-5">
              Verses in this lecture
            </div>
            <div className="border border-stone-200 rounded-lg overflow-hidden bg-white">
              {lecture.verses.map((verse, index) => (
                <div
                  key={verse.number}
                  className={`grid grid-cols-[48px_1fr] gap-4 p-6 ${
                    index < lecture.verses.length - 1 ? "border-b border-stone-100" : ""
                  }`}
                >
                  <div className="font-serif italic text-xl text-stone-300 text-center border-r border-stone-100 pt-1">
                    {verse.number}
                  </div>
                  <div className="pl-2">
                    <p className="text-xl text-stone-800 leading-loose mb-2" style={{ fontFamily: "'Noto Sans Devanagari', serif" }}>
                      {verse.sanskrit}
                    </p>
                    <p className="font-serif italic text-base text-stone-500 leading-relaxed mb-1">
                      {verse.english}
                    </p>
                    <p className="text-sm text-stone-400 leading-relaxed">
                      {verse.hindi}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 2. Video ── */}
        <section className="mb-12">
          <div className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-5">
            Lecture by Swami Ji
          </div>
          <div className="w-full aspect-video rounded-lg overflow-hidden border border-stone-200 bg-stone-100">
            <iframe
              src={`https://www.youtube.com/embed/${lecture.youtubeId}`}
              title={lecture.youtubeTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
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
        </section>

        {/* ── 3. Integration notes (PDF) ── */}
        {lecture.pdfUrl && (
          <section className="mb-12">
            <div className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-5">
              Integration Notes
            </div>
            <a
              href={lecture.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white border border-stone-200 rounded-lg hover:border-amber-300 hover:bg-amber-50 transition-all group"
            >
              <div className="w-11 h-11 rounded-md bg-amber-50 border border-amber-200 flex items-center justify-center text-xl flex-shrink-0">
                📄
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-stone-700 mb-0.5">
                  {lecture.pdfLabel}
                </div>
                <div className="text-xs text-stone-400">
                  1-page thought flow overview
                </div>
              </div>
              <div className="text-xs font-medium tracking-widest uppercase text-amber-700 group-hover:translate-x-1 transition-transform">
                Download →
              </div>
            </a>
          </section>
        )}

        {/* ── 4. Reflection questions ── */}
        {lecture.reflectionQuestions.length > 0 && (
          <section className="mb-12">
            <div className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-5">
              Reflection
            </div>
            <p className="font-serif italic text-base text-stone-400 mb-6 leading-relaxed">
              For silent contemplation only. Nothing is submitted or evaluated.
            </p>
            <div className="border-t border-stone-100">
              {lecture.reflectionQuestions.map((q, index) => (
                <div
                  key={q.id}
                  className="flex gap-5 py-6 border-b border-stone-100"
                >
                  <span className="font-serif italic text-base text-stone-300 flex-shrink-0 w-4 text-center pt-0.5">
                    {["i", "ii", "iii", "iv", "v"][index]}
                  </span>
                  <p className="font-serif text-xl text-stone-600 leading-relaxed">
                    {q.question}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 5. Acknowledgement note ── */}
        <section className="mb-12">
          <div className="p-5 bg-amber-50 border-l-4 border-amber-200 rounded-r-lg">
            <div className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-1.5">
              Acknowledgement
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              At the end of this module — after all lectures are complete — you will be asked
              to confirm you have completed and reflected on the teaching before proceeding
              to the next text.
            </p>
          </div>
        </section>

        {/* ── 6. Next lesson ── */}
        <section>
          <div className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-5">
            Next Lesson
          </div>
          {nextLecture ? (
            <Link
              href={`/modules/vakyavrtti/${nextLecture.slug}`}
              className="flex items-center gap-5 p-6 bg-white border border-stone-200 rounded-lg hover:border-amber-300 hover:bg-amber-50 transition-all group"
            >
              <div className="flex-1">
                <div className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-1.5">
                  Lecture {nextLecture.id}
                </div>
                <div className="font-serif text-xl text-stone-800 mb-1">
                  {nextLecture.title}
                </div>
                <div className="font-serif italic text-sm text-stone-400">
                  {nextLecture.youtubeTitle.split(", study of")[0]}
                </div>
              </div>
              <div className="text-xl text-stone-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all">
                →
              </div>
            </Link>
          ) : (
            // Last lecture — point to module completion
            <div className="p-6 bg-white border border-stone-200 rounded-lg text-center">
              <div className="font-serif text-xl text-stone-700 mb-2">
                You have reached the end of Vākyavṛtti.
              </div>
              <p className="font-serif italic text-sm text-stone-400">
                The module acknowledgement will appear here when ready.
              </p>
            </div>
          )}
        </section>

      </main>
    </div>
  )
}
