

function TeamStates({teamStates}){
    // console.log(teamStates);
    return(
        <>
        
        {teamStates.map(e=>{
           return <p className="info">{e}</p>
        })
    }
    
        </>
    )
    

}

export default TeamStates