import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import StartPage from './components/StartPage';

export const router = createBrowserRouter([
  {
    path: 'preview',
    element: <App />,
    children: [
      {
        path: '/preview',
        element: <StartPage />,
      },
      {
        path: '/preview/object/:id',
        element: <div>object id</div>,
      },
    ],
  },
]);
