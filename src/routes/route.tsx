import { createBrowserRouter, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MyForm from '../pages/myForm/MyForm';
import Root from '../pages/Root/Root';

function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops! Error from router</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return <div>Oops</div>;
  }
}

export const router = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: '/',
          element: <Root />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/myForm',
          element: <MyForm />,
        },
        {
          path: '*',
          element: <div>Page Not Found</div>,
        },
      ],
    },
  ],
  {}
);
