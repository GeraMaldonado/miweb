"use client"

import { useEffect, useMemo, useState } from "react"
import { useI18n } from "@/data/i18n"

type NavItem = {
  id: string
  label: string
}

export default function Navigation() {
  const { content, lang, setLang } = useI18n()

  const items: NavItem[] = useMemo(
    () => content.navigation.items,
    [content.navigation.items]
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

  const { brand, mobileMenuLabel, mobileMenuAria, goToHomeAria } = content.navigation

  return (
    <header className="fixed top-0 z-[100] w-full border-b border-border bg-card/80 backdrop-blur">
      <div className="mx-auto flex h-[var(--nav-h)] max-w-[var(--container)] items-center justify-between px-[var(--gutter)]">
        <a
          className="text-xl font-black tracking-[0.5px] text-foreground no-underline"
          href="#hero"
          onClick={onNavClick}
          aria-label={goToHomeAria}
        >
          {brand.prefix}<span>{brand.text}</span>{brand.suffix}
        </a>

        <nav className="hidden items-center gap-[18px] sm:flex" aria-label="Navegación principal">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={[
                "rounded-md px-[6px] py-[10px] text-sm font-extrabold no-underline text-muted-foreground/90 hover:text-foreground hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-[3px]",
                activeId === item.id ? "text-primary opacity-100" : "",
              ].join(" ")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="hidden sm:inline-flex items-center justify-center rounded-md border border-border bg-transparent px-[10px] py-2 text-sm font-extrabold text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-[3px]"
            type="button"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <button
            className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-[10px] py-2 text-sm font-extrabold text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-[3px] sm:hidden"
            type="button"
            aria-label={mobileMenuAria}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {mobileMenuLabel}
          </button>
        </div>
      </div>

      <div className={["border-t border-border sm:hidden", open ? "block" : "hidden"].join(" ")} role="dialog" aria-label={mobileMenuAria}>
        <div className="grid gap-2 px-[var(--gutter)] pb-[14px] pt-[10px]">
          <button
            className="rounded-md border border-border bg-muted px-[10px] py-3 font-black text-muted-foreground no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-[3px]"
            type="button"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={onNavClick}
              className={[
                "rounded-md border border-border bg-muted px-[10px] py-3 font-black text-muted-foreground no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--focus)] focus-visible:outline-offset-[3px]",
                activeId === item.id ? "border-primary/45 text-primary" : "",
              ].join(" ")}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
