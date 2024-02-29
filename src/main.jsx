import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { AppTheme } from './theme/AppTheme.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <AppRouter /> 
        </AppTheme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
