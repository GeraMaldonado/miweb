import content from "@/data/locales/es.json"
import { Project } from "@/data/projects"
import ProjectCard from "@/components/ui/Card"

export default function FeaturedProjects() {
  const { title, items } = content.projects
  // Explicitly cast items to Project[] to match the type expected by ProjectCard if strictness requires it,
  // or rely on structural compatibility. "links" in JSON is object array, Type expects ProjectLink[].
  const featured = (items as unknown as Project[]).filter((p) => p.featured !== false)

  return (
    <section id="featured" className="scroll-mt-[var(--scroll-offset)] py-16">
      <div className="mx-auto max-w-[var(--container)] px-[var(--gutter)]">
        <header className="mb-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
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
