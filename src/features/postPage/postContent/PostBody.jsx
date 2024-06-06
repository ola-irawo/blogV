import React from 'react'
import "./post-body.css"
import hero from "../postHero/w.png"
import postData from "../../../postData/postData.js"
import { useParams } from 'react-router-dom'

const PostBody = () => {
  const {postId} = useParams()

  const post = postData.find(post => post.id === Number(postId))
  
  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <section className="post-body">
      <div>
        <h1 className="post-title">{post.title}</h1>

        <section className="post-data">

          <img src={hero} className="post-page" alt="" />

          <section className="post-content">
            <article>
              {post.content.map(post => {
                return <>
                  <p className="post-text">{post.intro}</p>
                  <h2 className="post-subheading">{post.subheading}</h2>
                  {
                  Array.isArray(post.content)
                    ? 
                      <ul className="post-list">
                        {post.content.map(content => {
                          return <li className="post-list-item">
                            <h3 className="post-list-title">{content.title}</h3>
                            <p className="post-list-description">{content.description}</p>
                          </li>
                        })}
                      </ul>
                    :
                      <p className="post-text">{post.content}</p> 
                  }
                </>
              })}

              <p className="post-text">{post.conclusion}</p>
            </article>
            
            <footer className="post-body-author-info">
              <div>
                <img src={post.authorImg} className="post-body-author" alt={post.author} />
                <h4 className="past-body-author-name">{post.author}</h4>
              </div>

              <time datetime={post.date} className="post-body">{post.date}</time>
            </footer>
          </section>
        </section>
      </div>
    </section>
  )
}

export default PostBody
