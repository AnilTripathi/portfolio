const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    university: "RGPV University",
    location: "Bhopal",
    year: "Jun-2011"
  },
  {
    degree: "Bachelor of Computer Science (BCA)",
    university: "MCRPV University",
    location: "Bhopal",
    year: "Jun-2008"
  }
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-gray-600 mb-1">{edu.university}</p>
              <p className="text-gray-600 mb-1">{edu.location}</p>
              <p className="text-gray-600">Graduated: {edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

