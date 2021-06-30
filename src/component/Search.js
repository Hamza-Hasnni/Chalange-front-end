import React ,{useState} from 'react'

function Search({setFila}) {
    const [search, setSearch] = useState("")   
 const handleSearchFinal=(e)=>{
     e.preventDefault();
       setFila(search);
       setSearch("")
     }
    return (
        <div>
            <form onSubmit={handleSearchFinal} >
     <input value={search} placeholder='search for a cocktail...' type="text" onChange={(e)=>setSearch(e.target.value)}/>
     <button>Search</button>
     </form>
        </div>
    )
}

export default Search
