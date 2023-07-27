import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import reportWebVitals from './Utilities/reportWebVitals';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage.jsx';
import { Score } from './Components/Score/Score';
import { Root } from './Navigation/root';
import { Game } from './Components/Game/Game';
import { Controls } from './Components/Controls/Controls';
import { Instructions } from './Navigation/Instructions';

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Instructions />,
        errorElement: <ErrorPage />,
      },
      {
        path: "play",
        element: <Game />,
        errorElement: <ErrorPage />,
      },
      {
        path: "settings",
        element: <Controls />,
        errorElement: <ErrorPage />,
      },
      {
        path: "score",
        element: <Score />,
        errorElement: <ErrorPage />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
