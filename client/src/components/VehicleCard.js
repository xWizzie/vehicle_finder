import React from 'react';
import './VehicleCard.css'

const VehicleCard = (props) => {
    const vehicle = props.vehicle
    const handleClick = props.handleClick

    const handleButtonClick = () => {
        handleClick(vehicle);
    };

    return (
        <div className="vehicle-card" key={vehicle.id}>
            <div className="h2-photo-wrapper">
                <h2>{vehicle.make} {vehicle.model}</h2>
                <img src={vehicle.image} alt={vehicle.make} />
            </div>

            <p>Year: {vehicle.year}</p>
            <p>Description {vehicle.description}</p>

            <div className='bottomRow'>
                <p><span>Price:</span> ${vehicle.price}</p>
                <button onClick={handleButtonClick}>Buy</button>
            </div>
        </div>
    );
}

export default VehicleCard;
