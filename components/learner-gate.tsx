"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export function LearnerGate({ children }: { children: React.ReactNode }) {
  const [checked, setChecked] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const accepted = localStorage.getItem("vakyavrtti_contract_accepted")
    if (!accepted) {
      router.replace("/modules/vakyavrtti/welcome")
    } else {
      setChecked(true)
    }
  }, [router])

  if (!checked) return null

  return <>{children}</>
}
