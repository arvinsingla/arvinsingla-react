import React from 'react'
import './CV.css'

const CV = () => {
  return (
    <div className="cv">
      <div className="cv__intro">
        <h3>About Me</h3>
        <p>I am a full stack software engineer who works with teams of all sizes to build software for a wide range of organizations including startups, not-for-profits, and fortune 500 companies. I actively <a href="https://www.drupal.org/u/arvinsingla" target="_blank" rel="noreferrer noopener">contribute</a> to <a href="https://www.github.com/arvinsingla" target="_blank" rel="noreferrer noopener">open source</a>, write about <a href="http://www.medium.com/arvin-singla" target="_blank" rel="noreferrer noopener">technology</a>, experiment with <a href="https://medium.com/arvin-singla/apple-homekit-hacking-3d2902e7a1df#.vuvri5vqe" target="_blank" rel="noreferrer noopener">home automation</a>, and advocate for the <a href="https://medium.com/arvin-singla/how-good-are-canadian-streaming-video-services-7e4f7bade54d#.uw9c2f1hh" target="_blank" rel="noreferrer noopener">cord cutting</a> revolution.</p>
      </div>

      <div className="cv__tech">
        <h3>Tech Skills</h3>

        <div className="cv__tech__items">
          <div className="cv__tech__items__item">Javascript</div>
          <div className="cv__tech__items__item">React</div>
          <div className="cv__tech__items__item">Ember</div>
          <div className="cv__tech__items__item">AngularJS</div>
          <div className="cv__tech__items__item">Node</div>
          <div className="cv__tech__items__item">PHP</div>
          <div className="cv__tech__items__item">Drupal</div>
          <div className="cv__tech__items__item">MySql</div>
          <div className="cv__tech__items__item">HTML5</div>
          <div className="cv__tech__items__item">CSS3</div>
          <div className="cv__tech__items__item">SASS</div>
          <div className="cv__tech__items__item">Grunt</div>
          <div className="cv__tech__items__item">Gulp</div>
          <div className="cv__tech__items__item">Webdriver.io</div>
          <div className="cv__tech__items__item">QUnit</div>
          <div className="cv__tech__items__item">Jest</div>
          <div className="cv__tech__items__item">Webpack</div>
          <div className="cv__tech__items__item">Git</div>
          <div className="cv__tech__items__item">Docker</div>
        </div>
      </div>

      <div className="cv__resume">
        <h3>Career History</h3>

        <div className="cv__resume__item">
          <h4>Software Engineer @ <a className="color--blue" href="http://www.acquia.com">Acquia</a></h4>
          <div className="cv__resume__item__duration">Sept 2015 - Present</div>
          <div className="cv__resume__item__description">
            <ul>
              <li>Joined the Acquia Cloud UI team building production ready components in vanilla Javascript and AngularJS for Beta launch</li>
              <li>Joined the Acquia Lift UX team building production ready components in vanilla javascript and Ember for Beta and GA</li>
              <li>Championed initiative to improve DX by implementing our stack in docker</li>
            </ul>
          </div>
        </div>

        <div className="cv__resume__item">
          <h4>Web Developer @ <a className="color--orange" href="http://www.myplanet.com">Myplanet</a></h4>
          <div className="cv__resume__item__duration">Nov 2011 - Sept 2015</div>
          <div className="cv__resume__item__description">
            <ul>
              <li>Acted in the capacity of a Rōnin developer. I moved from project to project, working with different teams to meet critical deadlines</li>
              <li>Lead developer on multiple prototyping engagements in both Drupal and Javascript</li>
              <li>Worked with clients including Warner Music, Centurylink, Wyndham Worldwide, SpartanNash, and a number of fortune 500 companies</li>
              <li>Self started development of internal communication tools which lead to staff adoption and open source contributions</li>
            </ul>
          </div>
        </div>

        <div className="cv__page-break print-show"></div>

        <div className="cv__resume__item">
          <h4>Web Developer @ <a className="color--green" href="http://www.freeform.ca">Freeform Solutions</a></h4>
          <div className="cv__resume__item__duration">Nov 2009 - Sept 2011</div>
          <div className="cv__resume__item__description">
            <ul>
              <li>Acted as lead developer on a number of large Drupal and CiviCRM projects for not-for-profit organizations</li>
              <li>Lead initiatives to introduce Devops to the development teams to improve the developer experience</li>
              <li>Due to smaller team size I wore many hats on different projects acting as a developer, scrum master, QA, designer, and technical account manager</li>
            </ul>
          </div>
        </div>

        <div className="cv__resume__item">
          <h4>Freelance Drupal Developer</h4>
          <div className="cv__resume__item__duration">Jun 2007 - Jun 2013</div>
          <div className="cv__resume__item__description">
            <ul>
              <li>Worked on a number of solo and team development projects</li>
              <li>Focused on providing services to Not-for-proift organizations and small businesses</li>
              <li>Planning, architecting, design, theming, development, implementation, deployment, and training represent the wide range of services I have provided</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cv__education">
        <h3>Education</h3>
        <h4>University of Windsor</h4>
        <p>
          BSc, Computer Science<br/>
          2000 – 2005
        </p>
      </div>
    </div>
  )
}

export default CV
