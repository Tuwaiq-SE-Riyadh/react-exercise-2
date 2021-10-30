

function Search({data,setData,copy}){

    const se=()=>{
    
        console.log(data[0].episode.length);
        const name=document.getElementById("search").value.toLocaleLowerCase(); 
        let newarr = []
        let x=0;
        copy.map((ele,index)=>{ 
              let str = ele.name.toLocaleLowerCase();
                
        if(str.match(name)){
          console.log("in");
          
             newarr.push(ele);
             setData(newarr);
             console.log(data);
             x=1
        }})
      if(x == 0){
        setData(copy);

      }
    }
    return(
        <div id="searchPart">
        <input id="search" onChange={se} onKeyPress={se}/>
          <button id="searchButton" onClick={se}>search</button>
        </div>
    );
}

export default Search;