import Header from './components/Header'
import Footer from './components/Footer'
import Students from './components/Students'

import { Container } from 'react-bootstrap'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/students' component={Students} />
        </Container>
      </main>

      <Footer />
    </Router>
  )
}

export default App
