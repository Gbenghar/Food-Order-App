import {Fragment} from 'react'

import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../assets/meals.jpeg'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Make Your Meal</h1>
            <HeaderCartButton onClick={props.onDisplay}/>
        </header>
        <div className={classes['main-image']}>
            <img src= {mealsImage} alt='Meals Table'/>
        </div> 
    </Fragment>
  )
}

export default Header