import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './errorPage.jsx';
import { Score } from './Components/Score/Score';
import { Root } from './routes/root';
import { Game } from './Components/Game/Game';
import { Controls } from './Components/Controls/Controls';
import { Instructions } from './routes/Instructions';

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
], {
  // basename: "/talking-circles",
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
