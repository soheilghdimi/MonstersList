import { useEffect, useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MonsterCard } from '..';
import Input from "../../InputSearch/Input";
import {Link,Outlet} from "react-router-dom";


const MonsterList = () => {
    const [monsterList, setMonsterList] = useState([])
    const [search, setSearch] = useState('')

    const getMonsters = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setMonsterList(data));
    }
    useEffect(() => {
        document.title = "Monsters";
        getMonsters();
    }, []);

    return (
        <div className={'monsterList'}>
        <Container className='mt-3'>
            <Outlet/>
            <Row className='mt-3'>
                <Col>
                    <Input setFilter={setSearch}/>
                </Col>
            </Row>
            <Row>
                {monsterList.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase())).length === 0 ?
                    <h1 className='text-center'>there is no monster</h1>
                    :
                    monsterList.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()))
                        .map((monster) => (
                            <Col className='mt-4' key={monster.id} xs={12} sm={6}  lg={4} >
                                <Link to={`/MonsterList/${monster.id}`} style={{textDecoration:"none"}}>
                                    <MonsterCard
                                        name={monster.name}
                                        description={monster.email}
                                        image={'https://robohash.org/' + monster.username}
                                    />
                                </Link>
                            </Col>
                        ))}
            </Row>
        </Container>
        </div>
    )
}

export default MonsterList;