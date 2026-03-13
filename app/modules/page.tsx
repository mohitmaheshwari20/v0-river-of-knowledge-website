import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

const modules = [
  {
    id: "vakyavrtti",
    title: "Vākyavṛtti",
    subtitle: "Commentary on the Mahāvākyas",
    description: "A foundational text by Śaṅkarācārya exploring the Mahāvākya - \"Tat Tvam Asi\" in the Upaniṣads.",
    lessons: 12,
    status: "available"
  },
  {
    id: "tattva-bodha",
    title: "Tattva Bodha",
    subtitle: "Knowledge of Truth",
    description: "An introductory primer on the essential terms and concepts of Vedanta.",
    lessons: 8,
    status: "available"
  },
  {
    id: "atma-bodha",
    title: "Ātma Bodha",
    subtitle: "Self-Knowledge",
    description: "A text of 68 verses by Śaṅkarācārya, systematically revealing the nature of the Self.",
    lessons: 15,
    status: "coming"
  },
  {
    id: "upadesha-sahasri",
    title: "Upadeśa Sāhasrī",
    subtitle: "A Thousand Teachings",
    description: "A comprehensive work covering both prose and metrical teachings on liberation.",
    lessons: 24,
    status: "coming"
  },
  {
    id: "vivekacudamani",
    title: "Vivekacūḍāmaṇi",
    subtitle: "Crest-Jewel of Discrimination",
    description: "An elaborate treatise on the discrimination between the real and unreal.",
    lessons: 20,
    status: "coming"
  },
  {
    id: "mandukya",
    title: "Māṇḍūkya Upaniṣad",
    subtitle: "With Kārikā",
    description: "The essence of all Upaniṣads, exploring consciousness through the states of experience.",
    lessons: 18,
    status: "coming"
  }
]

export default function ModulesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Learning Modules
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Each module presents a classical Vedantic text, unfolded systematically 
              to reveal the teaching in its entirety.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <Link
                key={module.id}
                href={module.status === "available" ? `/modules/${module.id}` : "#"}
                className={`group p-8 border border-border bg-card transition-colors ${
                  module.status === "available" 
                    ? "hover:border-primary/30 cursor-pointer" 
                    : "opacity-60 cursor-default"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-serif text-xl text-foreground mb-1">{module.title}</h2>
                    <p className="text-sm text-muted-foreground italic">{module.subtitle}</p>
                  </div>
                  {module.status === "coming" && (
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {module.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {module.lessons} lessons
                  </span>
                  {module.status === "available" && (
                    <span className="text-sm text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                      Begin study <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
