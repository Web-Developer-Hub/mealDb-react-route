import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Meal.css'


const Meal = (props) => {
    const { idMeal, strCategory, strMealThumb, strIngredient1, strInstructions } = props?.meal;
    const history = useHistory();

    function handleClick() {
        history.push(`/details/meals/${idMeal}`);
    }
    return (

        <Card>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Header>Category: {strCategory}</Card.Header>
            <Card.Body>
                <Card.Title>{strIngredient1}</Card.Title>
                <Card.Text>
                    {strInstructions.slice(0, 100)}...
                </Card.Text>
            </Card.Body>
            <Button onClick={handleClick} >Read More</Button>
        </Card>
    );
};

export default Meal;