import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import AppMain from './AppMain'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app" element={<AppMain />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
