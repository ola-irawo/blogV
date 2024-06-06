import React from 'react'
import "./blog-posts.css"
import PostCard from '../../../components/postCard/PostCard'
import postData from '../../../postData/postData'

const BlogPosts = () => {
  return (
    <section className="blog-posts" itemtype="https://schema.org/Blog">
      <h1 className="blog-post" itemprop="name">Latest Post</h1>
      <div className="blog-post-container" itemprop="blogPost">
        {postData.map(post => {
          return <PostCard
            key={post.id}
            title={post.title}
            intro={post.intro}
            author={post.author}
            authorImg={post.authorImg}
            date={post.date}
            postId={post.id}
          />
        })}
      </div>

    </section>
  )
}

export default BlogPosts
