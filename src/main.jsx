import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout.jsx'
import { PersonajeProvider } from './context/PersonajeProvider.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Episodios from './components/Episodios.jsx'
import NotFound from './pages/NotFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PersonajeProvider>
      <Layout>
        <Routes>
           <Route path='/' element={<App />}/>
           <Route path='/Episodios' element= {<Episodios />} />
           <Route path='*' element={<NotFound />} />
        </Routes>
     </Layout>
    </PersonajeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
