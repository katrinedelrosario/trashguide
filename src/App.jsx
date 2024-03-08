import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layout/mainLayout';
import { Frontpage } from './pages/frontpage/frontpage';
import { Login } from './pages/login/login';
import { Sortingpage } from './pages/sortingpage/sortingpage';
import { Stationspage } from './pages/stationspage/stationspage';
import { Orderpage } from './pages/orderpage/orderpage';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />}>
          <Route index element={<Frontpage />} />
          <Route path='/sorting' element={<Sortingpage/>} />
          <Route path='/stations' element={<Stationspage />} />
          <Route path='/order' element={<Orderpage />} />
          <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App


