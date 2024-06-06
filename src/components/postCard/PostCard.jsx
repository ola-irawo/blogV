import React from 'react'
import "./post-card.css"
import articleImg from "./w.png"
import { NavLink, useNavigate } from 'react-router-dom'

const PostCard = ({title, intro, author, authorImg, date, postId}) => {
    const navigate = useNavigate()
  return (
    <article className="post-card-container" itemtype="https://schema.org/BlogPosting" onClick={() => navigate(`/posts/${postId}`)}>

        <section className="post-card-content">
            <img src={articleImg} className="post-img" alt="post" itemprop="image" />

            <div className="post-card-details">
                <h3 className="post-name" itemprop="headline">{title}</h3>  
                <p className="post-content" itemprop="articleBody">{intro?.slice(0, 300).trim()}...</p>
                {/* <p className="post-content">{intro}</p> */}
            </div>
        </section>
        
        <NavLink to={`/posts/${postId}`} className="post-card-read-more" itemprop="url">
            Read more
        </NavLink>

        <footer className="post-card-author-info">
            <div>
                <img src={authorImg} className="post-card-author" alt={author} itemprop="author" />
                <h4 className="past-card-author-name">{author}</h4>
            </div>

            <time datetime={date} className="post-date" itemprop="datePublished">{date}</time>
        </footer>
    </article>
  )
}

export default PostCard
