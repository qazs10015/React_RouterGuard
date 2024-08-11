import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
// import './App.css';
import { router } from './routes/route';

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <RouterProvider router={router}></RouterProvider>
    </ErrorBoundary>
  );
}

export default App;
