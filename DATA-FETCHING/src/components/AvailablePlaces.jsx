import Places from './Places.jsx';
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchPlaces } from "../http.js";
import { useFetch } from "../../hooks/useFetch.js";

const fetchSortPlaces = async () =>{
  const places = await fetchPlaces();
  
  return new Promise((resolve, reject)=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      );
      resolve(sortedPlaces);
    });
  })
} 

export default function AvailablePlaces({ onSelectPlace }) {

  const {
    isLoading,
    error,
    fetchData : availablePlaces
  } = useFetch(fetchSortPlaces);
  
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
