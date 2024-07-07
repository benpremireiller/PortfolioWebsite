import React from 'react';
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

function ProductQuantity({onIncrease, onDecrease, quantity}){


    return (
        <div>
            <FaMinusCircle onClick={onDecrease}/>
            {` ${quantity} `}
            <FaPlusCircle onClick={onIncrease}/>          
        </div>
    )

};

export default ProductQuantity;