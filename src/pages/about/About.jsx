import React from 'react'
import AboutBrand from '../../features/about/aboutBrand/AboutBrand'
import AboutHero from '../../features/about/aboutHero/AboutHero'
import { Helmet } from 'react-helmet'
import { logo } from '../../CONST/logo'

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Ventmoir",
      "url": "https://www.ventmoir.com/",
      "description": "Welcome to Ventmoir - A supportive and inclusive space for mental health journeys, where individuals can safely express their feelings, share experiences, and receive the support they need in their mental health journeys."
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ventmoir",
      "logo": {
        "@type": "ImageObject",
        "url": logo
      }
    }
  };

  return (
    <main>
      <Helmet>
        <title>About - Ventmoir</title>
        <meta name="description" content="Welcome to Ventmoir - A supportive and inclusive space  space for mental health journeys, where individuals can safely express their feelings, share experiences, and receive the support they need in their mental health journeys." />
        <meta property="og:title" content="About - Ventmoir" />
        <meta property="og:description" content="Welcome to Ventmoir - A supportive and inclusive space for mental health journeys, where individuals can safely express their feelings, share experiences, and receive the support they need in their mental health journeys." />
        <meta property="og:url" content="https://www.ventmoir.com/about" />
        <meta property="og:image" content={logo} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ventmoir" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <AboutHero />
      <AboutBrand />
    </main>
  )
}

export default About
