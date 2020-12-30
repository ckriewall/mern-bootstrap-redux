import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

// Wrap react-bootstrap elements in LinkContainer
// to simulate React Router Link tags

const Header = () => {
  return (
    <header>
      <Navbar bg='light' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>MERN, Redux, and Bootstrap</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Login
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/students'>
                <Nav.Link>
                  <i className='fas fa-user-friends'></i> Students
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
