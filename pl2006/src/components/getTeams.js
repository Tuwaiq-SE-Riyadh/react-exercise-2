import DisplayTeams from "./displayTeams";
import { useEffect } from "react";

function GetTeams ({GetT,setTeams}){

        console.log(GetT);
       
    return(
        <>
            {GetT.map((e,index) =>{
                return( 
                    <>
                    <DisplayTeams 
                    setTeams={setTeams}
                        Team={e} 
                        // TeamImg={e.team.logos[0].href}
                        index={index}
                        key={e.team.id}
                    />
                    </>
                );
            })}
        </>
    );
}

export default GetTeams