export type ProjectLink = {
  label: "Código" | "Demo"
  href: string
}

export type Project = {
  slug: string
  title: string
  summary: string
  technologies: string[]
  image: string
  gif?: string
  architecture?: string
  links?: ProjectLink[]
  featured?: boolean
}


