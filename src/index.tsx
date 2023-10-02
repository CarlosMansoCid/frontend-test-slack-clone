import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// const DirectMessagesDashboard = lazy(()=>import('./pages/directMessagesDashboard/DirectMessagesDashboard.page'));
import DirectMessagesDashboard from './pages/directMessagesDashboard/DirectMessagesDashboard.page';
import PageLoader from './components/PageLoader/PageLoader';
import Protector from './components/Protector/Protector';
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
    element: <Protector><Dashboard/></Protector>,
  },
  {
    path: "/dashboard/dm/:id",
    element: <Protector><DirectMessagesDashboard/></Protector>,
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
    <Suspense fallback={<PageLoader/>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
