import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6">

          {/* Header */}
          <div className="mb-16 pb-12 border-b border-border">
            <p className="text-xs font-medium tracking-widest uppercase text-amber-700 mb-4">
              About the Teacher
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
              Swami Abhishek Chaitanya Giri
            </h1>
            <p className="font-serif italic text-lg text-muted-foreground">
              Maha-Mandaleshwar · Vedantic Master · Rishikesh, India
            </p>
          </div>

          {/* Photo + Bio */}
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full overflow-hidden border border-border">
                <img
                  src="/images/swamiji.jpg"
                  alt="Swami Abhishek Chaitanya Giri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Maha-Mandaleshwar Swami Abhishek Chaitanya Giri is a dedicated teacher of Vedanta,
                based at his ashram in Rishikesh, Uttarakhand — one of the most sacred centres of
                spiritual learning in India. With over two decades of experience guiding sincere
                seekers, Swami Ji brings the timeless teachings of Adi Shankaracharya to life with
                clarity, warmth and intellectual rigour.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His teaching is rooted in direct Vedantic inquiry — drawing on the depth of the
                scriptures not merely as texts to be studied, but as living instruments for the
                elimination of doubt and the awakening of genuine wisdom. Through a combination of
                direct pointing, careful reasoning and the illuminating power of story, he meets
                each seeker where they are and guides them toward their own direct experience of truth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Swami Ji has taught seekers across the world — from dedicated monastics to
                professionals, thinkers and students navigating the demands of modern life. His
                discourses are open to all sincere seekers regardless of background, tradition or
                prior knowledge of Vedanta. What matters is not where one comes from, but the
                sincerity of the seeking.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
