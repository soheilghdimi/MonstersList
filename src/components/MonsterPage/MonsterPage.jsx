import {Button, Card} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";



const getMonster = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
    return (data)
}

const MonsterPage = () => {
    const params = useParams();
    const [loading, setLoading] = useState(true)
    const [monster, setMonster] = useState({
        id: 1,
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    })
    useEffect(() => {
        setLoading(true)
        getMonster(params.monsterID).then(data => {
            setMonster(data)
            setLoading(false)
        })
        console.log()
    }, [params.monsterID])

  return(
      <Card className="text-center" style={{color:"black"}}>
           <Card.Header>monster info</Card.Header>
          {
              loading ? <h1>please wait I am loading...!</h1> :
              <Card.Body>
              <img src={'https://robohash.org/' + monster.username} alt="avatar"/>
              <Card.Title>{monster.name}</Card.Title>
              <Card.Text>
          {monster.email}
              </Card.Text>
              <Card.Text>
          {monster.phone}
              </Card.Text>
              <Card.Text>
          {monster.website}
              </Card.Text>
              </Card.Body>
          }
          <Card.Footer className="text-muted">
              <Link to='/MonsterList'>
                  <Button>back to list</Button>
              </Link>
          </Card.Footer>
      </Card>
  )
}
export default MonsterPage;
