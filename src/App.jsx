
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layout/mainLayout'
import { Frontpage } from './pages/frontpage/frontpage'
import { Login } from './pages/login/login'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />}>
          <Route index element={<Frontpage />} />
          <Route path='/forside' element={<Frontpage />} />
          <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App


