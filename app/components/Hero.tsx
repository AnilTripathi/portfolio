import Image from 'next/image'

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Anil Kumar Tripathi</h1>
          <h2 className="text-2xl md:text-3xl mb-4">Lead Full Stack Java Developer</h2>
          <p className="text-xl mb-8">With over 13 years of experience in designing and implementing robust web applications using Spring Boot, React, and Microservices.</p>
          <a href="#contact" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">Get in Touch</a>
        </div>
        <div className="md:w-1/2">
          <Image src="/portfolio/profile-image.jpeg" alt="Anil Kumar Tripathi - Lead Full Stack Java Developer" width={400} height={400} className="rounded-full mx-auto" />
        </div>
      </div>
    </section>
  )
}

export default Hero

