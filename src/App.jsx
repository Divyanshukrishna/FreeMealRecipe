import { useState } from 'react'
import './App.css'
import MainPage from './components/MainPage'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import MealInfo from './components/MealInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/:mealid' element={<MealInfo />} />
    </Routes>
    </>
  )
}

export default App
