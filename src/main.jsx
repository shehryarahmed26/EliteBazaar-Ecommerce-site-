import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartContextProvider, { CartContext } from './assets/Context/CartContext.jsx'
import Authcnontextprovider from './assets/Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authcnontextprovider>
    <CartContextProvider>
    <App />
    </CartContextProvider>
    </Authcnontextprovider>
  </StrictMode>,
)
