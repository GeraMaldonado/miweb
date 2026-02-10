export type InProgressStatus = "Planificación" | "En desarrollo" | "En progreso" | "Beta"

export type InProgressProject = {
  slug: string
  title: string
  description: string
  progress: number
  tags: string[]
  status: InProgressStatus
}


