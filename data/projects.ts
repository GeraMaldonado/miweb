export type ProjectLink = {
  label: "Código" | "Demo";
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;          // 1–2 líneas
  technologies: string[];   // rutas a íconos en /public/habilidades
  image: string;            // /proyectos/xxx.jpg
  gif?: string;             // /proyectos/xxx.gif
  architecture?: string;    // "MVC", "MVVM", etc.
  links?: ProjectLink[];
  featured?: boolean;       // por si luego quieres filtrar destacados
};

export const projects: Project[] = [
  {
    slug: "cecodic",
    title: "CECODIC",
    summary: "Plataforma de eventos para la institución CECODIC.",
    technologies: ["/habilidades/vue.png", "/habilidades/mysql.png", "/habilidades/node.png", "/habilidades/express.png"],
    image: "/proyectos/cecodic.jpeg",
    gif: "/proyectos/cecodic.gif",
    architecture: "MVC",
    links: [{ label: "Código", href: "https://github.com/GeraMaldonado/cecodic" }],
    featured: true,
  },
  {
    slug: "foro-hub",
    title: "Foro-Hub",
    summary: "Proyecto tipo foro con CRUD de tópicos y gestión de usuarios.",
    technologies: ["/habilidades/java.png", "/habilidades/spring.svg", "/habilidades/mysql.png"],
    image: "/proyectos/Foro-Hub.jpg",
    gif: "/proyectos/Foro-Hub.gif",
    architecture: "MVC",
    links: [{ label: "Código", href: "https://github.com/GeraMaldonado/foro-hub" }],
    featured: true,
  },
  {
    slug: "api-libros",
    title: "API-Libros",
    summary: "API para gestionar libros y autores, con consultas por consola.",
    technologies: ["/habilidades/java.png", "/habilidades/spring.svg", "/habilidades/postgres.png"],
    image: "/proyectos/API-Libros.jpg",
    gif: "/proyectos/API-Libros.gif",
    architecture: "MVC",
    links: [{ label: "Código", href: "https://github.com/GeraMaldonado/api-libros" }],
    featured: true,
  },
  {
    slug: "calculadora-imc",
    title: "Calculadora-IMC",
    summary: "App para gestionar usuarios y cálculos de IMC, %GC y peso ideal.",
    technologies: ["/habilidades/csharp.png", "/habilidades/maui.svg", "/habilidades/sqlite.svg"],
    image: "/proyectos/Calculadora-IMC.jpg",
    gif: "/proyectos/Calculadora-IMC.gif",
    architecture: "MVVM",
    featured: true,
  },
  {
    slug: "blog",
    title: "Blog",
    summary: "Blog personal en Vue.js (sin backend por el momento).",
    technologies: ["/habilidades/vue.png"],
    image: "/proyectos/Blog.jpg",
    gif: "/proyectos/Blog.gif",
    architecture: "Component-Based",
    links: [{ label: "Código", href: "https://github.com/GeraMaldonado/myBlog" }],
    featured: false,
  },
];

