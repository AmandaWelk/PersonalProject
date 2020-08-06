import React, {Component} from 'react';
import {ElementsConsumer, CardElement} from '@stripe/react-stripe-js';
import CardSection from '../CardSection/CardSection';
import './MembershipForm.css';
import axios from 'axios';

class MembershipForm extends Component {
    handleSubmit = async event => {
        event.preventDefault();

        const {stripe, elements} = this.props;
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);
        console.log(result)
        if (result.error) {
            console.log(result.error.message);
        } else {
            axios.post('/api/payment', {token: result.token, amount: 1200*100})
            .then(() => {
                alert('Payment Successful')
            })
            .catch(err => console.log(err))
            console.log(result.token);
        }
    };

    render() {
        return(
            <div>
                <div className="details">
                    <h3 className="title">Yearly Membership</h3>
                    <h4 className="price">$1200</h4>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <CardSection />
                    <button disabled={!this.props.stripe} className="pay">Pay Now</button>
                </form>
            </div>
        );
    }
}

export default function InjectedMembershipForm() {
    return(
        <ElementsConsumer>
            {({stripe, elements}) => (
                <MembershipForm stripe={stripe} elements={elements} />
            )}
        </ElementsConsumer>
    );
}