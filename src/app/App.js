import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Translator from '../translator/Translator'
import History from '../history/History'
import Favorites from '../favorites/Favorites'
import logo from './logo.svg'

function App() {
    return (
        <BrowserRouter>
            <header>
                <Navbar bg='light' variant='light'>
                    <Container>
                        <Navbar.Brand as={Link} to='/'>
                            <img src={logo} width='30' height='30' alt='logo' className='d-inline-block align-top' />
                            {' '}
                            Translator
                        </Navbar.Brand>
                        <Nav className='me-auto'>
                            <Nav.Link as={Link} to='/history'>History</Nav.Link>
                            <Nav.Link as={Link} to='/favorites'>Favorites</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
            <main className='mt-3'>
                <Container>
                        <Routes>
                            <Route path='/' element={<Translator />}></Route>
                            <Route path='/history' element={<History />}></Route>
                            <Route path='/favorites' element={<Favorites />}></Route>
                        </Routes>
                </Container>
            </main>
        </BrowserRouter>
    );
}

export default App;
