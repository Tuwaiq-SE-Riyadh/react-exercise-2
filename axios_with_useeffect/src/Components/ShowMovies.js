
function ShowMovies({link})
{

    const showMovi = ()=>{
        return link.map((ele)=>{
            if(ele.title)
            {
                return <h1>{ele.title}</h1>
            }
            else{
                return <h1>{ele.name}</h1>
            }
        })
    }


    return <>
            {showMovi()}
            </>
}

export default ShowMovies;