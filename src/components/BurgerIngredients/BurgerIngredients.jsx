import React from 'react';
import styleBurgerIngredients from './BurgerIngredients.module.css';
import { Counter, CurrencyIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import data from '../../utils/data.js';

function BurgerIngredients() {
    const [current, setCurrent] = React.useState('buns');

    let bunArray = data.filter(item => item.type === 'bun');
    let mainArray = data.filter(item => item.type === 'main');
    let sauceArray = data.filter(item => item.type === 'sauce');

    return (
        <div>
            <h1 className='mt-5'>Собери бургер</h1>
            <div className={styleBurgerIngredients.tab} >
                <Tab value='buns' active={current === 'buns'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value='sauces' active={current === 'sauces'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value='mains' active={current === 'mains'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={styleBurgerIngredients.content}>
                <h2 id='buns' className='mt-5 mb-3'>Булки</h2>
                <div className={styleBurgerIngredients.block}>
                    {bunArray.map(item => {
                        return (
                            <div className={styleBurgerIngredients.element}>
                                <img src={item.image} alt={item.name}/>
                                <p className={styleBurgerIngredients.price}>
                                    <span className='text text_type_digits-default mr-1'>{item.price}</span>
                                    <CurrencyIcon />
                                </p>
                                <p>{item.name}</p>
                                <Counter count={1} size="default" />
                            </div>
                        )
                    })}
                </div>

                <h2 id='sauces' className='mt-5 mb-3'>Соусы</h2>
                <div className={styleBurgerIngredients.block}>
                    {sauceArray.map(item => {
                        return (
                            <div className={styleBurgerIngredients.element}>
                                <img src={item.image} alt={item.name}/>
                                <p className={styleBurgerIngredients.price}>
                                    <span className='text text_type_digits-default mr-1'>{item.price}</span>
                                    <CurrencyIcon />
                                </p>
                                <p>{item.name}</p>
                                <Counter count={235} size="small" />
                            </div>
                        )
                    })}
                </div>

                <h2 id='mains' className='mt-5 mb-3'>Начинки</h2>
                <div className={styleBurgerIngredients.block}>
                    {mainArray.map(item => {
                        return (
                            <div className={styleBurgerIngredients.element}>
                                <img src={item.image} alt={item.name}/>
                                <p className={styleBurgerIngredients.price}>
                                    <span className='text text_type_digits-default mr-1'>{item.price}</span>
                                    <CurrencyIcon />
                                </p>
                                <p>{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BurgerIngredients;