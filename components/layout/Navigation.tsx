"use client"

import { useEffect, useMemo, useState } from "react"
import "./Navigation.css"

type NavItem = {
  id: string
  label: string
}

export default function Navigation() {
  const items: NavItem[] = useMemo(
    () => [
      { id: "about", label: "Sobre mí" },
      { id: "skills", label: "Tecnologías" },
      { id: "featured", label: "Proyectos" },
      { id: "in-progress", label: "En progreso" },
      { id: "contact", label: "Contacto" },
    ],
    []
  )

  const [activeId, setActiveId] = useState<string>("about")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sectionIds = ["hero", ...items.map((i) => i.id)]
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: "-72px 0px -55% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5, 0.75],
      }
    )

    sections.forEach((s) => observer.observe(s))

    return () => observer.disconnect()
  }, [items])

  const onNavClick = () => setOpen(false)

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#hero" onClick={onNavClick} aria-label="Ir al inicio">
          &lt;<span>Dev </span>/&gt;
        </a>

        <nav className="nav__links" aria-label="Navegación principal">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${activeId === item.id ? "is-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="nav__toggle"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Menú
        </button>
      </div>

      <div className={`nav__mobile ${open ? "is-open" : ""}`} role="dialog" aria-label="Menú móvil">
        <div className="nav__mobileInner">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__mobileLink ${activeId === item.id ? "is-active" : ""}`}
              onClick={onNavClick}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
