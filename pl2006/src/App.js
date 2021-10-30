import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import GetTeams from "./components/getTeams"
// https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2006&sort=asc

function App() {
 

  const [teams, setTeams] = useState([]);
  // const getTeams = () => {
  //   axios
  //     .get("https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2006&sort=asc")
  //     .then((response) => setTeams(response.data))
  //     .catch((error) => console.log(error));
  //     // console.log(teams.data);
  //     // console.log(teams.data.standings[0].team.name);

  // };
  // console.log(teams.data);
  // console.log(teams.data.standings);
  

  useEffect(() => {
    axios
      .get("https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2006&sort=asc")
      .then((response) => setTeams(response.data.data.standings))
      .catch((error) => console.log(error));
  // console.log(teams.data.standings);
  },[]);
  // console.log(teams);
  
  return (
    
    <>
    <div className="page">

    <img src="https://pbs.twimg.com/media/EVO_0Q7U8AE3UjL.jpg" alt="" className="imgOpt"/>
    <div className="displayteam">
    <GetTeams GetT={teams} setTeams={setTeams}/>
    </div>


    </div>
  
      {/* <input type="button" onClick={getTeams}/> */}
    </>
  );
}

export default App;
