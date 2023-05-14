import React, { useState } from "react";
import "./Form.css";
import Dropdown from "./Dropdown";

function Form(props) {
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [selectedOption, setSelectedOption] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const use = formData.get('Use');
        const seats = formData.get('Seating Capacity')
        const transmission = formData.get('Type of Transmission')
        const safety = formData.get('Safety')


        const params = { use, seats, transmission, safety };
        props.onSubmit(params)
    };

    const handleDropdownChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <form id="starter" onSubmit={handleSubmit}>
            <h1>
                Answer these questions to get your type!
            </h1>
            <div>
                <label htmlFor="make">What do you need a vehicle for:</label>
                <Dropdown selectName={"Use"} options={['Confortable daily driving', 'Fun daily driving', 'Fun side vehicle', 'Beater']} onChange={handleDropdownChange} />

            </div>
            <div>
                <label htmlFor="model">What is your preferred seating capacity:</label>
                <Dropdown selectName={"Seating Capacity"} options={['Two-seater', 'Four-seater', 'Seven-seater or more']} onChange={handleDropdownChange} />

            </div>
            <div>
                <label htmlFor="year">What is your preferred type of transmission: </label>
                <Dropdown selectName={"Type of Transmission"} options={['Manual', 'Automatic']} onChange={handleDropdownChange} />
            </div>
            <div>
                <label htmlFor="year">How safe would you like your vehicle to be: </label>
                <Dropdown selectName={"Safety"} options={['Volvo', 'As safe as possible', 'Mediocre', 'Possibly suicidal']} onChange={handleDropdownChange} />
            </div>
            <button type="submit">Search</button>
        </form >
    );
};

export default Form;
