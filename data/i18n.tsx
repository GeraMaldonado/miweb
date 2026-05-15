"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import esMain from "@/data/locales/es.json"
import enMain from "@/data/locales/en.json"
import esAbout from "@/data/locales/es/about.json"
import enAbout from "@/data/locales/en/about.json"
import esSkills from "@/data/locales/es/skills.json"
import enSkills from "@/data/locales/en/skills.json"
import esInProgress from "@/data/locales/es/in-progress.json"
import enInProgress from "@/data/locales/en/in-progress.json"
import esProjects from "@/data/locales/es/projects.json"
import enProjects from "@/data/locales/en/projects.json"
import esContact from "@/data/locales/es/contact.json"
import enContact from "@/data/locales/en/contact.json"
import esNavigation from "@/data/locales/es/navigation.json"
import enNavigation from "@/data/locales/en/navigation.json"
import esHero from "@/data/locales/es/hero.json"
import enHero from "@/data/locales/en/hero.json"

type Language = "es" | "en"

type LocaleBundle = {
  main: typeof esMain
  about: typeof esAbout
  skills: typeof esSkills
  inProgress: typeof esInProgress
  projects: typeof esProjects
  contact: typeof esContact
  navigation: typeof esNavigation
  hero: typeof esHero
}

const LOCALES: Record<Language, LocaleBundle> = {
  es: {
    main: esMain,
    about: esAbout,
    skills: esSkills,
    inProgress: esInProgress,
    projects: esProjects,
    contact: esContact,
    navigation: esNavigation,
    hero: esHero,
  },
  en: {
    main: enMain,
    about: enAbout,
    skills: enSkills,
    inProgress: enInProgress,
    projects: enProjects,
    contact: enContact,
    navigation: enNavigation,
    hero: enHero,
  },
}

type I18nContextValue = {
  lang: Language
  setLang: (lang: Language) => void
  content: LocaleBundle
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("es")

  useEffect(() => {
    const stored = window.localStorage.getItem("lang")
    if (stored === "es" || stored === "en") {
      setLangState(stored)
      return
    }

    const browser = window.navigator.language.toLowerCase()
    if (browser.startsWith("en")) {
      setLangState("en")
    }
  }, [])

  const setLang = (next: Language) => {
    setLangState(next)
    window.localStorage.setItem("lang", next)
  }

  const value = useMemo<I18nContextValue>(() => {
    return {
      lang,
      setLang,
      content: LOCALES[lang],
    }
  }, [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error("useI18n must be used inside LanguageProvider")
  }
  return ctx
}
