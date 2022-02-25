import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import BeersPage from './pages/Beers'
import NewBeerPage from './pages/NewBeer'
import RandomBeerPage from './pages/RandomBeer'
import ErrorPage from './pages/ErrorPage'

import { Routes, Route } from 'react-router-dom'

import beersData from './projects-data.json'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* <Route  path="/" element={ <HomePage /> } /> */}

        <Route path="/" element={<HomePageWithNavigate />} />

        <Route path="/beers" element={<BeersPage beers={beersData} />} />

        <Route path="/new-beer" element={<NewBeerPage />} />

        <Route path="/random-beer" element={<RandomBeerPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
