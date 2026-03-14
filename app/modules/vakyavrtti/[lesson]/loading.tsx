// app/modules/vakyavrtti/[slug]/loading.tsx

export default function LectureLoading() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <div className="border-b border-stone-200 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-3">
          <div className="h-3 w-48 bg-stone-100 rounded animate-pulse" />
        </div>
      </div>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-12 pb-8 border-b border-stone-100 space-y-3">
          <div className="h-3 w-24 bg-stone-100 rounded animate-pulse" />
          <div className="h-8 w-64 bg-stone-100 rounded animate-pulse" />
          <div className="h-4 w-80 bg-stone-100 rounded animate-pulse" />
        </div>
        <div className="w-full aspect-video rounded-lg bg-stone-100 animate-pulse mb-12" />
        <div className="space-y-4">
          <div className="h-3 w-24 bg-stone-100 rounded animate-pulse" />
          <div className="h-16 bg-stone-100 rounded animate-pulse" />
        </div>
      </main>
    </div>
  )
}
