import React from 'react';
import './App.css';
import Form from './components/Form';
import VehicleCard from './components/VehicleCard';
import Navbar from './components/Navbar';
import Axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Checkout from './components/Checkout';


const App = () => {
  const [SelectShown, setSelectShown] = React.useState("Form")

  const [VehiclesReturned, setVehiclesReturned] = React.useState([])
  const [vehicleForSaleData, setvehicleForSaleData] = React.useState([]);

  const handleFormData = async (formData) => {

    await Axios.post('http://localhost:3001/api/search', formData)
      .then((response) => {
        console.log("Api Search Success")
        setVehiclesReturned(response.data)
      }).catch((error) => {
        console.log("Api Search Error", error)
      });

  }

  React.useEffect(() => {
    console.log(VehiclesReturned)

    VehiclesReturned.length === 0 ? setSelectShown('Form') : setSelectShown('Cards')
  }, [VehiclesReturned]);

  const hideCards = () => {
    console.log("Hiddem")
    setSelectShown('Form')
  }

  const handleVehicleCardClick = (data) => {
    console.log(data)
    setvehicleForSaleData(data)
    setSelectShown('Sale')
  };

  return (

    <div>

      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
      </Router>

      <div className="search">
        {SelectShown === 'Form' && <Form onSubmit={handleFormData} />}
      </div>

      {SelectShown === 'Cards' && <div>
        <h1 id='vehicle_h1'>Results</h1>

        <div className="vehicle-card-container">
          {VehiclesReturned.map((vehicle) => {
            return (
              <VehicleCard key={vehicle.id} vehicle={vehicle} handleClick={handleVehicleCardClick} />
            )
          })}

        </div>
        <button id='hide_cards' onClick={hideCards}>Hide</button>
      </div>
      }

      {
        //showSelectedVehicleForSale 
        SelectShown === 'Sale' && <div>

          <Checkout />
        </div>
      }

    </div>
  );
}

export default App;

