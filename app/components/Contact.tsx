import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react'

const ContactItem = ({ icon: Icon, title, content, link, directContact }:{icon:any,title:any,content:any,link?:any|'',directContact?:any|''}) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
    <Icon className="text-blue-600 w-6 h-6 mt-1 mr-4 flex-shrink-0" />
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
      {directContact && (
        <p className="text-blue-600 font-medium mt-2">{directContact}</p>
      )}
      {link && (
        <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 inline-block">
          {link.text}
        </a>
      )}
    </div>
  </div>
)

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          <ContactItem
            icon={MapPin}
            title="Location"
            content="Based in the vibrant tech hub of Hyderabad, India. Open to remote opportunities worldwide."
          />
          {/* <ContactItem
            icon={Phone}
            title="Phone"
            content="Available for calls during Indian business hours. Feel free to schedule a chat!"
            directContact="+91 9642429550"
          /> */}
          <ContactItem
            icon={Mail}
            title="Email"
            content="Drop me an email anytime. I'm always eager to discuss new opportunities and ideas."
            directContact="tripathi.987@gmail.com"
          />
          <ContactItem
            icon={Linkedin}
            title="LinkedIn"
            content="Connect with me professionally. Let's expand our network and explore potential collaborations."
            link={{
              url: "https://www.linkedin.com/in/tripathianil/",
              text: "View LinkedIn Profile"
            }}
          />
          <ContactItem
            icon={Github}
            title="GitHub"
            content="Check out my code repositories and contributions. Always working on exciting projects!"
            link={{
              url: "https://github.com/AnilTripathi",
              text: "Explore GitHub Projects"
            }}
          />
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-6">
            I'm always excited to take on new challenges and contribute to innovative projects. Whether you have a job opportunity, a project idea, or just want to connect, I'd love to hear from you!
          </p>
          <a
            href="mailto:tripathi.987@gmail.com"
            className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block"
          >
            Reach Out Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

