import './App.css';
import Header from './component/Header'
import { useState, useEffect } from "react";
import axios from "axios";
import Product from './component/Product'
import apple from './apple.jpg'
import google from './google.jpg'
import huawei from './huawei.jpg'
import sony from './sony.jpg'
import microsft from './microsoft.jpg'
import samsung from './samsung.jpg'

function App() {

const[Products,setProducts]=useState([])
const[toggle,setToggle]=useState(true)

const toggleVisibility = () => {
  setToggle(!toggle);
};

 const getProduct=()=>{
   axios
.get("https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=2")
.then ((response)=>  setProducts((response.data.data.phones)))
.catch((error) => console.log(error))

 }

const getApple=()=>{
  axios
  .get("https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48?page=2")
  .then((response) => setProducts(response.data.data.phones))
    .catch((error) => console.log(error));
}

const getSamsung=()=>{
  axios
  .get("https://api-mobilespecs.azharimm.site/v2/brands/samsung-phones-9")
  .then((response) => setProducts(response.data.data.phones))
    .catch((error) => console.log(error));
    // console.log(Products)
}

const getHuawei=()=>{
  axios
  .get("https://api-mobilespecs.azharimm.site/v2/brands/huawei-phones-58")
  .then((response) => setProducts(response.data.data.phones))
    .catch((error) => console.log(error));
    // console.log(Products)
}

const getGoogle=()=>{
  axios
  .get("https://api-mobilespecs.azharimm.site/v2/brands/google-phones-107")
  .then((response) => setProducts(response.data.data.phones))
    .catch((error) => console.log(error));
    // console.log(Products)
}
const getSony=()=>{
  axios
  .get("https://api-mobilespecs.azharimm.site/v2/brands/sony-phones-7")
  .then((response) => setProducts(response.data.data.phones))
    .catch((error) => console.log(error));
    // console.log(Products)
}

const getMicrosoft=()=>{
  axios
  .get(" http://api-mobilespecs.azharimm.site/v2/brands/microsoft-phones-64")
 
  .then((response) => setProducts(response.data.data.phones))
    .catch((error) => console.log(error));
    // console.log(Products)
}


useEffect(() => {
  axios

  .get("https://api-mobilespecs.azharimm.site/v2/brands/")
  .then((response) => console.log(response.data.data))
    .catch((error) => console.log(error));
},[]);



// console.log(Products)

  return (
    <div className="App">
      <Header/>

      <div className="grid">

      <div className="grid-item">
      <img className="apple" src={apple} onClick={getApple}/><br/>
      <button className="btn" onClick={getApple}> Apple products</button>
      </div>
      
      <div className="grid-item">
      <img className="samsung" src={samsung} onClick={getApple}/>
      <button className="btn" onClick={getSamsung}> Samsung products</button>
      </div>

      <div className="grid-item">
      <img className="google" src={google} onClick={getApple}/>
      <button className="btn" onClick={getGoogle}> Google products </button>
      </div>

      <div className="grid-item">
      <img className="sony" src={sony} onClick={getApple}/>
      <button className="btn" onClick={getSony}> Song products </button>
      </div>

      <div className="grid-item">
      <img className="huawei" src={huawei} onClick={getApple}/>
      <button className="btn" onClick={getHuawei}> Huawei products</button>
      </div>

      <div className="grid-item">
      <img className="microsft" src={microsft} onClick={getApple}/>
      <button  className="btn" onClick={getMicrosoft}> Microsoft products </button>
      </div>

      </div>
    
      {/* {Products.map((element, index) => {
        if (element.name) {
          return <p key={index}> {element.name}</p>;
        }
        if (element.title) {
          return <p key={index}> {element.title}</p>;
        }
      })} */}
       {/* <div className="grids"> */}
     <Product  Products={Products}/>
     {/* </div> */}
    </div>
  );
}

export default App;


