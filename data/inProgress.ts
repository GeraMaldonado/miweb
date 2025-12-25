export type InProgressStatus = "Planificación" | "En desarrollo" | "En progreso" | "Beta"

export type InProgressProject = {
  slug: string
  title: string
  description: string
  progress: number
  tags: string[]
  status: InProgressStatus
}

export const inProgressProjects: InProgressProject[] = [
  {
    slug: "ai-chat-assistant",
    title: "AI Chat Assistant",
    description: "Asistente de chat impulsado por IA con capacidades de procesamiento de lenguaje natural.",
    progress: 75,
    tags: ["Next.js", "OpenAI", "Supabase"],
    status: "En progreso",
  },
  {
    slug: "portfolio-cms",
    title: "Portfolio CMS",
    description: "Sistema de gestión de contenido personalizado para portafolios de desarrolladores.",
    progress: 60,
    tags: ["React", "Node.js", "MongoDB"],
    status: "En desarrollo",
  },
  {
    slug: "fitness-tracker",
    title: "Fitness Tracker",
    description: "Aplicación para seguimiento de ejercicios y nutrición con sincronización en la nube.",
    progress: 40,
    tags: ["React Native", "Firebase", "Charts"],
    status: "Planificación",
  },
  {
    slug: "snippet-manager",
    title: "Code Snippet Manager",
    description: "Herramienta para organizar y compartir fragmentos de código con resaltado de sintaxis.",
    progress: 85,
    tags: ["TypeScript", "PostgreSQL", "Prism.js"],
    status: "Beta",
  },
]

