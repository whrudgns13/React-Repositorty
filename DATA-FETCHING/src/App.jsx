import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { fetchUserPlaces, updateUserPlaces } from './http.js';
import Error from './components/Error.jsx';

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorUpdating,setErrorUpdating] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }

      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }

      return [selectedPlace, ...prevPickedPlaces];
    });
    
    try{
      await updateUserPlaces([selectedPlace, ...userPlaces]);
    }catch(error){
      setUserPlaces(userPlaces);
      setErrorUpdating({message : error.message || "업데이트 실패"});
    }
  }

  const handleRemovePlace = useCallback(async ()=> {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    setModalIsOpen(false);

    try{
      await updateUserPlaces(userPlaces.filter((place) => place.id !== selectedPlace.current.id))
    }catch(error){
      setUserPlaces(userPlaces);
      setErrorUpdating({message : error.message || "삭제 실패"});
    }    
  }, [userPlaces]);

  useEffect(()=>{
    (async () => {
      setIsLoading(true);

      try{
        const places = await fetchUserPlaces();
        setUserPlaces(places);

        setIsLoading(false);
      }catch(error){
        setError({message : (error && error.message) || 'User Place fetch 실패'})
      }

    })()
  },[])

  const handlerError = () =>{
    setErrorUpdating(null);
  }

  return (
    <>
      <Modal open={errorUpdating} onClose={handlerError}>
        {errorUpdating && (
          <Error 
          title="An Error"
          message={errorUpdating.message}
          onConfirm={handlerError}        
          />
        )}       
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && <Error title="Error" message={error.message}/>}
        {!error && (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            isLoading={isLoading}
            loadingText="User Place 로딩중..."
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}        

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
