import React from 'react';
import {CardElement} from '@stripe/react-stripe-js';

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: 'green',
            fontSize: '16px',
            fontFamily: 'sans-serif',
            fontSmoothing: 'antialiased',
            '::placeholder': {
                color: 'gray'
            }
        },
        invalid: {
            color: 'red',
            ':focus': {
                color: 'red'
            }
        }
    }
};

function CardSection() {
    return(
        <label>
            Card Details
            <CardElement options={CARD_ELEMENT_OPTIONS} />
        </label>
    );
}

export default CardSection;