import React from 'react'
import "./contact.css"
import ContactForm from '../../features/contact/contactForm/ContactForm'
import ContactHero from '../../features/contact/contactHero/ContactHero'
import { Helmet } from 'react-helmet'
import { logo } from '../../CONST/logo'

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "headline": "Get in Touch with Us for Mental Health Support | Ventmoir Blog",
    "description": "At Venmoir, we are dedicated to providing a supportive and safe space for mental health discussions. If you have any questions, need assistance, or want to share your feedback, please feel free to reach out to us.",
    "image": logo,
    "potentialAction": {
      "@type": "CommunicateAction",
      "name": "Send a message",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "mailto:contactventmoir@gmail.com"
      }
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "name": "Follow us on X (formerly known as Twitter)",
        "url": "https://x.com/ventmoir",
        "image": "https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-1-852x479.jpg"
      },
      {
        "@type": "ContactPoint",
        "name": "Follow us on LinkedIn",
        "url": "https://www.linkedin.com/company/vent-moir/",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
      }
    ]
  };

  return (
    <main>
      <Helmet>
        <title>Get in Touch with Us for Mental Health Support | Ventmoir Blog</title>
        <meta name="description" content="Get in touch with us for mental health resources, partnership opportunities, feedback, and support. Reach out today" />
        <meta property="og:title" content="Get in Touch with Us for Mental Health Support | Ventmoir Blog" />
        <meta property="og:description" content="Get in touch with us for mental health resources, partnership opportunities, feedback, and support. Reach out today." />
        <meta property="og:url" content="https://www.ventmoir.com/contact" />
        <meta property="og:image" content="https://i.ibb.co/K9kYY5H/v.jpg" /> {/* Replace with your actual image URL */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ventmoir Blog" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <ContactHero />
      <ContactForm />
    </main>
  )
}

export default Contact
