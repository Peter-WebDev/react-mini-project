import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import MediaAppLayout from './MediaAppLayout.tsx'
import HomePage from './pages/HomePage.tsx'
import MovieGenrePage from './pages/MovieGenrePage.tsx'
import MoviePage from './pages/MoviePage.tsx'
import MyFavPage from './pages/MyFavPage.tsx'
import LikedMoviesProvider from './providers/LikedMoviesProvider.tsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <LikedMoviesProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MediaAppLayout />}>
              <Route index element={<HomePage />} />
              <Route path='/movies/:categoryId' element={<MovieGenrePage />} />
              <Route path='/movie/:slug/:id' element={<MoviePage />} />
              <Route path='/my-list' element={<MyFavPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LikedMoviesProvider>
    </QueryClientProvider>
  </StrictMode>
);
