import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import '@/index.css';
import AppLayout from '@/layouts/AppLayout.jsx';
import Home from '@/pages/Home.jsx';
import Blog from '@/pages/Blog.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/content/blog/:slug/:md" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
