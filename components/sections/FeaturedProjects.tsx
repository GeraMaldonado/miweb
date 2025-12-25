import { projects } from "@/data/projects"
import ProjectCard from "@/components/ui/Card"
import "./FeaturedProjects.css"

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured !== false) 

  return (
    <section id="featured" className="featured">
      <div className="featured__inner">
        <header className="featured__header">
          <h2 className="featured__title">Proyectos destacados</h2>
          <p className="featured__subtitle">
            Selección de proyectos terminados o representativos.
          </p>
        </header>

        <div className="featured__grid">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

