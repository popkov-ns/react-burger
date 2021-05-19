import React, {useState, useContext} from 'react';
import styleBurgerIngredients from './BurgerIngredients.module.scss';
import { Counter, CurrencyIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import ModalOverlay from '../ModalOverlay/ModalOverlay';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

import {IngredientsContext} from '../../context/ingredients';

import PropTypes from 'prop-types';

function BurgerIngredients() {
    const [current, setCurrent] = useState('buns');
    const [modalIngredientDetailsActive, setModalIngredientDetailsActive] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);

    const data = useContext(IngredientsContext);

    const elementPropTypes = PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    })

    const getAttribute = (item) => {
        setModalIngredientDetailsActive(true);
        setCurrentItem(item);
    }

    const Element = ({ item }) => (
        <li className={styleBurgerIngredients.element} onClick={() => getAttribute(item)}>
            <img className={styleBurgerIngredients.img} src={item.image} alt={item.name}/>
            <p className={styleBurgerIngredients.price}>
                <span className='text text_type_digits-default mr-1'>{item.price}</span>
                <CurrencyIcon />
            </p>
            <p className={styleBurgerIngredients.name}>{item.name}</p>
            {item.name === "Краторная булка N-200i" ? <Counter count={1} size="default" /> : null}
            {item.name === "Флюоресцентная булка R2-D3" ? <Counter count={1} size="default" /> : null}
            {item.name === "Биокотлета из марсианской Магнолии" ? <Counter count={235} size="small" /> : null}
            {item.name === "Соус Spicy-X" ? <Counter count={2} size="default" /> : null}
            {item.name === "Соус с шипами Антарианского плоскоходца" ? <Counter count={1} size="default" /> : null}
            {item.name === "Мясо бессмертных моллюсков Protostomia" ? <Counter count={100} size="small" /> : null}
        </li>
    );

    Element.propTypes = {
        item: elementPropTypes.isRequired
    }

    return (
        <div>
            <h1 className={styleBurgerIngredients.title}>Собери бургер</h1>

            <div className={styleBurgerIngredients.tab}>
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
                <h2 id='buns' className={styleBurgerIngredients.subtitle}>Булки</h2>
                <ul className={styleBurgerIngredients.block}>
                    {data.filter(item => item.type === 'bun').map(item => {
                        return <Element item={item} key={item._id} />
                    })}
                </ul>

                <h2 id='sauces' className={styleBurgerIngredients.subtitle}>Соусы</h2>
                <ul className={styleBurgerIngredients.block}>
                    {data.filter(item => item.type === 'sauce').map(item => {
                        return <Element item={item} key={item._id} />
                    })}
                </ul>

                <h2 id='mains' className={styleBurgerIngredients.subtitle}>Начинки</h2>
                <ul className={styleBurgerIngredients.block}>
                    {data.filter(item => item.type === 'main').map(item => {
                        return <Element item={item} key={item._id}/>
                    })}
                </ul>
            </div>
            <ModalOverlay isOpen={modalIngredientDetailsActive} setActive={setModalIngredientDetailsActive}>
                <IngredientDetails currentItem={currentItem} />
            </ModalOverlay>
        </div>
    )
}

export default BurgerIngredients;