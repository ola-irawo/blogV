import React from 'react'
import "./all-posts.css"
import BlogPosts from '../../features/allPosts/blogPosts/BlogPosts'
import { Helmet } from 'react-helmet'
import postData from '../../postData/postData'
import { logo } from '../../CONST/logo'

const AllPosts = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "url": "https://www.ventmoir.com/posts",
    "name": "Ventmoir Blog - All Posts",
    "description": "Explore insightful articles, interviews, and resources on mental health topics, including informative articles and updates about the Ventmoir platform.",
    "publisher": {
      "@type": "Organization",
      "name": "Ventmoir",
      "logo": {
        "@type": "ImageObject",
        "url": logo
      }
    },
    "blogPost": postData.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.intro.slice(0, 300).trim() + '...',
      "url": `https://www.ventmoir.com/posts/${post.id}`,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": post.date,
      "image": post.authorImg
    }))
  };

  return (
    <main>
      <Helmet>
        <title>Explore Insightful Mental Health Articles - Ventmoir</title>
        <meta name="description" content="Explore insightful articles, interviews, and resources on mental health topics, including informative articles and updates about the Ventmoir platform." />
        <meta property="og:title" content="Explore Insightful Mental Health Articles - Ventmoir" />
        <meta property="og:description" content="Explore insightful articles, interviews, and resources on mental health topics, including informative articles and updates about the Ventmoir platform." />
        <meta property="og:url" content="https://www.ventmoir.com/posts" />
        <meta property="og:image" content={logo} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ventmoir" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <BlogPosts />
    </main>
  )
}

export default AllPosts
