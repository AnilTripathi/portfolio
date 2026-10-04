import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anil Kumar Tripathi - Lead Full Stack Software Engineer',
  description: 'Portfolio of Anil Kumar Tripathi, a Lead Full Stack Software Engineer with over 13 years of experience in designing and implementing robust web applications.',
  keywords: 'Software Engineer, Full Stack Developer, Spring Boot, React, Microservices, Hyderabad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Anil Kumar Tripathi" />
        <link rel="icon" href="/portfolio//favicon.ico" />
        <link rel="canonical" href="https://www.anilkumartripathi.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Anil Kumar Tripathi",
            "jobTitle": "Lead Full Stack Software Engineer",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "addressCountry": "India"
            },
            "email": "tripathi.987@gmail.com",
            "telephone": "+919642429550",
            "url": "https://www.anilkumartripathi.com",
            "sameAs": [
              "https://www.linkedin.com/in/tripathianil",
              "https://github.com/AnilTripathi"
            ]
          })
        }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

