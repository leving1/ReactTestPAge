import React, { useState } from "react";
import { Form } from "react-bootstrap";
import '/home/levin/Documents/Entwicklung/hello-world/src/Fahrtkostenrechner.css';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { render } from "@testing-library/react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const initial_state = {
  startAdresse: '',
  zielAdresse: '',
  costKM: '',
  startlat: '',
  startlng: '',
  ziellat: '',
  ziellng: '',
  renderList: null,
  route: []
};

const SearchMealForm = ({ onFormSubmit = () => { } }) => {
  const [state, setState] = useState(initial_state);
  //handle user input and inject it into yelp api get request
  const handleSubmit = async event => {
    event.preventDefault();
    onFormSubmit(state);
    const searchLatLngstart = await searchYelpRestaurants({ startAdresse, zielAdresse, costKM });
    setState({ ...state, searchLatLngstart, searchLatLngziel, costKM });
  };

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
    console.log(startAdresse);
    console.log(zielAdresse);
    console.log(costKM);
  };

  
  function searchYelpRestaurants(){
    try {
      const xy = axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${startAdresse}&key=6bd072af2b394258b70cb1923811cf25`)
        .then((responsestart) => {
          let searchLatLngstart = responsestart;
          //returns start latitude 
          let startlat = searchLatLngstart.data.results[0].bounds.northeast.lat;
          let startlng = searchLatLngstart.data.results[0].bounds.northeast.lng;
          console.log(startlat);
          console.log(startlng);

          const xx = axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${zielAdresse}&key=6bd072af2b394258b70cb1923811cf25`)
            .then((responseziel) => {
              let searchLatLngziel = responseziel;
              let ziellat = searchLatLngziel.data.results[0].bounds.northeast.lat;
              let ziellng = searchLatLngziel.data.results[0].bounds.northeast.lng;
              console.log(ziellat);
              console.log(ziellng);

              const yy = axios.get(
                `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248cf56f374d7f14bdba928b87f5caece16&start=${startlng},${startlat}&end=${ziellng},${ziellat}`)
                .then((responseroute) => {
                  console.log(responseroute);
                  let distance = responseroute.data.features[0].properties.summary.distance;
                  let distancekm = distance / 1000;
                  console.log(distancekm);
                  let cost = distancekm * costKM;
                  console.log(cost);
                  const positionstart =[startlat,startlng];
                  const positionziel = [ziellat, ziellng];
                  render(
                    <React.Fragment>
                      <div id="map" className="map">
                        <MapContainer
                          center={positionstart}
                          zoom={12}
                          maxZoom={18}
                        >
                          <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                          />
                           <Marker position={positionstart}>
                            <Popup>
                             {startAdresse}
                             </Popup>
                            </Marker>
                            <Marker position={positionziel}>
                            <Popup>
                             {zielAdresse}
                             </Popup>
                            </Marker>
                        </MapContainer>
                      </div>
                      <div className='userOut'>
                        <Card>
                          <CardContent>
                            <Typography  color="textSecondary" gutterBottom>
                              <b>Fahrkosten</b>
                             </Typography>
                            <Typography variant="h5" component="h2">
                             </Typography>
                            <Typography  color="textSecondary">
                              für die Strecke {startAdresse} <br />nach {zielAdresse}
                           </Typography>
                            <Typography variant="body2" component="p">
                               <br />
                              <b>{cost} €</b>
                            </Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </React.Fragment>
                  )
                });
            });
        });
    }
    catch (err) {
      console.log(err);
    }
  };


  const { startAdresse, zielAdresse, costKM, searchLatLngstart, searchLatLngziel } = state;
  //const position = [this.state.startlat, this.state.startlng];
  //show points on the Map
  let myIcon = L.icon({
    iconUrl: '',
    iconSize: [15],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]
  });


  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit}>
        <div>
          <div className='userinputstart'>
            <TextField
              name='startAdresse'
              type='text'
              value={startAdresse}
              onChange={handleChange}
              label="Start Adresse"
              variant='outlined' />
          </div>
          <div className='userinputziel'>
            <TextField
              name='zielAdresse'
              type='text'
              variant='outlined'
              label="Ziel Adresse"
              value={zielAdresse}
              onChange={handleChange} />
              </div>
              <div className='costKM'>
               <TextField
              name='costKM'
              type='text'
              variant='outlined'
              label="Kosten pro Kilometer"
              value={costKM}
              onChange={handleChange} />
              </div>
          <div className='userinputbutton'>
            <label>
              <Button type="submit" variant='contained' color='primary'>Submit</Button>
            </label>
          </div>
        </div>
        <div className='userOutput'>
        </div>
      </Form>
    </React.Fragment>
  );
};

export default SearchMealForm;
