import React, {useState} from 'react';
import ProductRow from '../components/ProductRow.js'; 
import products from '../data/products.js';

function OrderPage(){

    const [totalCost, setTotalCost] = useState(0)

    return (
    <>
        <h2>Order</h2> 
        <article>
            <p>Use this page to order an item from our catalog.</p>
            <table id='orderTable'>
                <caption>Items Available</caption>
                <thead>
                    <tr>
                    <th>Company</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>   
                {products.map((product) => 
                    <ProductRow 
                        product={product} 
                        totalCost={totalCost}
                        setTotalCost={setTotalCost}
                    />
                    )}
                <tr>
                    <td colspan="4">Grand Total</td>
                    <td>${(totalCost).toLocaleString()}</td>
                </tr>
                </tbody>
            </table>
            <p><button>Place Order</button></p>
        </article>
    </>
    )
};

export default OrderPage;