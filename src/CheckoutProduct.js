import React from 'react';
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider";

function CheckoutProduct(props) {
    const [{ basket }, dispatch] = useStateValue();
   
    const removeFromBasket = () => {
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id : props.id
        })
    }

    return (
        <div className="checkoutproduct">
            
            <img className="checkoutproduct__image" src={props.image} />

            <div className="checkoutproduct__info">

            <p className="checkoutproduct__title">{props.title}</p>
            <p className="checkoutproduct__price">
                <small>$</small>
                <strong>{props.price}</strong>
                </p>

                <div className="checkoutproduct__rating">
                {Array(props.rating)
                .fill()
               .map((_, i) => (
                <p>🌟</p>
               ))}
                </div>

                <button onClick={removeFromBasket}>Remove from Basket</button>




            </div>

        </div>
    )
}

export default CheckoutProduct;
