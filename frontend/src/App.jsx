import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import CursorLight from './components/CursorLight'
import ClickRipple from './components/ClickRipple'

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <CursorLight theme={theme} />
        <ClickRipple />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />
          <Route path="/resume" element={<Resume theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
        </Routes>
        <Footer theme={theme} />
      </div>
    </Router>
  )
}

export default App

