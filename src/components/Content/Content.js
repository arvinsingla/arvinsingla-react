import React from 'react'
import './Content.css'

const Content = ({ children }) => {
  return (
    <section className="content">
      <div className="content__wrapper">
        {children}
      </div>
    </section>
  )
}

export default Content
