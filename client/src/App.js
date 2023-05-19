import React from 'react';
import './App.css';
import Form from './components/Form';
import VehicleCard from './components/VehicleCard';
import Navbar from './components/Navbar';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import AboutComponent from './components/AboutComponent';
import CarsComponent from './components/CarsComponent';
import ContactComponent from './components/ContactComponent';
import DefaultComponent from './components/DefaultComponent';

const App = () => {
  const [SelectShown, setSelectShown] = React.useState("Form")

  const [VehiclesReturned, setVehiclesReturned] = React.useState([])
  const [vehicleForSaleData, setvehicleForSaleData] = React.useState(null);

  const handleFormData = async (formData) => {
    console.log(formData)
    await Axios.post('http://localhost:3001/api/search', formData)
      .then((response) => {
        console.log("Api Search Success")
        setVehiclesReturned(response.data)
      }).catch((error) => {
        console.log("Api Search Error", error)
      });

  }

  React.useEffect(() => {
    // console.log(VehiclesReturned)

    VehiclesReturned.length === 0 ? setSelectShown('Form') : setSelectShown('Cards')
  }, [VehiclesReturned]);

  const hideCards = () => {
    // console.log("Hiddem")
    setSelectShown('Form')
  }

  const handleVehicleCardClick = (data) => {
    console.log(data)
    setvehicleForSaleData(data)
    setSelectShown('Sale')
  };
  const handleRouteClick = (route) => {
    setSelectShown(route);
  };
  return (

    <div>

      <Router basename={process.env.PUBLIC_URL}>
        <Navbar handleRouteClick={handleRouteClick} />
        <Routes>
          <Route path="/" element={<DefaultComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/cars" element={<CarsComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
        </Routes>


        <div className="search">
          {SelectShown === 'Form' && <Form onSubmit={handleFormData} />}
        </div>

        {SelectShown === 'Cards' && <div>
          <h1 id='vehicle_h1'>Results</h1>

          <div className="vehicle-card-container">
            {VehiclesReturned.map((vehicle) => {
              return (
                <VehicleCard key={vehicle.id} vehicle={vehicle} handleClick={handleVehicleCardClick} selectShown={SelectShown} />
              )
            })}

          </div>
          <button id='hide_cards' onClick={hideCards}>Hide</button>
        </div>
        }

        {
          //showSelectedVehicleForSale 
          SelectShown === 'Sale' && <div>
            <Checkout vehicle={vehicleForSaleData} selectShown={SelectShown} />
          </div>
        }
      </Router>

    </div>
  );
}

export default App;

// <div className="search">
// {SelectShown === 'Form' && <Form onSubmit={handleFormData} />}
// </div>

// {SelectShown === 'Cards' && <div>
// <h1 id='vehicle_h1'>Results</h1>

// <div className="vehicle-card-container">
//   {VehiclesReturned.map((vehicle) => {
//     return (
//       <VehicleCard key={vehicle.id} vehicle={vehicle} handleClick={handleVehicleCardClick} selectShown={SelectShown} />
//     )
//   })}

// </div>
// <button id='hide_cards' onClick={hideCards}>Hide</button>
// </div>
// }

// {
// //showSelectedVehicleForSale 
// SelectShown === 'Sale' && <div>
//   <Checkout vehicle={vehicleForSaleData} selectShown={SelectShown} />
// </div>
// }

// </div>