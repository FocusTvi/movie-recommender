import React,{ useState} from "react";

function SearchBox({onSearch}){
    const [ searchText , setSearchText] = useState("")
    const handleSearch = async()=>{
        const response = await fetch(`http://127.0.0.1:5000/api/recommendation?title=${searchText}`)
        const data = await response.json();
        onSearch(data.movies);
    }

    return(
        <div className="search-box">
            <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
            <button onClick={handleSearch}>Search</button>
        </div>
    )

}

export default SearchBox;