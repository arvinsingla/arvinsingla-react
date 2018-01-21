import React, { Fragment } from 'react'
import './Home.css'

const Home = ({
  drupalYears,
  javascriptYears,
  mediumUrl,
  posts
}) => {
  const hasPosts = posts.length > 0
  return (
    <div className="home">
      <div className="home-pane home-pane--javascript">
        <h3>Full time Javascript</h3>
        <p>I've spent the last {javascriptYears} years building scalable web applications with all the major frameworks including React, Ember, Angular, and Node</p>
      </div>
      <div className="home-pane home-pane--drupal">
        <h3>Drupal is my jam</h3>
        <p>Over {drupalYears} years of experience, <a href="https://ca.linkedin.com/in/arvinsingla" target="_blank" rel="noreferrer noopener">dozens of projects</a>, a handful of <a href="http://www.drupal.org/u/arvinsingla" target="_blank" rel="noreferrer noopener">open source modules</a>, and a few great presentations. I ♥ Drupal</p>
      </div>
      <div className="home-pane home-pane--medium">
        <h3>Latest Medium post</h3>
        {hasPosts &&
          <Fragment>
            <p>
              <a
                href={`${mediumUrl}/${posts[0].slug}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <strong>{posts[0].title}</strong>
              </a>
            </p>
            <p>{posts[0].subtitle} <a href={`${mediumUrl}/${posts[0].slug}`} target="_blank" rel="noreferrer noopener">Read more</a></p>
          </Fragment>
        }
        {!hasPosts &&
          <p>Unable to get latest post. Visit my <a href={mediumUrl} target="_blank" rel="noreferrer noopener">medium publication</a> to see all my articles</p>
        }
      </div>
    </div>
  )
}

export default Home
