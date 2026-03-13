import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8 text-center">
            About Swami Ji
          </h1>
          
          <div className="bg-card border border-border rounded p-8 md:p-12">
            <div className="flex flex-col items-center gap-8">
              <div className="w-48 h-48 rounded-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Photo</span>
              </div>
              
              <div className="text-center space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Content about Swami Ji will be added here.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  This page will include background, teaching lineage, and approach to sharing the traditional teachings of Vedanta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
