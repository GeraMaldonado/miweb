import "./AboutMe.css"

export default function AboutMe() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <header className="about__header">
          <h2 className="about__title">Sobre mí</h2>
          <p className="about__subtitle">
            Perfil enfocado en desarrollo web, con backend en TypeScript/Node.js y bases de datos SQL.
          </p>
        </header>

        <div className="about__grid">
          <div className="about__text">
            <p>
              Estudiante de Ingeniería en Software con especialización en desarrollo web. Experiencia en TypeScript,
              Node.js y SQL en backend, con conocimientos en Vue.js.
            </p>
            <p>
              Enfoque en optimización de procesos, aprendizaje continuo y resolución de problemas. Habilidad para
              trabajar en equipo y participar en proyectos desde la toma de requerimientos hasta el despliegue.
            </p>
            <p>
              Compromiso con la entrega de soluciones escalables y eficientes, alineadas con las necesidades del negocio.
              Buscando una oportunidad para aplicar conocimientos en desarrollo backend y frontend, contribuyendo con
              innovación y crecimiento en entornos dinámicos.
            </p>

            <div className="about__cta">
              <a className="about__btn" href="/Curriculum.pdf" target="_blank" rel="noreferrer">
                Descargar CV
              </a>
              <a className="about__btn about__btn--ghost" href="#contact">
                Contacto
              </a>
            </div>
          </div>

          <div className="about__cards" aria-label="Resumen de enfoque">
            <div className="about__card">
              <h3>Optimización de procesos</h3>
              <p>Busco mejorar flujo y rendimiento en el desarrollo y en la solución técnica.</p>
            </div>

            <div className="about__card">
              <h3>De requerimientos a despliegue</h3>
              <p>Participo en análisis, implementación, pruebas y entrega en entorno real.</p>
            </div>

            <div className="about__card">
              <h3>Escalabilidad y eficiencia</h3>
              <p>Prioridad en soluciones mantenibles, claras y alineadas a necesidades del negocio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

