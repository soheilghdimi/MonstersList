import './MonsterCard.style.css'
import {Card} from "react-bootstrap";

const MonsterCard = ({name, image,description}) => {
    return (
        <div className={'MonsterCard'}>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}
export default MonsterCard;