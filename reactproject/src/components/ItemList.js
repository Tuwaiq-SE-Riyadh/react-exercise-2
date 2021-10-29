import Item from "./Item";
function ItemList({list,setList}) {
  return (
      <>
      {list.map((e,i)=>{
        return<Item className="itemsList" name={e.name} 
        i={e.id} gender={e.gender} species={e.species} 
        status={e.status} image={e.image} list={list} setList={setList}/>
      })}
      </>
  );
}

export default ItemList;