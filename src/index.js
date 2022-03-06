import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { FavoritesContextProvider } from './store/favorites-context'

const appJsx = (
  <FavoritesContextProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>
)

ReactDOM.render(appJsx, document.getElementById('root'))
