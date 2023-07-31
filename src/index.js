import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './reduxStore/store'
import reportWebVitals from './Utilities/reportWebVitals'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import { Score } from './Components/Score/Score'
import { Root } from './Navigation/root'
import { Game } from './Components/Game/Game'
import { Controls } from './Components/Controls/Controls'
import { Instructions } from './Components/Instructions/Instructions'

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Instructions />
          },
          {
            path: 'play',
            element: <Game />
          },
          {
            path: 'settings',
            element: <Controls />
          },
          {
            path: 'score',
            element: <Score />
          },
          {
            path: '*',
            element: <ErrorPage />
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
