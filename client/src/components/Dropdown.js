import React, { useState } from 'react';
import "./Dropdown.css"

function Dropdown(props) {
    const [selectedOption, setSelectedOption] = useState(props.options[0]);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        props.onChange(option);
    };

    return (
        <div className="dropdown">
            <select name={props.selectName} value={selectedOption} onChange={(e) => handleOptionChange(e.target.value)}>
                {props.options.map((option) => (
                    < option key={option} value={option} >
                        {option}
                    </option>
                ))}

            </select>
        </div >
    );
}

export default Dropdown;
