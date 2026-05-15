"use client"

import { useEffect, useMemo, useState } from "react"
import { useI18n } from "@/data/i18n"

type SkillWord = { text: string; className: string }

export default function Hero() {
  const { content } = useI18n()
  const { title, subtitle, skills } = content.hero

  const skillList: SkillWord[] = useMemo(
    () => skills,
    [skills]
  )

  const [shown, setShown] = useState("")
  const [skillIndex, setSkillIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [typing, setTyping] = useState(true)

  const current = skillList[skillIndex]

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
          setSkillIndex((i) => (i + 1) % skillList.length)
          setTyping(true)
        }
      }
    }

    intervalId = window.setInterval(tick, 120)

    return () => {
      if (intervalId) window.clearInterval(intervalId)
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [charIndex, typing, current.text, skillList.length])

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center justify-center px-[var(--gutter)] pt-24 pb-8 scroll-mt-[var(--scroll-offset)]"
    >
      <div className="mx-auto w-full max-w-[var(--container)]">
        <div className="rounded-xl border border-border bg-card/65 p-7 backdrop-blur-lg">
          <h1 className="text-center font-black leading-[1.15] text-5xl">
            {title}
          </h1>

          <p className="mt-3 text-center font-semibold opacity-90 [font-size:clamp(14px,1.7vw,18px)]">
            {subtitle}
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
