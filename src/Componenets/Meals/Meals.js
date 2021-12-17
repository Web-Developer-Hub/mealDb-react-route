import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import './Meals.css'


const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('')
    const searchHandler = (e) => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }

    useEffect(() => {
        const API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                if (data.meals === null) {
                    return null;
                }
                setMeals(data.meals)
            })

    }, [searchText])


    return (
        <div>
            <h2 className=' text-center m-4'>The Meal DB.</h2>
            <InputGroup onChange={searchHandler} className="mb-3 w-50 m-auto mt-3">
                <FormControl
                    placeholder="Search Your Favourite Meal Here..."
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <div className='meals'>
                {
                    meals.map((meal) => <Meal meal={meal} key={meal.idMeal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;