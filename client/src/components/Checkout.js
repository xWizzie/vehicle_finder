import React, { useState } from 'react'
import './Checkout.css'
import VehicleCard from './VehicleCard'

function Checkout(props) {
    const [submissionStatus, setSubmissionStatus] = useState(false);

    const vehicle = props.vehicle
    const selectShown = props.selectShown

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = checkFormValidity();
        if (isValid) {
            setSubmissionStatus(true);
        }
    };

    const checkFormValidity = () => {
        // Get form input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const zip = document.getElementById('zip').value;

        // Perform validation checks
        const isNameValid = name.trim() !== '';
        const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
        const isPhoneValid = /^\d{10}$/.test(phone);
        const isAddressValid = address.trim() !== '';
        const isCityValid = city.trim() !== '';
        const isStateValid = state.trim() !== '';
        const isZipValid = /^\d{5}$/.test(zip);

        // Return true if all fields are valid, false otherwise
        return (
            isNameValid &&
            isEmailValid &&
            isPhoneValid &&
            isAddressValid &&
            isCityValid &&
            isStateValid &&
            isZipValid
        );
    };

    //change to you bought screen if info is completed
    return (
        <div >
            <h2>Checkout</h2>
            <div className='checkout'>
                <div className="info">

                    <form>
                        <div className="personal-info">
                            <h3>Personal Information</h3>
                            <div className="form-row">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-row">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
                            </div>
                        </div>

                        <div className="shipping-info">
                            <h3>Shipping Information</h3>
                            <div className="form-row">
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" name="address" required />
                            </div>
                            <div className="form-row">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" name="city" required />
                            </div>
                            <div className="form-row">
                                <label htmlFor="state">State</label>
                                <input type="text" id="state" name="state" required />
                            </div>
                            <div className="form-row">
                                <label htmlFor="zip">Zip Code</label>
                                <input type="text" id="zip" name="zip" required />
                            </div>
                        </div>

                        {/* <div className="payment-info">
                            <h3>Payment Information</h3>
                            <div className="form-row">
                                <label htmlFor="card-number">Card Number</label>
                                <input type="text" id="card-number" name="card-number" required />
                            </div>
                            <div className="form-row">
                                <label htmlFor="expiry-date">Expiration Date</label>
                                <input type="text" id="expiry-date" name="expiry-date" required />
                            </div>
                            <div className="form-row">
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" id="cvv" name="cvv" required />
                            </div>
                        </div> */}
                    </form>
                </div>

                <div className="card">
                    <VehicleCard className={'cardForSale'} vehicle={vehicle} selectShown={selectShown} />

                    {submissionStatus && (
                        <div className="confirmation">Order sent <span>successfully!</span></div>
                    )}
                    <button type="submit" id='order-Button' onClick={handleSubmit}>Place Order</button>


                </div>
            </div>
        </div>
    );
}

export default Checkout;
