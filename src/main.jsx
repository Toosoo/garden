import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Canvas } from '@react-three/fiber'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas camera={{
      fov:60,
      near:.1,
      far:50,
    }}>
    <App />
    </Canvas>
  </React.StrictMode>,
)
