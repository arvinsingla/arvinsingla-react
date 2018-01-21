import React from 'react'
import './Blog.css'

const Blog = ({ posts, mediumUrl }) => {
  const hasPosts = posts.length > 0
  return (
    <div className="blog">
      {hasPosts &&
        posts.map((post) => {
          return (
            <div className="blog__item" key={post.slug} >
              <h3 className="blog__item__title">
                <a
                  href={`${mediumUrl}/${post.slug}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {post.title}
                </a>
              </h3>
              <div className="blog__item__date">{post.date}</div>
              <p className="blog__item__subtitle">{post.subtitle}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Blog
