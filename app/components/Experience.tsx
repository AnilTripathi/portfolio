const experiences = [
  {
    title: "Lead Full Stack Java Developer",
    company: "Valley Tech Software Solutions",
    location: "Hyderabad, India",
    period: "Sep 2018 - Current",
    responsibilities: [
      "Led a team in setting up and configuring Spring Boot REST API with JWT Token authentication",
      "Implemented Single Sign-On (SSO) with SAML support for enhanced security",
      "Connected Spring Boot application with MySQL database for data retrieval",
      "Developed queries and stored procedures for efficient data manipulation",
      "Wrote triggers to automate actions within the MySQL database",
      "Collaborated with cross-functional teams to ensure project success",
      "Conducted code reviews and provided technical guidance to team members",
      "Implemented best practices for secure API development",
      "Optimized performance of the application through code refactoring and database tuning",
    ]
  },
  {
    title: "Sr. Software Developer",
    company: "Wellness 360",
    location: "Hyderabad, India",
    period: "May 2013 - Sep 2018",
    responsibilities: [
      "Spearheaded the development of a healthcare system that allowed users to track their fitness activities",
      "Integrated popular third-party apps and devices like Fitbit, Jawbone, and Moves for seamless data syncing",
      "Designed and implemented a personalized food plan feature to help users maintain or lose weight",
      "Created algorithms to calculate daily calorie intake based on the user's food plan",
      "Collaborated with cross-functional teams to ensure the integration of various features within the system",
      "Conducted thorough testing and debugging to ensure the system's functionality and reliability",
      "Implemented secure authentication methods to protect user data and privacy",
    ]
  },
  {
    title: "Software Developer",
    company: "Markstein Technology Solutions Pvt Ltd",
    location: "Gwalior, India",
    period: "Nov 2011 - May 2013",
    responsibilities: [
      "Designed and implemented responsive web applications using Spring MVC",
      "Integrated JSP with tiles for improved user interface",
      "Utilized JQuery for dynamic behavior and interaction",
      "Implemented Bootstrap to streamline front-end development",
      "Connected applications to MySQL database for data storage",
      "Developed RESTful APIs for seamless data exchange",
      "Resolved bugs and optimized code for efficiency",
      "Collaborated with team members to meet project requirements",
      "Implemented security measures to protect data integrity",
      "Delivered projects within specified timelines",
      "Maintained clean and structured code base for easy maintenance",
    ]
  },
  {
    title: "Software Developer",
    company: "Osiris Technologies",
    location: "Delhi, India",
    period: "Aug 2011 - Oct 2011",
    responsibilities: [
      "Designed and implemented responsive web applications using ASP.NET C#",
      "Implemented jQuery and JavaScript for interactive web features",
      "Managed content for a picture contest board",
      "Worked closely with other team members to identify and remove software bugs",
      "Developed new, efficient and well-tested code for variety of different software projects",
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-gray-600 mb-2">{exp.company} | {exp.location}</p>
            <p className="text-gray-600 mb-4">{exp.period}</p>
            <ul className="list-disc pl-6">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray-700 mb-2">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience