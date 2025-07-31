import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import EventDemo from './EventDemo.jsx'
import Counter from './Counter.jsx'
import Sumdemo from './Sumdemo.jsx'
import Sum2 from './Sum2.jsx'
import Sum3 from './Sum3.jsx'
import Hooksdemo from './Hooksdemo.jsx'
import Sumfun from './Sumfun.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sumfun />
  </StrictMode>
)
