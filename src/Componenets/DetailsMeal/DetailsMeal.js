import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const DetailsMeal = () => {
    const { idMeal } = useParams();

    const [meal, setMeal] = useState({});

    useEffect(() => {
        const API = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                if (data.meals[0] === null) {
                    return null
                }
                setMeal(data.meals[0])
            });
    }, [idMeal])


    const history = useHistory();

    function handleClick() {
        history.push(`/`);
    }


    const { strMealThumb, strCategory, strIngredient1, strInstructions } = meal;


    return (
        <Card className=' w-50 m-auto mt-5'>
            <Card.Img variant="top" src={strMealThumb ? strMealThumb : strMealThumb} />
            <Card.Header>Category: {strCategory ? strCategory : strCategory}</Card.Header>
            <Card.Body>
                <Card.Title>{strIngredient1 ? strIngredient1 : strIngredient1}</Card.Title>
                <Card.Text>
                    {strInstructions ? strInstructions : strInstructions}
                </Card.Text>
            </Card.Body>
            <Button onClick={handleClick} >Back To Home</Button>

        </Card>

    );
};

export default DetailsMeal;