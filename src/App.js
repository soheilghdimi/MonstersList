import './App.css';
import {MonsterList, MonsterPage} from "./components";
import {BrowserRouter, Route, Routes, Outlet, Link} from "react-router-dom";
import {Button, Container, Nav, Navbar} from "react-bootstrap";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route index element={<Welcome/>}/>
                    <Route path="MonsterList" element={<MonsterList/>}>
                        <Route path=":monsterID" element={<MonsterPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const Home = () => {
    return (
        <div style={{color: 'white'}}>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Monsters</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href={'/'}>Home</Nav.Link>
                        <Nav.Link href={'/MonsterList'}>MonsterList</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    )
}
const Welcome = () => {
    return(
        <div className={'Welcome'}>
            welcome to my MonsterPage
            <div>
                <Button variant="primary">
                <Link to='/MonsterList' style={{color:"white",textDecoration:"none"}}>get started</Link>
            </Button>
            </div>

        </div>
    )
}
export default App;
