import SVGIcon from '@/components/ui/SVGIcon'
import { Code, Database, Server, Layout, Cloud, GitBranch, Package, TestTube, PenToolIcon as Tool, CheckCircle, Leaf, ChevronsLeftRightEllipsis, ShieldQuestionIcon, ShieldCheckIcon } from 'lucide-react'

const skills = [
  { name: "Java", years: "11+", icon: <Code className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "Spring MVC", years: "11+", icon: <Server className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "Spring Boot", years: "7+", icon: <Leaf className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "MySQL Database", years: "10+", icon: <Database className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "Hibernate", years: "11+", icon: <Database className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "Microservices", years: "2", icon: <Server className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "Apache Kafka", years: "1", icon: <Server className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "ReactJs", years: "6+", icon: <Layout className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "React-Native", years: "6+", icon: <Layout className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "JQuery", years: "12+", icon: <Code className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "Cloud (AWS)", years: "2", icon: <Cloud className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "RESTful Web Services", years: "11+", icon: <Server className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "JavaScript", years: "12+", icon: <Code className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "Socket Programming", years: "", icon: <ChevronsLeftRightEllipsis className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "SAML2", years: "", icon: <SVGIcon src="icons/saml2.svg" className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "OAuth 2.0 and OpenID", years: "", icon: <ShieldCheckIcon className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "Keycloak Server", years: "", icon: <SVGIcon src='icons/keycloak.svg' className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "Git version control", years: "", icon: <GitBranch className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "Maven build tools", years: "", icon: <Package className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "Test Driven Development", years: "", icon: <TestTube className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "SQL programming", years: "", icon: <Database className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "JUnit testing", years: "", icon: <CheckCircle className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "Angular", years: "", icon: <Layout className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "Jenkins", years: "", icon: <Tool className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "Docker", years: "", icon: <Package className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "CSS", years: "", icon: <Layout className="w-8 h-8 text-blue-600 mr-4"/> },
  { name: "HTML", years: "", icon: <Code className="w-8 h-8 text-blue-600 mr-4"/> },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
        <p className="text-lg text-gray-700 mb-8 mx-auto">
          As a Lead Full Stack Java Developer, I have honed a diverse set of skills that enable me to tackle complex
          projects from end to end. My expertise spans both back-end and front-end technologies, allowing me to create
          robust, scalable, and user-friendly applications.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center">
              {skill.icon}
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