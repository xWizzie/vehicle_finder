import React from 'react';
import './VehicleCard.css'

const VehicleCard = (props) => {
    const vehicle = props.vehicle
    const handleClick = props.handleClick

    const handleButtonClick = () => {
        handleClick(vehicle);
    };

    return (
        <div className={`vehicle-card ${props.selectShown === 'Sale' ? 'cardForSale' : ''}`} key={vehicle.id}>
            <div className='vehicle-h2'>
                <h2>{vehicle.make} {vehicle.model}</h2>
            </div>
            <div className="h2-photo-wrapper">
                <img src={vehicle.image} alt={vehicle.make} />
            </div>

            <p>Year: {vehicle.year}</p>
            <p>Description {vehicle.description}</p>

            <div className='bottomRow'>
                <p><span>Price:</span> ${vehicle.price}</p>
                {props.selectShown !== 'Sale' && <button onClick={handleButtonClick}>Buy</button>}
            </div>
        </div>
    );
}

export default VehicleCard;
