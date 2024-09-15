import React, { useEffect, useState } from 'react'
import '../App.css'
import './Newss.css'


const Newss = () => {

    const [news,setnews] = useState([]);

    const[search,setsearch] = useState('Crypto');



    // main function which is fetching the news from api
    const api = async (search) => {

        // this fetch api request has ${search} which is the usestae variable and its default value is cryptocurrency which we will change when we click on the search button down there 
        let response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=1fc92fb989e04480a6011a90248b2bbe`)

        let result = await response.json();

        console.log(result);
        setnews(result.articles);
    }

    // initially calling the main function which is fetching the news from api to fetch the api result initially,, it has given the dynamic usestate variable in the api request whos default value is cryptocurrency so initially we will have the data of cryptocurrency
     // Fetch news on component {{{mount}}} with default search value(when the component will first render it will run the api main function with the default usestate variable which we have given as crypto i think)
     useEffect(() => {
        api(search);
    }, []); // Empty dependency array means this runs once on mount

    // Handle form submission
    // after we press the search button the api function will run again and this time with not the default value this time it will run with the value we have taken form the search bar through onchange={e.target.value}
   
    const searching = (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        api(search); // Fetch news with the new search query now this search argument which has our search keyword will go to main function argument then will go to query ${} and then that query will search news related to our searched texts
    };

   
  return (

        

    
<div>
<form onSubmit={searching}>
    <div className="search-container">
         <input type="search" className="search-input" value={search} onChange={(e) => setsearch(e.target.value)} />
         <button type="submit" className="search-button">Search</button>
    </div>
</form>


    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
       
    {news.map((a, key) => (
        <div
            className="bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            key={key}
        >
            <img
                className="object-cover w-full h-56 rounded-t-lg"
                src={a.urlToImage ? a.urlToImage : 'https://via.placeholder.com/400x300?text=No+Image'}
                alt={a.title || 'No image available'}
            />
            <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-800 truncate mb-2">
                    {a.title}
                </h4>
                <p className="mb-4 text-gray-600 h-16 overflow-hidden">
                    {a.content ? a.content.slice(0, 100) + '...' : 'No content available'}
                </p>
                <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md"
                >
                    Read more
                </a>
            </div>
        </div>
    ))}
</div>

   </div> 
  )
}

export default Newss;
