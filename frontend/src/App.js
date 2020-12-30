import Header from './components/Header'
import Footer from './components/Footer'
import Students from './components/Students'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Route path='/students' component={Students} />
        </main>

        <Footer />
      </Router>
    </div>
  )
}

export default App
