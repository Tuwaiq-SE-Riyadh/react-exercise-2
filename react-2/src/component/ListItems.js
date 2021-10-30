import { useState, useEffect } from "react";
import axios from "axios";


function ListItems({elemnt,index ,list}) {

  return (
<>

    <div className="colomn">
        <div className="card">
            <div className="item1">
            <img src={"https://image.tmdb.org/t/p/w500/"+elemnt.poster_path} height="300px" width="300px"/>
            </div>
            <div className="item2">
            <h4>{elemnt.title+elemnt.release_date}</h4>

            </div>
            <div className="item3">
              
            </div>
            <div className="item4">
                <a className="button" href={"#popup"+index}>More</a>

            </div>
            <div className="overlay" id={"popup"+index}>
              <div className="popup">
                <h2>Detiles</h2>
                <a className="close" href="#">&times;</a>
                <div className="content">
                  <h5>Original_title :</h5>
                  <p>{elemnt.original_title}</p>
                  <h5>Original_language :</h5>
                  <p>{elemnt.original_language}</p>
                  <h5>Overview :</h5>
                  <p>{elemnt.overview}</p>

                </div>
              </div>

            </div>

    
        </div>
    </div>


</>
  );
}

export default ListItems;