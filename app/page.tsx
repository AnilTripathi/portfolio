import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from './components/Education'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'Anil Kumar Tripathi - Lead Full Stack Java Developer Portfolio',
  description: 'Explore the portfolio of Anil Kumar Tripathi, a seasoned Lead Full Stack Java Developer with expertise in Spring Boot, React, and Microservices. Based in Hyderabad, India.',
  openGraph: {
    title: 'Anil Kumar Tripathi - Lead Full Stack Java Developer',
    description: 'Portfolio of Anil Kumar Tripathi, showcasing 13+ years of experience in full stack development.',
    url: 'https://www.anilkumartripathi.com',
    siteName: 'Anil Kumar Tripathi Portfolio',
    images: [
      {
        url: 'https://www.anilkumartripathi.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anil Kumar Tripathi - Lead Full Stack Java Developer',
    description: 'Explore the portfolio of Anil Kumar Tripathi, a seasoned Full Stack Java Developer.',
    images: ['https://www.anilkumartripathi.com/twitter-image.jpg'],
  },
}

