import React, { useState } from 'react';
import './AddListingComponent.css';
import VehicleCard from './VehicleCard';

const AddListingComponent = () => {
    const [vehicle, setVehicle] = useState({
        make: '',
        model: '',
        year: '',
        price: '',
        description: '',
        use: '',
        seats: '',
        transmission: '',
        safety: '',
    });
    const [submissionStatus, setSubmissionStatus] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setVehicle((prevVehicle) => ({
            ...prevVehicle,
            [name]: value,
            image: generateImageSrc(prevVehicle)
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the vehicle data, such as submitting it to a backend or storing it locally
        console.log(vehicle);
        setSubmissionStatus(true);
    };

    const generateImageSrc = () => {
        const { make, model } = vehicle;
        const encodedMakeModel = encodeURIComponent(`${make} ${model}`);
        return `https://via.placeholder.com/300x200.png?text=${encodedMakeModel}`;
    };

    return (
        <div>
            <h2>Add Listing</h2>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label htmlFor="make">Make</label>
                        <input
                            type="text"
                            id="make"
                            name="make"
                            value={vehicle.make}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="model">Model</label>
                        <input
                            type="text"
                            id="model"
                            name="model"
                            value={vehicle.model}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="year">Year</label>
                        <input
                            type="text"
                            id="year"
                            name="year"
                            value={vehicle.year}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={vehicle.price}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-row">
                            <label htmlFor="seats">Seats</label>
                            <input
                                type="text"
                                id="seats"
                                name="seats"
                                value={vehicle.seats}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={vehicle.description}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-row">
                        <label htmlFor="use">Use</label>
                        <select
                            id="use"
                            name="use"
                            value={vehicle.use}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Use</option>
                            <option value="Fun daily driving">Fun daily driving</option>
                            <option value="Comfortable daily driving">Comfortable daily driving</option>
                            <option value="Fun side vehicle">Fun side vehicle</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label htmlFor="transmission">Transmission</label>
                        <select
                            id="transmission"
                            name="transmission"
                            value={vehicle.transmission}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Transmission</option>
                            <option value="Manual">Manual</option>
                            <option value="Automatic">Automatic</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label htmlFor="safety">Safety</label>
                        <select
                            id="safety"
                            name="safety"
                            value={vehicle.safety}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Safety</option>
                            <option value="Volvo">Volvo</option>
                            <option value="As safe as possible">As safe as possible</option>
                            <option value="Mediocre">Mediocre</option>
                            <option value="Motorcycle">Motorcycle</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <button type="submit">Add Listing</button>
                    </div>
                </form>

                <div className="card">
                    <VehicleCard
                        vehicle={vehicle}
                        selectShown="Sale"
                    />
                    {submissionStatus && (
                        <div className="confirmation">Listing added <span>successfully!</span></div>
                    )}
                </div>

            </div>
        </div>

    );
};

export default AddListingComponent;
