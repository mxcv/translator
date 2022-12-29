import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Translator from '../translator/Translator';
import History from '../history/History';
import logo from '../logo.svg'

function App() {
    return (
        <div>
            <header>
                <Navbar bg='light' variant='light'>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img
                                alt=''
                                src={logo}
                                width='30'
                                height='30'
                                className='d-inline-block align-top' />
                            {' '}
                            Translator
                        </Navbar.Brand>
                        <Nav className='me-auto'>
                            <Nav.Link href='/history'>History</Nav.Link>
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
                        </Routes>
                    </BrowserRouter>
                </Container>
            </main>
        </div>
    );
}

export default App;
