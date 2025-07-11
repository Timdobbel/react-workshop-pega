import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './router';

createRoot(document.querySelector('#app')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
