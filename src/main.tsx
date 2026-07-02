import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ElAvellanoApp} from './ElAvellanoApp.tsx'
import { initMetaPixel } from './lib/metaPixel.ts';


initMetaPixel();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ElAvellanoApp />
  </StrictMode>,
)
