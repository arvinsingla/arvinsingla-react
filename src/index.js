import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import WebFont from 'webfontloader'
import AppContainer from './containers/AppContainer'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'

const MOUNT_NODE = document.getElementById('root')

WebFont.load({
  google: {
    families: ['Caveat:700', 'latin']
  }
})

ReactDOM.render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>
  ,MOUNT_NODE
)
registerServiceWorker()
