"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function ClosingPage() {
  const [acknowledged, setAcknowledged] = useState(false)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-stone-200 bg-white">
          <div className="max-w-2xl mx-auto px-6 py-3 flex items-center gap-2 text-xs text-stone-400 tracking-wide">
            <Link href="/modules" className="hover:text-amber-700 transition-colors">
              Learning Modules
            </Link>
            <span>›</span>
            <span className="text-stone-500">Module Complete</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-16 pb-24">

          {/* 1. Heading section */}
          <section className="mb-12">
            <div className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-4">
              Completion of Text Study
            </div>
            <h1 className="font-serif text-3xl text-stone-800 mb-6 leading-snug">
              You have completed the study of this text.
            </h1>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed">
              The purpose of this module has been to support a disciplined engagement with the teachings through scriptural exposition, reflection, and inquiry. The study of a text is not intended to produce conclusions or experiences, but to help clarify understanding and correct fundamental misconceptions. Vedantic study unfolds gradually. Each text contributes to a deeper appreciation of the methodology through which the teachings reveal their meaning.
            </p>
          </section>

          {/* 2. Integration section */}
          <section className="mb-12">
            <div className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-4">
              Integration
            </div>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed">
              At this stage, seekers are encouraged to revisit important sections of the text, reflect on areas that remain unclear, and allow the understanding gained through study to mature gradually. Clarity often deepens through continued engagement with the teachings and through dialogue that helps resolve remaining doubts.
            </p>
          </section>

          {/* 3. Continuing the study section */}
          <section className="mb-12">
            <div className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-4">
              Continuing the Study
            </div>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed">
              This module forms one step within a continuing learning path. Further study may include participation in live classes, engagement with Q&amp;A sessions that address recurring doubts, and study of additional Vedantic texts as they become available. The learning environment exists to support seekers who wish to continue their engagement with the teachings in a disciplined and thoughtful manner.
            </p>
          </section>

          {/* 4. Module acknowledgement section */}
          <section>
            <div className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-6">
              Module Acknowledgement
            </div>

            <div className="flex items-start gap-3 mb-8">
              <Checkbox
                id="acknowledge"
                checked={acknowledged}
                onCheckedChange={(checked) => setAcknowledged(checked === true)}
                className="mt-1 border-stone-300 data-[state=checked]:bg-amber-700 data-[state=checked]:border-amber-700"
              />
              <label
                htmlFor="acknowledge"
                className="font-serif text-base text-stone-600 leading-relaxed cursor-pointer"
              >
                I have completed the study of this module and understand that clarity develops through continued reflection and further study.
              </label>
            </div>

            <div className="flex items-center gap-3">
              <Button
                asChild={acknowledged}
                disabled={!acknowledged}
                variant="outline"
                className={
                  acknowledged
                    ? "border-stone-300 text-stone-700 hover:border-amber-600 hover:text-amber-700 font-medium"
                    : "border-stone-200 text-stone-300 cursor-not-allowed font-medium"
                }
              >
                {acknowledged ? (
                  <Link href="/modules">Explore Additional Texts</Link>
                ) : (
                  <span>Explore Additional Texts</span>
                )}
              </Button>

              <Button
                asChild={acknowledged}
                disabled={!acknowledged}
                variant="outline"
                className={
                  acknowledged
                    ? "border-stone-300 text-stone-700 hover:border-amber-600 hover:text-amber-700 font-medium"
                    : "border-stone-200 text-stone-300 cursor-not-allowed font-medium"
                }
              >
                {acknowledged ? (
                  <Link href="/classes">Attend Weekly Classes</Link>
                ) : (
                  <span>Attend Weekly Classes</span>
                )}
              </Button>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
