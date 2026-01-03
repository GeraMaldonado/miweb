import { projects } from "@/data/projects"
import ProjectCard from "@/components/ui/Card"

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured !== false)

  return (
    <section id="featured" className="scroll-mt-[var(--scroll-offset)] py-16">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
        <header className="mb-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Proyectos destacados</h2>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
