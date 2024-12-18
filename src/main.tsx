import { StrictMode } from 'react'
import { Analytics } from '@vercel/analytics/next';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
      <Analytics/>
  </StrictMode>,
)
