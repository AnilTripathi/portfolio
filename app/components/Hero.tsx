import Image from 'next/image'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-white py-3">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Anil Kumar Tripathi</h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-blue-100">Lead Full Stack Software Engineer</h2>
          <p className="text-xl mb-8 text-gray-200">With over 13 years of experience in designing and implementing robust web applications using Spring Boot, React, and Microservices.</p>
          <a href="#contact" className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-400 transition duration-300 shadow-lg shadow-blue-500/30">Get in Touch</a>
        </div>
        <div className="md:w-1/2">
          <Image src="/portfolio/profile-image.jpeg" alt="Anil Kumar Tripathi - Lead Full Stack Software Engineer" width={250} height={250} className="rounded-full mx-auto shadow-xl" />
        </div>
      </div>
    </section>
  )
}

export default Hero

