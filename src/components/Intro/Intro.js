import React from 'react'
import './Intro.css'

const Intro = ({ test }) => {
  return (
    <section className="intro">
      <h2 className="intro__title">
        A Toronto based Software Developer<br/>
        crafting applications in <span className="color--green">Javascript</span> and <span className="color--blue">Drupal</span>
      </h2>
      {test}
    </section>
  )
}

export default Intro
