import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import MediaAppLayout from './MediaAppLayout.tsx'
import HomePage from './pages/HomePage.tsx'
import MovieGenrePage from './pages/MovieGenrePage.tsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MediaAppLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/movie/:categoryId' element={<MovieGenrePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
