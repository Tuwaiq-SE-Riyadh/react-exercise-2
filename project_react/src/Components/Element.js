import '../App.css';

function Element(props) {
  
  const delItem = () => {
    props.setProducts((list) => {
        const array2 =[];

        
        for(let i = 0 ; i < props.ProductsList.length ; i++){
            if(props.ProductsList[i].id !== props.props.id){

                array2.push(props.ProductsList[i])}
        }
      return array2;
    });
  };


  const addItem = () => {
    props.setProducts((list) => {
        const array2 =[];

        
        for(let i = 0 ; i < props.ProductsList.length ; i++){
            if(props.ProductsList[i].id === props.props.id){
                array2.push(props.ProductsList[i])
                array2.push(props.ProductsList[i])
              continue;}
                array2.push(props.ProductsList[i])
        }
      return array2;
    });
  };



  return (
    <div>

    
<div className="card">
          <img className="card-img-top" src={props.props.image} alt="Card image cap" height="150px"/>
          <div className="card-body">
            <h6 className="card-title">{props.props.title}</h6>
            <p className="card-text">{props.props.description.substring(0, 80)}</p>

          </div>
          <div className="card-footer bo0">
            <small className="text-muted" >
              <a href="/"><button type="button" className="btn btn-primary btn-sm" >{props.props.price}$</button></a>
              
              <button type="button" className="btn btn-danger btn-sm" onClick={delItem} >Delete</button>
              <button type="button" className="btn btn-secondary btn-sm" onClick={addItem} >Item repeat</button>

            </small>
          </div>
        </div>
  
    </div>
  );
}

export default Element;
