import React from 'react'
import "./recent-post.css"
import PostCard from '../../../components/postCard/PostCard'
import postData from '../../../postData/postData'
import { useNavigate } from 'react-router-dom'

const RecentPost = () => {
  const navigate = useNavigate()

  return (
    <section className="recent-post" itemtype="https://schema.org/Blog">
        <h2 className="recent-post" itemprop="name">Recent Post</h2>
        <section className="recent-post-content" itemprop="blogPost">
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
        </section>
    </section>
  )
}

export default RecentPost
