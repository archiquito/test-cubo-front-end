import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import { HomeContainer } from './views/Home/HomeContainer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomeContainer />
  </StrictMode>,
)
