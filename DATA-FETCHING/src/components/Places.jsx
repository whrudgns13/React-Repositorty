import { useEffect, useRef } from "react";
import PlaceItem from "./PlaceItem";

export default function Places({ title, places, fallbackText, onSelectPlace, isLoading, loadingText}) {
  console.log(places);
 

  return (
    <section className="places-category">
      <h2>{title}</h2>
      {isLoading && <p className="fallback-text">{loadingText}</p>}
      {!isLoading && places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
      {!isLoading && places.length > 0 && (
        <ul className="places">
          {places.map((place) => <PlaceItem place={place} onSelectPlace={onSelectPlace}/>)}
        </ul>
      )}
    </section>
  );
}
