import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import MediaAppLayout from './MediaAppLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MediaAppLayout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
