export async function fetchPlaces(){
    const response = await fetch("http://localhost:3000/places");
    const data = await response.json();

    if(!response.ok){
      throw new Error("Faild to fetch places");
    }

    return data.places;
}

export async function updateUserPlaces(places){
    const response = await fetch("http://localhost:3000/user-places",{
        method : "PUT",
        body : JSON.stringify({places}),
        headers : {
            'Content-Type' : "application/json"
        }       
    });

    if(!response.ok){
      throw new Error("Faild to fetch user-places");
    }
    
    const {message} = await response.json();
    
    return message;   
}

export async function fetchUserPlaces(){
    const response = await fetch("http://localhost:3000/user-places");

    if(!response.ok){
      throw new Error("Faild to fetch user-places");
    }
    
    const data = await response.json();
    
    return data.places;   
}