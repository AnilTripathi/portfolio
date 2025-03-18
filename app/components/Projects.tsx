import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    "title": "Wellness360 Rest API",
    "client": "Company Product",
    "url": null,
    "application": "Healthcare System REST API",
    "duration": "-",
    "description": "This is a healthcare system REST API, an extended version of Wellness360. Used by User Portal and mobile app.",
    "role": "Software Developer",
    "responsibilities": "Setup Spring Boot Project, Integrate JWT Auth Token flow, Enable SSO with SAML, 3rd Party client OAuth2 provider implementation, Deployment to the Development server (AWS), Code merging, committing, and reviewing.",
    "tools": "Spring Boot, MySQL, IntelliJ IED",
    "category": "Professional"
  },
  {
    "title": "Wellness360 Frontend",
    "client": "Company Product",
    "url": "https://www.livewellness360.com",
    "application": "Health And Wellness Platform Frontend",
    "duration": "-",
    "description": "This is a Health And Wellness platform fronend.",
    "role": "Software Developer",
    "responsibilities": "Setup And Configur NextJs(ReactJs) Project, Integrate JWT Auth Token flow with Rest API.",
    "tools": " NextJs(ReactJs), VS Code IDE",
    "category": "Professional"
  },
  {
    "title": "Wellness Analytics",
    "client": "Company Product",
    "url": null,
    "application": "Analytics System",
    "duration": "-",
    "description": "This is an analytics system where clients can view different types of reports and comparisons.",
    "role": "Software Developer",
    "responsibilities": "Setup Project, Integrate JWT Auth Token flow, Consume REST API to show data, Code merging, committing, and reviewing.",
    "tools": "Spring Boot (REST API), Angular, MySQL, Eclipse",
    "category": "Professional"
  },
  {
    "title": "Wellness360",
    "client": "Company Product",
    "url": null,
    "application": "Healthcare System",
    "duration": "-",
    "description": "This is a healthcare system where users can track their fitness. Users can sync 3rd party apps and devices like Fitbit, Jawbone, Moves, etc. The system has a food plan for weight maintenance or loss, providing calorie intake recommendations.",
    "role": "Software Developer",
    "responsibilities": "Integration of Bootstrap UI Framework, Design Database, Export trackers data REST API, 3rd Party client OAuth2 provider implementation, Deployment to the Development server (AWS), Code merging, committing, and reviewing.",
    "tools": "Spring MVC, Ajax, jQuery, MySQL, Eclipse",
    "category": "Professional"
  },
  {
    "title": "iFittracker",
    "client": "Company Product",
    "url": null,
    "application": "Fitness Tracking Website",
    "duration": "-",
    "description": "This is a fitness tracking website where users can sync steps, calories, active minutes, and distance from fitness bands to the server using iOS and Android apps. Users can also sync sleep information and add manual activities like running, walking, swimming, etc.",
    "role": "Software Developer",
    "responsibilities": "Integration of Bootstrap UI Framework, Export trackers data REST API, 3rd Party client OAuth2 provider implementation, Deployment to the Development server (AWS), Code merging, committing, and reviewing.",
    "tools": "Spring MVC, Ajax, jQuery, MySQL, Eclipse",
    "category": "Professional"
  },
  {
    "title": "myHana",
    "client": "My Hana",
    "url": null,
    "application": "Healthcare System",
    "duration": "-",
    "description": "This is a healthcare system where users can track their fitness and take care of their relatives.",
    "role": "Software Developer",
    "responsibilities": "Design and development of features based on the User stories defined by BAs, Provide support during releases and issues.",
    "tools": "Spring MVC, Ajax, jQuery, MySQL, Eclipse",
    "category": "Professional"
  },
  {
    title: 'Mail Server',
    client: 'For Company Use',
    url: null,
    application: 'Send and Receive Mails, Chat',
    duration: 'Nov 2011 - Dec 2012',
    description: 'Developed a mail server with attachment, priority, and chat modules.',
    role: 'Database Designer and Project Developer',
    responsibilities: 'Coding and implementation.',
    tools: '.Net 3.5, VS 2010, SQL Server 2008',
    category: 'Professional',
  },
  {
    title: 'Touchindia Bazaar',
    client: 'Touch India Bazaar Gwalior',
    url: 'https://www.touchindiabazaar.com',
    application: 'Shopping website with chain system business',
    duration: 'Jan 2012 - Feb 2012',
    description: 'Online shopping with customer and commission management.',
    role: 'Database Designer and Project Developer',
    responsibilities: 'Coding and implementation.',
    tools: '.Net 3.5, VS 2010, SQL Server 2008',
    category: 'Professional',
  },
  {
    title: 'JB Bazaar',
    client: 'JEEVAN BHARTI',
    url: 'https://jbbazar.com',
    application: 'Web Application',
    duration: 'Mar 2012 - Apr 2012',
    description: 'Web application for firm information management.',
    role: 'Database Designer and Project Developer',
    responsibilities: 'Coding, implementation, database.',
    tools: '.Net 4.0, VS 2010, SQL Server 2008',
    category: 'Professional',
  },
  {
    title: 'School Management',
    client: 'TSS International School Morena',
    url: 'https://tssinternational.org',
    application: 'Web Application',
    duration: 'Apr 2012 - May 2012',
    description: 'Marks and fees management modules.',
    role: 'Database Designer and Project Developer',
    responsibilities: 'Coding, implementation, database.',
    tools: '.Net 4.0, VS 2010, SQL Server 2008',
    category: 'Professional',
  },
  {
    title: 'Real Estate',
    client: 'Shree Ji Construction Pvt. Ltd',
    url: null,
    application: 'Web Application',
    duration: 'May 2012 - Oct 2012',
    description: 'Stock, property, and plot information management with images.',
    role: 'Database Designer and Project Developer',
    responsibilities: 'Coding, implementation, database.',
    tools: '.Net 4.0, VS 2010, SQL Server 2008',
    category: 'Professional',
  },
  {
    title: 'College Management',
    client: 'AS Company Product',
    url: null,
    application: 'Web Application',
    duration: 'Oct 2012 - Apr 2013',
    description: 'Employee, student, fees, and transport management.',
    role: 'Database Designer and Project Developer',
    responsibilities: 'Coding, implementation, database.',
    tools: '.Net 4.0, VS 2010, SQL Server 2008',
    category: 'Professional',
  },
  {
    title: 'Online Shopping',
    client: 'Dummy',
    url: null,
    application: 'Online Shopping',
    duration: 'Jun 2007 - Dec 2007',
    description: 'Stock and user profile management.',
    role: 'Database Designer and Project Developer',
    responsibilities: 'Requirement analysis, coding, implementation.',
    tools: '.Net 2.5, VS 2005, SQL Server 2000',
    category: 'Academic',
  },
  {
    title: 'Online Library',
    client: 'Dummy',
    url: null,
    application: 'Online Library',
    duration: 'Jan 2008 - Feb 2008',
    description: 'Book stock and user profile management.',
    role: 'Database Designer and Project Developer',
    responsibilities: 'Requirement analysis, coding, implementation.',
    tools: 'Java Struts 1.2, MySQL (My Eclipse)',
    category: 'Academic',
  },
  {
    title: 'Employee Salary Management',
    client: 'Dummy',
    url: null,
    application: 'Employee Salary with Pay Slip',
    duration: 'Mar 2008 - Apr 2008',
    description: 'Employee salary information management.',
    role: 'Database Designer and Project Developer',
    responsibilities: 'Requirement analysis, coding, implementation.',
    tools: 'Java Struts 1.2, MySQL (My Eclipse)',
    category: 'Academic',
  },
  {
    title: 'Face Emotion Recognition',
    client: 'Dummy',
    url: null,
    application: 'Face Emotion Recognition',
    duration: 'Jan 2008 - Aug 2008',
    description: 'Face expression recognition from images.',
    role: 'Database Designer and Project Developer',
    responsibilities: 'Requirement analysis, coding, implementation.',
    tools: '.Net 3.5, VS 2010, SQL Server 2005',
    category: 'Academic',
  },
  {
    title: 'Database Converter',
    client: 'Dummy',
    url: null,
    application: 'Database Converter',
    duration: 'Jan 2009 - Apr 2009',
    description: 'Database conversion (Oracle, SQL Server 2005, MS-Access, MySQL).',
    role: 'Database Designer and Project Developer',
    responsibilities: 'Requirement analysis, coding, implementation.',
    tools: '.Net 3.5, VS 2010, SQL Server 2005, Java Swing, Servlet',
    category: 'Academic',
  },
  {
    title: 'Cricket Scoreboard',
    client: 'Dummy',
    url: null,
    application: 'Cricket Scoreboard',
    duration: 'Jun 2009 - Jul 2009',
    description: 'Data entry and display modules for a cricket scoreboard.',
    role: 'Database Designer and Project Developer',
    responsibilities: 'Requirement analysis, coding, implementation.',
    tools: 'Java (Servlet, JSP), SQL Server 2005',
    category: 'Academic',
  },
  {
    title: 'Mobile Tracking (No GPS)',
    client: 'Numericinfosystems',
    url: null,
    application: 'Mobile Tracking',
    duration: 'Aug 2010 - Dec 2010',
    description: 'Mobile tracking using GSM localization without GPS.',
    role: 'Database Designer and Project Developer',
    responsibilities: 'Requirement analysis, coding, implementation.',
    tools: '.Net 3.5, VS 2010, SQL Server 2005',
    category: 'Professional',
  },
  {
    title: 'Wayofsli.com',
    client: 'wayofsli (Numericinfosystems)',
    url: 'www.wayofsli.com',
    application: 'Multi-marketing firm website',
    duration: 'Jan 2010 - May 2010',
    description: 'Customer management in a binary tree structure and payment module.',
    role: 'Database Designer and Project Developer',
    responsibilities: 'Requirement analysis, coding, tree and payment module.',
    tools: '.Net 3.5, VS 2010, SQL Server 2005',
    category: 'Professional',
  },
];

const Projects = () => {
  const professionalProjects = projectsData.filter((project) => project.category === 'Professional');
  const academicProjects = projectsData.filter((project) => project.category === 'Academic');

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="text-gray-700">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Projects</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {professionalProjects.map((project) => (
            <div key={`dv${project.title}`} className="bg-white p-6 rounded-lg shadow-md">
              <ProjectCard key={project.title} project={project} />
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Academic Projects</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {academicProjects.map((project) => (
            <div key={`dv${project.title}`} className="bg-white p-6 rounded-lg shadow-md">
              <ProjectCard key={project.title} project={project} />
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

