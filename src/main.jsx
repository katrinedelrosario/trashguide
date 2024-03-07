import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../index.css'
import { SectionProvider } from './providers/sectionProvider.jsx'
import { AuthProvider } from './providers/useAuth.jsx'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <SectionProvider>
      <App />
    </SectionProvider>
    </AuthProvider>
  </React.StrictMode>,
)
