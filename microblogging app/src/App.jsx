import Home from './pages/Home'
import FilmListings from './pages/FilmListings'
import Actors from './pages/Actors'
import Menu from './components/Menu'
import { Routes, Route } from "react-router-dom"
 
/**
 * App
 *
 * This will show a menu above each page 
 *  
 * @author first last
 */
function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/films" element={<FilmListings />}/>
        <Route path="/actors" element={<Actors />}/>
        <Route path="*" element={<p>Not found</p>}/>
      </Routes>
    </>
  )
}
 
export default App;