import { notFound } from "next/navigation"
import Link from "next/link"
import {
  getLectureBySlug,
  getNextLecture,
  lectures,
  totalLectures,
} from "@/lib/vakyavrtti"
import { LearnerGate } from "@/components/learner-gate"

export async function generateStaticParams() {
  return lectures.map((lecture) => ({ lesson: lecture.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ lesson: string }> }) {
  const { lesson } = await params
  const lecture = getLectureBySlug(lesson)
  if (!lecture) return {}
  return {
    title: `${lecture.title} — Vākyavṛtti | River of Knowledge`,
    description: lecture.youtubeTitle,
  }
}

export default async function LecturePage({ params }: { params: Promise<{ lesson: string }> }) {
  const { lesson } = await params
  const lecture = getLectureBySlug(lesson)
  if (!lecture) notFound()

  const nextLecture = getNextLecture(lecture.id)

  return (
    <LearnerGate>
    <div className="min-h-screen bg-[#FAFAF8]">

      {/* Breadcrumb */}
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

      <main className="max-w-3xl mx-auto px-6 py-12 pb-24">

        {/* Header */}
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

        {/* 1. Verses — only shown when verse data is added to vakyavrtti.ts */}
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

        {/* 2. Video */}
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
        </section>

        {/* 3. Integration notes — only shown when pdfUrl is added to vakyavrtti.ts */}
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

        {/* 4. Reflection questions — only shown when questions are added to vakyavrtti.ts */}
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
                <div key={q.id} className="flex gap-5 py-6 border-b border-stone-100">
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

        {/* 5. Acknowledgement note */}
        <section className="mb-12">
          <div className="p-5 bg-amber-50 border-l-4 border-amber-200 rounded-r-lg">
            <div className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-1.5">
              Acknowledgement
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              At the end of this module — after all lectures are complete — you will be
              asked to confirm you have completed and reflected on the teaching before
              proceeding to the next text.
            </p>
          </div>
        </section>

        {/* 6. Next lesson */}
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
            <Link
              href="/modules/closing"
              className="flex items-center gap-5 p-6 bg-white border border-stone-200 rounded-lg hover:border-amber-300 hover:bg-amber-50 transition-all group"
            >
              <div className="flex-1">
                <div className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-1.5">
                  Module Complete
                </div>
                <div className="font-serif text-xl text-stone-800 mb-1">
                  Completion of Text Study
                </div>
                <div className="font-serif italic text-sm text-stone-400">
                  Integration, reflection, and continuing the study
                </div>
              </div>
              <div className="text-xl text-stone-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all">
                →
              </div>
            </Link>
          )}
        </section>

      </main>
    </div>
    </LearnerGate>
  )
}
