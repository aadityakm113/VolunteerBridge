import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './components/landing/Landing'

const App = () => {
  return (
    <Router>
      <div className='page'>
        <Landing />
        
      </div>
    </Router>
  )
}

export default App