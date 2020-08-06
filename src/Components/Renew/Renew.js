import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import MembershipForm from '../MembershipForm/MembershipForm';
import './Renew.css';

const stripePromise = loadStripe("pk_test_51HCyuWGEw4yjuEvjeIysOFID32xG2UmTIFuz9mHLTvBYKoRaMN7Lah4mQP83gCafXUtc4vJ67F2AE2yEUB7LQjfw00PD0vGJKT");

const Renew = () => {
    return (
        <div className="renew-back">
            <h2 className="r-text">Renew Membership Below:</h2>
        <div className="renew">
            <div>
                <Elements stripe={stripePromise}>
                    <MembershipForm />
                </Elements>
            </div>
        </div>
        </div>
    )
}

export default Renew;