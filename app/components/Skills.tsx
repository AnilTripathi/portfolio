import { Code, Database, Server, Layout, Cloud, GitBranch, Package, TestTube, PenToolIcon as Tool, CheckCircle, Leaf } from 'lucide-react'

const skills = [
  { name: "Java", years: "11+", icon: Code },
  { name: "Spring MVC", years: "11+", icon: Server },
  { name: "Spring Boot", years: "7+", icon: Leaf },
  { name: "MySQL Database", years: "10+", icon: Database },
  { name: "Hibernate", years: "11+", icon: Database },
  { name: "Microservices", years: "2", icon: Server },
  { name: "ReactJs", years: "6+", icon: Layout },
  { name: "React-Native", years: "6+", icon: Layout },
  { name: "JQuery", years: "12+", icon: Code },
  { name: "Cloud (AWS)", years: "2", icon: Cloud },
  { name: "RESTful Web Services", years: "11+", icon: Server },
  { name: "JavaScript", years: "12+", icon: Code },
  { name: "Git version control", years: "", icon: GitBranch },
  { name: "Maven build tools", years: "", icon: Package },
  { name: "Test Driven Development", years: "", icon: TestTube },
  { name: "SQL programming", years: "", icon: Database },
  { name: "JUnit testing", years: "", icon: CheckCircle },
  { name: "Angular", years: "", icon: Layout },
  { name: "Jenkins", years: "", icon: Tool },
  { name: "Docker", years: "", icon: Package },
  { name: "CSS", years: "", icon: Layout },
  { name: "HTML", years: "", icon: Code },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          As a Lead Full Stack Java Developer, I have honed a diverse set of skills that enable me to tackle complex
          projects from end to end. My expertise spans both back-end and front-end technologies, allowing me to create
          robust, scalable, and user-friendly applications.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center">
              <skill.icon className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                {skill.years && <p className="text-gray-600 text-sm">{skill.years} Years Experience</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills