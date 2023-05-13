import React from 'react'
import './Checkout.css'

function Checkout() {
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

                        <div className="payment-info">
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
                        </div>
                    </form>
                </div>

                <div className="card">

                </div>
            </div>
            <button type="submit" id='order-Button'>Place Order</button>
        </div>
    );
}

export default Checkout;
