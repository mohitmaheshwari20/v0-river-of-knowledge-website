export default async function LecturePage({ params }: { params: Promise<{ lesson: string }> }) {
  const resolvedParams = await params
  
  return (
    <div>
      <p>Params received: {JSON.stringify(resolvedParams)}</p>
      <p>Lesson value: {resolvedParams.lesson}</p>
    </div>
  )
}
