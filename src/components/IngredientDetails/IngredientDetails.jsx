import React from 'react';
import styleIngredientDetails from './IngredientDetails.module.scss';

function IngredientDetails({currentItem}) {

    return (
        <div className={styleIngredientDetails.wrapp}>
           <p className="text text_type_main-large mb-4">Детали ингредиента</p>
           <img src={currentItem.image_large} alt={currentItem.name} />
           <p className="text text_type_main-medium mt-4">{currentItem.name}</p>
           <ul className={styleIngredientDetails.details}>
                <li>
                    <p>Калории,ккал</p>
                    <p className="text text_type_digits-default">{currentItem.calories}</p>
                </li>
                <li>
                    <p>Белки, г</p>
                    <p className="text text_type_digits-default">{currentItem.proteins}</p>
                </li>
                <li>
                    <p>Жиры, г</p>
                    <p className="text text_type_digits-default">{currentItem.fat}</p>
                </li>
                <li>
                    <p>Углеводы, г</p>
                    <p className="text text_type_digits-default">{currentItem.carbohydrates}</p>
                </li>
           </ul>
        </div>
    )
}

export default IngredientDetails;