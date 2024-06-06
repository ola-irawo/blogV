import React from 'react'
import Hero from '../../features/home/hero/Hero'
import RecentPost from '../../features/home/recentPost/RecentPost'
import Event from '../../components/event/Event'
import { Helmet } from "react-helmet"
import { logo } from '../../CONST/logo'

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Ventmoir",
    "description": "Discover insightful articles, resources, and events to help you in your mental health journey",
    "url": "https://www.ventmoir.com/",
    "mainEntity": {
      "@type": "Blog",
      "name": "Ventmoir Blog",
      "description": "Discover insightful articles, resources, and events to help you in your mental health journey",
      "url": "https://www.ventmoir.com/",
      "publisher": {
        "@type": "Organization",
        "name": "Ventmoir",
        "logo": {
          "@type": "ImageObject",
          "url": logo
        }
      }
    }
  };

  return (
    <main>
      <Helmet>
        <title>Bridging the gap between social media and mental health | Ventmoir Blog</title>
        <meta name="description" content="Discover insightful articles, resources, and events to help you in your mental health journey" />
        <meta name="keywords" content="mental health, support, community, events" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ventmoir | Blog" />
        <meta property="og:description" content="Discover insightful articles, resources, and events to help you in your mental health journey" />
        <meta property="og:url" content="https://www.ventmoir.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logo} />
        <meta property="og:site_name" content="Ventmoir" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Hero />
      <RecentPost />
      <Event />
    </main>
  )
}

export default Home
