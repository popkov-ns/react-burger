import React, {useState, useContext} from 'react';
import styleBurgerConstructor from'./BurgerConstructor.module.scss';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ModalOverlay from '../ModalOverlay/ModalOverlay';
import OrderDetails from '../OrderDetails/OrderDetails';

import {IngredientsContext} from '../../context/ingredients';

import PropTypes from 'prop-types';

function BurgerConstructor() {

    const [modalOrderDetailsActive, setModalOrderDetailsActive] = useState(false);

    const data = useContext(IngredientsContext);

    const arrayIngredientsNumbers = [1, 3, 6, 8, 5, 3, 6];
    const dataVisible = [];
    let totalPrice = 0;

    if (data.length !== 0) {
        for (let i = 0; i < arrayIngredientsNumbers.length; i++) {
            dataVisible.push(data[arrayIngredientsNumbers[i]])
        };

        totalPrice = dataVisible.reduce((acum, item) => acum += item.price, 0);
    }

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

    const PlaceOrder = () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: { 
                "ingredients": JSON.stringify(dataVisible.map(item => item._id))
            }
        };
        fetch('https://norma.nomoreparties.space/api/orders', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));

        setModalOrderDetailsActive(true);
    }

    return (
        <div className={styleBurgerConstructor.half}>
            <div className={styleBurgerConstructor.lock}>
                {data[0] && <Element data={data} count={0} type='top' isLocked={true}/>}
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
                {data[0] && <Element data={data} count={0} type='bottom' isLocked={true} />}
            </div>
            
            <div className={styleBurgerConstructor.price}>
                <div className='mr-5'>
                    <span className='text text_type_main-large mr-1'>{totalPrice}</span><CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large" onClick={PlaceOrder}>
                    Оформи заказ
                </Button>
            </div>
            <ModalOverlay isOpen={modalOrderDetailsActive} setActive={setModalOrderDetailsActive}>
                <OrderDetails/>
            </ModalOverlay>
        </div>
    )
}

export default BurgerConstructor;
