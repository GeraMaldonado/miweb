export type SkillItem = {
  name: string
  icon: string
}

export type SkillGroup = {
  title: string
  items: SkillItem[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Tecnologías",
    items: [
      { name: "Express JS", icon: "/skills/express.png" },
      { name: "MySQL", icon: "/skills/mysql.png" },
      { name: "Neovim", icon: "/skills/neovim.png" },
      { name: "Node.js", icon: "/skills/node.png" },
      { name: "GNU/Linux Ubuntu", icon: "/skills/ubuntu.png" },
      { name: "Vue 3", icon: "/skills/vue.png" },
    ],
  },
]

