import React from 'react';
import styleIngredientDetails from './IngredientDetails.module.scss';

function IngredientDetails({currentItem}) {

    return (
        <>
           <div>{currentItem}</div>
        </>
    )
}

export default IngredientDetails;