import '../App.css';
import axios from 'axios'
import { useState, useEffect } from "react";
import Element from './Element';

function Products() {


    const [ProductsList, setProducts] = useState([]);



  
    useEffect(() => {
      axios.all([
        axios.get('https://fakestoreapi.com/products')
      ])
      .then(r => {
        setProducts(r[0].data);
         });
    
        }
    
    ,[]);
  




  return (
<div>
    <div className="d9">


        <div className="c">
            <div className="card-group2" className="dc0">


  {  ProductsList.map((element, index) => {
        return <Element props={element}  key={index} setProducts={setProducts} ProductsList={ProductsList} />
      })}

            </div>
        </div>
    </div>
</div>
  );
}

export default Products;
