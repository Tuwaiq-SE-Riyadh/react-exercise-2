import '../App.css';
import TeamStates from './teamStates';
import { useEffect,useState } from 'react';

function DisplayTeams({Team,setTeams,index}){
    // const Test = (Mylist)=>{
    //     // console.log(setTeams);
    //     setTeams((Team) => {
    //         // console.log(TeamName);
    //         const newArray = Team.slice()
    //         const newArray2 =[]
    //         return newArray.filter((element, i)=>{
    //             if(index === i){
    //           newArray2.push(element.team.name)
    //           newArray2.push(element.stats[0].name)
    //           console.log(newArray2);
    //           return newArray2
    //         }
    //         })
    //         // const newArray=[];
    //         // for(let i=0;i<Team.length;i++){
    //         //     // console.log(list[i]);
    //         //     const element = Team[i];
    //         //     if (index !==i ){
    //         //         newArray.push(element);
    //         //     }
    //         // }
    //         // return console.log(newArray);
    //       });
    // }
    
    const [getstats , getStates] = useState();
    const Hideinfo = ()=>{
        setStates([])
        
    }    
    // window.onclick = function(){
    //     setStates([])
    // }
    const [stats , setStates] = useState([]);
    const arrayOfStats = stats.slice()
    const showStates = () =>{
        if(arrayOfStats.length > 0){

        }
        else{
        arrayOfStats.push(<p className="textLeft"><p className="stats">Rank:</p> {"    "+Team.stats[8].value}</p>)
        try{
        arrayOfStats.push(<p className="textLeft"> <p className="stats">Qualification: </p>{Team.note.description}</p>)
    }
    catch(e){

    }
        arrayOfStats.push(<p className="textLeft"><p className="stats">Wins:</p> {Team.stats[0].value}</p>)
        arrayOfStats.push(<p className="textLeft"><p className="stats">Loses:  </p>{Team.stats[1].value} </p>)
        arrayOfStats.push(<p className="textLeft"><p className="stats">Draws: </p> {Team.stats[2].value} </p>)
        arrayOfStats.push(<p className="textLeft"><p className="stats">Scored Goals: </p> {Team.stats[4].value}</p>)
        arrayOfStats.push(<p className="textLeft"><p className="stats">Goals Against: </p> {Team.stats[5].value}</p>)
        arrayOfStats.push(<p className="textLeft"><p className="stats">Goal Difference:  </p>{Team.stats[9].value}</p>)
        arrayOfStats.push(<p className="textLeft"><p className="stats">Over All Record: </p> {Team.stats[12].displayValue}</p>)
        arrayOfStats.push(<p className="textLeft"><p className="stats">Points: </p> {Team.stats[6].value}</p>)
        arrayOfStats.push(<><input type="button" onClick={Hideinfo} className="buttonDes" value="Hide Details"/></>)

        setStates(arrayOfStats)
        
    }
   } 

return(
<>

<div className="divCard">
    {/* {console.log(Team)} */}
        <img src={Team.team.logos[0].href} className="imgS"></img>
        <p className="teamName">{Team.team.name}</p>
        <TeamStates teamStates={stats}/>
        <input type="button" value="More Details" className="buttonDes"onClick={showStates}/>
        </div>

</>
)
}

export default DisplayTeams