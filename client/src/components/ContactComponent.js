import React from 'react';
import './ContactComponent.css';

const ContactComponent = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>
                We would love to hear from you! If you have any questions, feedback, or inquiries, please feel free to reach out to us using the contact information below.
            </p>
            <div className="contact-details">
                <p>Email: info@carmatch.com</p>
                <p>Phone: 2310123456</p>
                <p>Address: 123 Car Street, City, Country</p>
            </div>
        </div>
    );
};

export default ContactComponent;
