import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity'; 

function ProductRow({product, totalCost, setTotalCost}){

    const [quantity, setQuantity] = useState(0)

    const increase = () => {
        setQuantity(quantity + 1)
        setTotalCost(totalCost + product.price)
    }
    const decrease = () => {
        if (quantity === 0){
            return
        }
        setQuantity(quantity -1)
        setTotalCost(totalCost - product.price)
    }

    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>${product.price.toLocaleString()}</td>
            <td><ProductQuantity onIncrease={increase} onDecrease={decrease} quantity={quantity}/></td> 
            <td>${(quantity*product.price).toLocaleString()}</td>
        </tr>
    )

};

export default ProductRow;