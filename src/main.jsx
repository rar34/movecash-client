import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
