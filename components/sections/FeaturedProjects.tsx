import { projects } from "@/data/projects"
import ProjectCard from "@/components/ui/Card"
import "./FeaturedProjects.css"

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured !== false) 

  return (
    <section id="featured" className="u-section">
      <div className="u-container">
        <header className="u-header">
          <h2>Proyectos destacados</h2>
        </header>

        <div className="u-grid u-grid-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

