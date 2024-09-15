import AudioPlayer from "./pages/Audio.jsx"
import Home from "./pages/Home.jsx"
import Learn from "./pages/Learn.jsx"
import Pdf from "./pages/Pdf.jsx"
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/learn" element={<Learn/>}/>
            <Route path="/pdf" element={<Pdf/>}/>
            <Route path="/audio" element={<AudioPlayer/>}/>
            <Route path="/" element={<Home/>}/>
            
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
