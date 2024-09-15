import AudioPlayer from "./pages/Audio"
import Home from "./pages/Home"
import Learn from "./pages/Learn"
import Pdf from "./pages/Pdf"
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
