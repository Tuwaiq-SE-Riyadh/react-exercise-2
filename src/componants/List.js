import './compo.css';

function List({ele}){
    

    return(
       <div>
           <h4>Gender: {ele.gender}</h4>
           <h4>Species: {ele.species}</h4>
           <h4>Status: {ele.status}</h4>
           <h4>Number of episodes: {ele.episode.length}</h4>
       </div>
             
            
    );

}
export default List;