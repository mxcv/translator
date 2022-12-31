import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Translator from '../translator/Translator'
import History from '../history/History'
import Favorites from '../favorites/Favorites'
import logo from '../logo.svg'

function App() {
    return (
        <div>
            <header>
                <Navbar bg='light' variant='light'>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img src={logo} width='30' height='30' alt='logo' className='d-inline-block align-top' />
                            {' '}
                            Translator
                        </Navbar.Brand>
                        <Nav className='me-auto'>
                            <Nav.Link href='/history'>History</Nav.Link>
                            <Nav.Link href='/favorites'>Favorites</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
            <main className='mt-3'>
                <Container>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Translator />}></Route>
                            <Route path='/history' element={<History />}></Route>
                            <Route path='/favorites' element={<Favorites />}></Route>
                        </Routes>
                    </BrowserRouter>
                </Container>
            </main>
        </div>
    );
}

export default App;
