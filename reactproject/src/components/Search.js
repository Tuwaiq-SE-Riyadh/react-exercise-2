import { useState } from "react";
function Search({list , setList}) {
    
    const [input, setInput] = useState("");

    const changeSearch =(e)=>{
        console.log(e.target.value);
        setInput(e.target.value)
    }
    const ClickSearch =()=>{
        //search >> name of char
        //search in list if "search" === list.
        let arr = list.filter((value)=> {
            return input == value.name});
        setList(arr)
    }

    return (
            <div className="Search">
                <input className="search" onChange={changeSearch} placeholder="Search by chatacter name."></input>
                <button onClick={ClickSearch}>search</button>
            </div>
    );
}
  
export default Search;