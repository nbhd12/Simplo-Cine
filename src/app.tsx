import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import "./ui/global.css"
import { Header } from './ui/header/header'
import Homepage from './views/homePage'
import Moviepage from './views/moviesPage'
import ShowPage from './views/showsPage'
import DetailPage from './views/detailPage'
import CastPage from './views/castPage'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <BrowserRouter> 
    <Header/>
    <Routes> 
      <Route path="/" element={<Homepage/>} />
      <Route path="/movies" element={<Moviepage/>}/>
      <Route path="/shows" element={<ShowPage/>}/>
      <Route path="/:type/:id" element={<DetailPage/>} />
      <Route path="/person/:id" element={<CastPage/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);


