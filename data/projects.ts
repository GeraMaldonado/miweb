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

export const projects: Project[] = [
  {
    slug: "cecodic",
    title: "CECODIC",
    summary: "Plataforma de eventos para la institución CECODIC.",
    technologies: ["/skills/vue.png", "/skills/mysql.png", "/skills/node.png", "/skills/express.png"],
    image: "/projects/cecodic.jpeg",
    gif: "/projects/cecodic.gif",
    architecture: "MVC",
    links: [{ label: "Código", href: "https://github.com/GeraMaldonado/cecodic" }],
    featured: true,
  },
  {
    slug: "foro-hub",
    title: "Foro-Hub",
    summary: "Proyecto tipo foro con CRUD de tópicos y gestión de usuarios.",
    technologies: ["/skills/java.png", "/skills/spring.svg", "/skills/mysql.png"],
    image: "/projects/Foro-Hub.jpg",
    gif: "/projects/Foro-Hub.gif",
    architecture: "MVC",
    links: [{ label: "Código", href: "https://github.com/GeraMaldonado/foro-hub" }],
    featured: true,
  },
  {
    slug: "api-libros",
    title: "API-Libros",
    summary: "API para gestionar libros y autores, con consultas por consola.",
    technologies: ["/skills/java.png", "/skills/spring.svg", "/skills/postgres.png"],
    image: "/projects/API-Libros.jpg",
    gif: "/projects/API-Libros.gif",
    architecture: "MVC",
    links: [{ label: "Código", href: "https://github.com/GeraMaldonado/api-libros" }],
    featured: true,
  },
  {
    slug: "calculadora-imc",
    title: "Calculadora-IMC",
    summary: "App para gestionar usuarios y cálculos de IMC, %GC y peso ideal.",
    technologies: ["/skills/csharp.png", "/skills/maui.svg", "/skills/sqlite.svg"],
    image: "/projects/Calculadora-IMC.jpg",
    gif: "/projects/Calculadora-IMC.gif",
    architecture: "MVVM",
    featured: true,
  },
  {
    slug: "blog",
    title: "Blog",
    summary: "Blog personal en Vue.js (sin backend por el momento).",
    technologies: ["/skills/vue.png"],
    image: "/projects/Blog.jpg",
    gif: "/projects/Blog.gif",
    architecture: "Component-Based",
    links: [{ label: "Código", href: "https://github.com/GeraMaldonado/myBlog" }],
    featured: false,
  },
]

