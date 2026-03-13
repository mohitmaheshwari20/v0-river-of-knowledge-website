import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg mb-4 text-foreground">River of Knowledge</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A sanctuary for sincere seekers studying Vedantic teachings through scripture-based learning.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4 text-foreground">Study</h4>
            <div className="flex flex-col gap-2">
              <Link href="/modules" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Learning Modules
              </Link>
              <Link href="/classes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Weekly Classes
              </Link>
              <Link href="/qa" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Q&A Series
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-sm mb-4 text-foreground">Connect</h4>
            <p className="text-sm text-muted-foreground">
              Questions about the teachings are welcome during our Q&A sessions.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            May the study of these texts bring clarity and peace.
          </p>
        </div>
      </div>
    </footer>
  )
}
