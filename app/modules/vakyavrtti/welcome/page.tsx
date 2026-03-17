"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { lectures } from "@/lib/vakyavrtti"

const points = [
  {
    number: 1,
    heading: "Orientation, not consumption",
    body: "The purpose of these modules is to support disciplined inquiry into the teachings of Vedanta. The content is not intended for casual consumption but for thoughtful study and reflection.",
  },
  {
    number: 2,
    heading: "Knowledge, not experience-seeking",
    body: "Vedantic teachings unfold through knowledge revealed in the scriptures. The aim of study is clarity of understanding rather than the pursuit of spiritual experiences.",
  },
  {
    number: 3,
    heading: "Study requires patience and reflection",
    body: "Seekers are encouraged to pause, reflect, and revisit the teachings. Progress in understanding may take time and should not be rushed.",
  },
  {
    number: 4,
    heading: "Dialogue supports clarification",
    body: "Live classes and Q&A sessions are intended to clarify doubts arising from scriptural study. They are not intended as personal guidance or counselling.",
  },
  {
    number: 5,
    heading: "Responsibility for one's own pace",
    body: "Each seeker is responsible for engaging with the teachings sincerely and progressing at a pace that allows proper understanding.",
  },
]

export default function WelcomePage() {
  const [accepted, setAccepted] = useState(false)
  const router = useRouter()

  function handleBegin() {
    localStorage.setItem("vakyavrtti_contract_accepted", "true")
    router.push(`/modules/vakyavrtti/${lectures[0].slug}`)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-2xl mx-auto px-6">

          <div className="mb-10">
            <p className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-3">
              Seeker Study Commitment
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-stone-800 mb-4">
              Before You Begin
            </h1>
            <div className="h-px bg-stone-200" />
          </div>

          <ol className="space-y-6 mb-12">
            {points.map((point) => (
              <li key={point.number} className="flex gap-5">
                <span className="text-lg text-muted-foreground flex-shrink-0 w-6 text-center leading-tight mt-0.5">
                  {point.number}
                </span>
                <div>
                  <p className="font-serif text-stone-800 text-lg leading-snug mb-1">
                    {point.heading} —
                  </p>
                  <p className="text-stone-500 leading-relaxed text-base">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="border-t border-stone-200 pt-8 space-y-6">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-stone-300 accent-amber-600 cursor-pointer flex-shrink-0"
              />
              <span className="text-stone-600 leading-relaxed select-none">
                I have read and understood the study guidelines above.
              </span>
            </label>

            <button
              onClick={handleBegin}
              disabled={!accepted}
              className="px-8 py-3 bg-amber-700 text-white font-medium tracking-wide text-sm rounded-sm transition-all
                disabled:opacity-40 disabled:cursor-not-allowed
                enabled:hover:bg-amber-800 enabled:active:bg-amber-900"
            >
              Begin Study
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
