import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
const SignUpPage = lazy(()=>import('./pages/signup/SignUp.page'));
const LoginPage = lazy(()=>import('./pages/LoginPage/LoginPage.page'));
const Dashboard = lazy(()=>import('./pages/dashboard/Dashboard.page'));
const NotFoundPage = lazy(()=>import('./not-found'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: '*',
    element: <NotFoundPage/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<>'loading...'</>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
