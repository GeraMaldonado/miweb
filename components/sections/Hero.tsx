"use client"

import { useEffect, useMemo, useState } from "react"

type SkillWord = { text: string; className: string }

export default function Hero() {
  const skills: SkillWord[] = useMemo(
    () => [
      { text: "Backend", className: "text-primary" },
      { text: "Frontend", className: "text-[var(--good)]" },
      { text: "Bases de datos", className: "text-[var(--mid)]" },
      { text: "Despliegue", className: "text-[var(--bad)]" },
    ],
    []
  )

  const [shown, setShown] = useState("")
  const [skillIndex, setSkillIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [typing, setTyping] = useState(true)

  const current = skills[skillIndex]

  useEffect(() => {
    let intervalId: number | undefined
    let timeoutId: number | undefined

    const tick = () => {
      const word = current.text

      if (typing) {
        if (charIndex < word.length) {
          setShown((prev) => prev + word[charIndex])
          setCharIndex((n) => n + 1)
        } else {
          timeoutId = window.setTimeout(() => setTyping(false), 500)
        }
      } else {
        if (charIndex > 0) {
          setShown((prev) => prev.slice(0, -1))
          setCharIndex((n) => n - 1)
        } else {
          setSkillIndex((i) => (i + 1) % skills.length)
          setTyping(true)
        }
      }
    }

    intervalId = window.setInterval(tick, 120)

    return () => {
      if (intervalId) window.clearInterval(intervalId)
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [charIndex, typing, current.text, skills.length])

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center justify-center px-[var(--gutter)] pt-24 pb-8 scroll-mt-[var(--scroll-offset)]"
    >
      <div className="mx-auto w-full max-w-[var(--container)]">
        <div className="rounded-xl border border-border bg-card/65 p-7 backdrop-blur-lg">
          <h1 className="text-center font-black leading-[1.15] [font-size:clamp(28px,4vw,52px)]">
            Gerardo Maldonado Félix
          </h1>

          <p className="mt-3 text-center font-semibold opacity-90 [font-size:clamp(14px,1.7vw,18px)]">
            Programador web FullStack
          </p>

          <p className="mt-3 text-center font-semibold leading-relaxed [font-size:clamp(14px,1.7vw,18px)]">
            <span className={["font-extrabold", current.className].join(" ")}>{shown}</span>
            <span className="ml-[2px] inline-block font-black animate-blink" aria-hidden="true">
              |
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
