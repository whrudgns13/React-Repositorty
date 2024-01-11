import React,{useEffect, useState} from "react";
import Places from './Places.jsx';
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchPlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(()=>{
    (async () =>{
      setIsLoading(true);

      try{
       
        const places = await fetchPlaces()
        navigator.geolocation.getCurrentPosition((position)=>{
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsLoading(false);
        });
        
      }catch(error){
        setError(error);
      }
    })();

  },[]);

  if(error){
    return <Error title="An" message={error.message || 'Error'}/>
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading = {isLoading}
      loadingText = "Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
