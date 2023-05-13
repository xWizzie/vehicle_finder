import React, { useState } from "react";

function Form(props) {
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const params = { make, model, year };

        props.onSubmit(params)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="make">Make: </label>
                <input
                    type="text"
                    id="make"
                    value={make}
                    onChange={(event) => setMake(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="model">Model: </label>
                <input
                    type="text"
                    id="model"
                    value={model}
                    onChange={(event) => setModel(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="year">Year: </label>
                <input
                    type="text"
                    id="year"
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                />
            </div>
            <button type="submit">Search</button>
        </form>
    );
};

export default Form;
