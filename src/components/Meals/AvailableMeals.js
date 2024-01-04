// import { useEffect, useState } from 'react'
import Card from '../UI/Card/Card'
import MealItem from './MealItem/MealItem'
import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Goat/Fish PepperSoup',
    description: 'Finest goat/fish peppersoup ',
    price: 1499.99,
  },
  {
    id: 'm2',
    name: 'Nigerian Jollof',
    description: 'A Nigerian specialty with spicy and excellent taste!',
    price: 1650,
  },
  {
    id: 'm3',
    name: 'Amala Combo',
    description: 'An indigenous Yoruba meal with Gbegiri and Ewedu combo-stew',
    price: 2200,
  },
  {
    id: 'm4',
    name: 'Ponded Yam',
    description: 'Well pounded... enjoy with any soup...',
    price: 1899.99,
  },
];

const AvailableMeals = () => {
  // const [meals, setMeals] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  // const [httpError, setHttpError] = useState(undefined)

  // useEffect(() => {
  //   const fetchMeals = async () => {
  //     const response = await fetch(
  //       'https://react-http-83b27-default-rtdb.firebaseio.com/meals.json'
  //     )
  //     if (!response.ok) {
  //       throw new Error('Something went wrong')
  //     }

  //     const responseData = await response.json()

  //     const loadedMeals = []

  //     for (const key in responseData) {
  //       loadedMeals.push({
  //         id: key,
  //         name: responseData[key].name,
  //         description: responseData[key].description,
  //         price: responseData[key].price
  //       })
  //     }

  //     setMeals(loadedMeals)
  //     setIsLoading(false)
  //   }

  //   fetchMeals().catch(error => {
  //     setIsLoading(false)
  //     setHttpError(error.message)
  //   })
  // }, [])

  // if (isLoading) {
  //   return (
  //     <section className={classes.MealsLoading}>
  //       <p>Loading...</p>
  //     </section>
  //   )
  // }

  // if (httpError) {
  //   return (
  //     <section className={classes.MealsError}>
  //       <p>{httpError}</p>
  //     </section>
  //   )
  // }

  const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem
      key={meal.id}
      id={meal.id}
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
