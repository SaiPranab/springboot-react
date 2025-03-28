import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Sai from './sai'

createRoot(document.getElementById('root'))
.render(
  <StrictMode>
    {/* <App />  */}

    {/* Sai() => it will be treated as a value rather than component*/}

    {/* <Sai></Sai> */}

    <Sai />
  </StrictMode>,
)
