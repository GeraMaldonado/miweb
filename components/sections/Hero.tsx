"use client"

import { useEffect, useMemo, useState } from "react"
import "./Hero.css"

type SkillWord = { text: string; className: string }

export default function Hero() {
  const skills: SkillWord[] = useMemo(
    () => [
      { text: "Backend", className: "highlight-1" },
      { text: "Frontend", className: "highlight-2" },
      { text: "Bases de datos", className: "highlight-3" },
      { text: "Despliegue", className: "highlight-4" },
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
    <section id="hero" className="hero">
      <div className="hero__inner">
        <div className="hero__panel">
          <h1 className="hero__name">Gerardo Maldonado Félix</h1>
          <p className="hero__role">Programador web FullStack</p>

          <p className="hero__line">
            <span className={`hero__highlight ${current.className}`}>{shown}</span>
            <span className="hero__cursor" aria-hidden="true">
              |
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

