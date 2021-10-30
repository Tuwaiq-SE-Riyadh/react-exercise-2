import React from 'react';

function Details({setList}){

    const [details, setDetails] = useState("");
    
    const getDetailstData = (e) => {
        axios
          .get(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => setList(response.data.results))
          .catch((error) => console.log(error)); 
    }

    const showDetails = () => {
        
    }

    return(

        <div>
            <button type="button" onClick={showDetails}>Details</button>
        </div>
    )

}

export default Details;