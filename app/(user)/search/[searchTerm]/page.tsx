import React from 'react'

type PageProps ={
    params:{
        searchTerm:string;
    }
}

type SearchResult ={
    organic_results: [{
        title:string;
        position:number;
        link:string;
        snippet:string;
        thumbnail:string;
    }]
}

const search = async (searchTerm: string)=>{
    const res = await fetch(`https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`)

    // throw error

    //throw new Error('Whoops something went wrong')

    const data: SearchResult = await res.json()
    return data
}
async function SearchResults({params: {searchTerm} }:PageProps) {
    const searchResults = await search(searchTerm)


  return (
    <div>
        <p className="text-sm text-gray-500">{`You searched for: ${searchTerm.replace(/%20/g, ' ')}`}</p>
        <ol className="space-y-5 p-5">
            {searchResults.organic_results.map((result)=>(
                <li key={result.position} className="list-decimal">
                <p className="font-bold">{result.title}</p>
                <p>{result.snippet}</p>
                </li>
            ))}
        </ol>
    </div>
  )
}

export default SearchResults