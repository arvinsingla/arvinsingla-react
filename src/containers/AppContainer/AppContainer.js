import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { format } from 'date-fns'
import classNames from 'classnames'
import { Blog, Content, CV, Home, Footer, Header, Intro } from '../../components'
import './AppContainer.css'

const name = process.env.REACT_APP_NAME
const date = new Date()
const currentYear = date.getFullYear()
const drupalYears = currentYear - process.env.REACT_APP_DRUPAL_YEAR
const javascriptYears = currentYear - process.env.REACT_APP_JAVASCRIPT_YEAR
const mediumUrl = process.env.REACT_APP_MEDIUM
const mediumJSONUrl = process.env.REACT_APP_MEDIUM_JSON_URL
const JSON_HIJACKING_PREFIX = '])}while(1);</x>';

class AppContainer extends Component {
  state = {
    isLoaded: false,
    posts: []
  }

  componentDidMount() {
    fetch(mediumJSONUrl)
      .then((response) => {
        return response.text()
      })
      .then((data) => {
        const jsonData = JSON.parse(data.replace(JSON_HIJACKING_PREFIX, ''))
        const posts = jsonData.payload.posts.map((post) => {
          return {
            date: format(new Date(post.firstPublishedAt), 'MMMM DD, YYYY'),
            title: post.title,
            subtitle: post.virtuals.subtitle,
            slug: post.uniqueSlug
          }
        })
        this.setState({
          posts,
          isLoaded: true
        })
      })
      .catch(() => {
        console.log('Could not fetch medium stories')
        this.setState({
          isLoaded: true
        })
      })
  }

  render() {
    const { posts, isLoaded } = this.state
    const appClassNames = classNames('app-container', {
      'app-container--loaded': isLoaded
    })
    return (
      <div className={appClassNames}>
        <Header name={name} />
        <Intro />
        <Content>
          <Route exact path="/" render={() => {
            return (
              <Home
                drupalYears={drupalYears}
                javascriptYears={javascriptYears}
                mediumUrl={mediumUrl}
                posts={posts}
              />
            )
          }} />
          <Route exact path="/cv" render={() => {
            return (
              <CV />
            )
          }} />
          <Route exact path="/blog" render={() => {
            return (
              <Blog posts={posts} mediumUrl={mediumUrl} />
            )
          }} />
        </Content>
        <Footer currentYear={currentYear} />
      </div>
    )
  }
}

export default AppContainer
