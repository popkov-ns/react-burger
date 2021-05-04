import React from 'react';
import styleBurgerConstructor from'./BurgerConstructor.module.scss';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import data from '../../utils/data.js';
import PropTypes from 'prop-types';

function BurgerConstructor() {

    const arrayIngredientsNumbers = [1, 2, 7, 8, 5, 3, 6];
    const dataVisible = [];

    for (let i = 0; i < arrayIngredientsNumbers.length; i++) {
        dataVisible.push(data[arrayIngredientsNumbers[i]])
    };

    const totalPrice = dataVisible.reduce((acum, item) => acum += item.price, 0);

    const Element = ({ data, count, type='center', isLocked=false }) => (
        <ConstructorElement
            thumbnail={data[count].image_mobile}
            text={data[count].name}
            price={data[count].price}
            isLocked={isLocked} 
            type={type} 
            key={data[count].index} />
    );

    Element.propTypes = {
        data: PropTypes.array.isRequired,
        count: PropTypes.number.isRequired,
        isLocked: PropTypes.bool,
        type: PropTypes.string
    }

    return (
        <div className={styleBurgerConstructor.half}>
            <div className={styleBurgerConstructor.lock}>
                <Element data={data} count={0} type='top' isLocked={true}/>
            </div>

            <div className={styleBurgerConstructor.block}>
                {dataVisible.map((item, index) => {
                    return (
                        <div key={index}>
                            <DragIcon type="primary" />
                            <Element data={dataVisible} count={index} />
                        </div>
                    )
                })}
            </div>

            <div className={styleBurgerConstructor.lock}>
                <Element data={data} count={data.length - 1} type='bottom' isLocked={true} />
            </div>
            
            <div className={styleBurgerConstructor.price}>
                <div className='mr-5'>
                    <span className='text text_type_main-large mr-1'>{totalPrice}</span><CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large">
                    Оформи заказ
                </Button>
            </div>
        </div>
    )
}

export default BurgerConstructor;
