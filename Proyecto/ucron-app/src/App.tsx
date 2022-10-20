import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Admin } from './pages/Admin'
import { Devs } from './pages/Devs'
import { Finanzas } from './pages/Finanzas'
import { Home } from './pages/Home'
import { Publica } from './pages/Publica'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Publica/>} />
          {/* <Route path="" element={<Finanzas/>} /> */}
          <Route path="administradores" element={<Admin/>} />
          <Route path="desarolladores" element={<Devs/>} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There is nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
