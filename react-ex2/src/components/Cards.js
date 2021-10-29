function Cards({title , image , desc}) {


    return(
        <>
            <div className="card">
                <img src={image}/>
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </>
    )

    
}

export default Cards;