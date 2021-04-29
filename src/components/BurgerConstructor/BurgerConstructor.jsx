import React from 'react';
import styleBurgerConstructor from'./BurgerConstructor.module.css';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import data from '../../utils/data.js';

function BurgerConstructor() {

    const arrayIngredientsNumbers = [0, 1, 2, 7, 8, 5, 3, 6, 14];
    const dataVisible = [];

    for (let i = 0; i < arrayIngredientsNumbers.length; i++) {
        dataVisible.push(data[arrayIngredientsNumbers[i]])
    }

    const totalPrice = dataVisible.reduce((acum, item) => acum += item.price, 0)

    return (
        <div className={styleBurgerConstructor.half}>
            <div className={styleBurgerConstructor.block}>
                {dataVisible.map((item, index, array) => {
                    if (index === 0) {
                        return <ConstructorElement
                            thumbnail={item.image_mobile}
                            text={item.name}
                            price={item.price}
                            isLocked={true}
                            type='top' 
                            key={index} />
                    } else if (index === array.length - 1) {
                        return <ConstructorElement
                            thumbnail={item.image_mobile}
                            text={item.name}
                            price={item.price}
                            isLocked={true}
                            type='bottom'
                            key={index} />
                    } else {
                        return <ConstructorElement
                            thumbnail={item.image_mobile}
                            text={item.name}
                            price={item.price}
                            isLocked={false}
                            type='center'
                            key={index} />
                    }
                })}
            </div>
            <div className={styleBurgerConstructor.price}>
                <div className='mr-5'>
                    <span className='text text_type_main-large mr-1'>{totalPrice}</span><CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large">
                    Нажми на меня
                </Button>
            </div>
        </div>
    )
}

export default BurgerConstructor;
