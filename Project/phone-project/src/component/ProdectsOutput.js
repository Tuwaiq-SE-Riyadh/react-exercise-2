
import './component.css'
import { useState, useEffect } from "react";
// import MoreImg from './MoreImg'


function ProdectsOutput({phone_name,image,brand,detail}){
//     const[check,setCheck]=useState(false)
// const onS=()=>{
//     setCheck(true)
// }
    return(
        <>
       
          <div className="grid-item">
          
                    <img src={image}  />
                    <p>Brand name: {brand}</p>
                    <p>{phone_name}</p>   
                    {/* <button onClick={onS}>detial</button> */}
                    {/* <MoreImg detail={detail} check={check}/>            */}
          </div>
       
        </>    )

}
export default ProdectsOutput 



// const [detail,setDetial]=useState([])

// const getDetial=()=>{
//     axios
//  .get("http://api-mobilespecs.azharimm.site/v2/apple_ipad_9_7_(2018)-9142")
//  .then ((response)=>  console.log(((response.data.data))))
//  .catch((error) => console.log(error))
//  console.log("saadsad "+setDetial);
 
//   }


// {detail.map((element,index)=>{
//     if(element){
//        return ( 
//        <>
//    <img src={element}  />
//              </> )
//     }else 
//     return

//    })
//    }