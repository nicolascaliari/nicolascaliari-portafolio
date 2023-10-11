
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Contact from './pages/Contact'
import Presentation from './pages/Presentation'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {
  return (
    <div>
      <NavBar />
      <Presentation />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
