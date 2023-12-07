
import PetDetails from './pages/PetDetails';
import PetFilter from './pages/PetFilter';
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<PetFilter />} />
      <Route path='/petfilter' element={<PetFilter />} />
      <Route path='/petfilter/:id' element={<PetDetails />} />
    </Routes>
  )
}

export default App;
