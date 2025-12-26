import Hero from "@/components/sections/Hero"
import AboutMe from "@/components/sections/AboutMe"
import FeaturedProjects from "@/components/sections/FeaturedProjects"
import InProgressProjects from "@/components/sections/InProgressProjects"
import TechStack from "@/components/sections/TechStack"
import Contact from "@/components/sections/Contact"

export default function Page() {
  return (
    <>
      <Hero />
      <AboutMe />
      <TechStack />
      <FeaturedProjects />
      <InProgressProjects />
       <Contact />
    </>
  )
}

