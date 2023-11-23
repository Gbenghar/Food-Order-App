import React from 'react'
import Card from '../UI/Card/Card'
import MealItem from './MealItem/MealItem'
import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 2200.99
  },
  {
    id: 'm2',
    name: 'Amala Combo',
    description: 'Yoruba indigineous meal!',
    price: 1650.5
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 1200.99
  },
  {
    id: 'm4',
    name: 'Goat Peppersoup',
    description: 'Spicy...and delicious...',
    price: 1800.99
  }
]

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
