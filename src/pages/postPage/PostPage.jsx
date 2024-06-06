import React from 'react'
import "./post-page.css"
import PostHero from '../../features/postPage/postHero/PostHero'
import PostBody from '../../features/postPage/postContent/PostBody'
import { Helmet } from 'react-helmet'
import postData from '../../postData/postData'
import { useParams } from 'react-router-dom'

const PostPage = () => {
  const {postId} = useParams()

  const post = postData.find(post => post.id === Number(postId))

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.articleImg,
    "articleBody": post.intro,
    "author": {
        "@type": "Person",
        "name": post.author,
        "image": post.authorImg
    },
    "datePublished": post.date,
    "url": `https://www.ventmoir.com/posts/${postId}`
};

  return (
    <main className="post-page">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.intro} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.intro} />
        <meta property="og:url" content={`https://www.ventmoir.com/posts/${postId}`} />
        <meta property="og:image" content={post.articleImg} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Ventmoir Blog" />
        <meta property="og:author" content={post.author} />
        <meta property="article:published_time" content={post.date} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <PostHero />
      <PostBody />
    </main>
  )
}

export default PostPage
