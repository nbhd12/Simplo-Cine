import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import "./ui/global.css"
import { Header } from './ui/header/header'
import Card from './ui/card/card'
import Homepage from './views/homePage'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <BrowserRouter> 
    <Header/>
    <Routes> 
      <Route path="/" element={<Homepage/>} />
      <Route />
      <Route />
      <Route />
    </Routes>
    </BrowserRouter>
    <Card />
  </StrictMode>
);


