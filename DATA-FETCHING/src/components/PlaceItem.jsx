import { useEffect, useRef } from "react";

const PlaceItem = ({place, onSelectPlace}) =>{
    const ref = useRef();

    const onIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
        } 
      });                            
    };
      
    useEffect(()=>{
        const observer = new IntersectionObserver(onIntersect,{threshold : 0.1});
        if(ref.current){
            observer.observe(ref.current)
        }
    },[place]);

    return (
      <li key={place.id} ref={ref} className="place-item">
        <button onClick={() => onSelectPlace(place)}>
          <img src={`http://localhost:3000/${place.image.src}`} alt={place.image.alt} />
          <h3>{place.title}</h3>
        </button>
      </li>
    )
  };

  export default PlaceItem;