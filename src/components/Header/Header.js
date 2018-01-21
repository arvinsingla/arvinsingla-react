import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from './arvin-avatar.jpg'
import './Header.css'

const Header = ({ name }) => {
  return (
    <header className="header">
      <h1 className="header__title">
        <NavLink to="/">{name}</NavLink>
      </h1>
      <NavLink to="/"><img className="header__avatar" src={avatar} title="Arvin" alt="Arvin's Avatar" /></NavLink>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__item print-hide">
            <NavLink to="/cv">cv</NavLink>
          </li>
          <li className="header__nav__list__item print-hide">
            <NavLink to="/blog">blog</NavLink>
          </li>
          <li className="header__nav__list__item print-hide">
            <a
              href="http://www.github.com/arvinsingla"
              title="View my github profile"
              target="_blank"
              rel="noreferrer noopener"
            >
              github
            </a>
          </li>
          <li className="header__nav__list__item print-show">
            Toronto
          </li>
          <li className="header__nav__list__item print-show">
            &middot;
          </li>
          <li className="header__nav__list__item print-show">
            <a href="tel:1-647-864-6564">647-864-6564</a>
          </li>
          <li className="header__nav__list__item print-show">
            &middot;
          </li>
          <li className="header__nav__list__item print-show">
            <a href="mailto:me@arvinsingla.com">me@arvinsingla.com</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
