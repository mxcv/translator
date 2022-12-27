import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Translator from '../translator/Translator';

function App() {
    return (
        <div>
            <header>
                <Navbar bg="light" variant="light">
                    <Container fluid='md'>
                        <Navbar.Brand href="/">Translator</Navbar.Brand>
                        <Nav className="me-auto">
                            {/* <Nav.Link href=""></Nav.Link> */}
                        </Nav>
                    </Container>
                </Navbar>
            </header>
            <main>
                <Container fluid='md'>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Translator />}></Route>
                        </Routes>
                    </BrowserRouter>
                </Container>
            </main>
        </div>
    );
}

export default App;
