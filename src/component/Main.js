import React, { useEffect, useState } from 'react'
import './Main.css'
import { BiSearch } from 'react-icons/bi'
import Card from './Card'
import { getDefaultNormalizer } from '@testing-library/react'
import Footer from './Footer'
import icon from './../images/icon.png'
let API_Key="&api_key=b7dbcac8c791ab955033bd0e552ff84c"
let base_url="https://api.themoviedb.org/3"
let url= base_url+"/discover/movie?sort_by=popularity.desc"+API_Key;
let array=["Popular","Theater","Kids","Drama","Comedia","Science Fiction"]
const Main = () => {
    const [moviedata,setmoviedata]=useState([]);
    const [url_set,seturl]=useState(url);
    const [search,setsearch]=useState();

    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            //console.log(data.results);
            setmoviedata(data.results)

        });

    },[url_set])

    const getData=(movieType)=>{
        if(movieType==="Popular"){
            url=base_url+"/discover/movie?sort_by=popularity.desc"+API_Key;
        }
        if(movieType==="Theater"){
            url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_Key;
        }
        if(movieType==="Kids"){
            url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_Key;
        }
        if(movieType==="Drama"){
            url=base_url+"/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10"+API_Key;
        }
        if(movieType==="Comedia"){
            url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_Key;
        }
        if(movieType==="Science Fiction"){
            url=base_url+"/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc"+API_Key;
        }

        seturl(url)


    }
    const searchmovie=(evt)=>{
        if(evt.key=="Enter")
        {
            url=base_url+"/search/movie?api_key=b7dbcac8c791ab955033bd0e552ff84c&query="+search;
            seturl(url);
            setsearch(" ");
        }
    }
  return (
    <>
    <div className='header'>
        <nav>
       
            <ul>
            <div className='brand'>
            <img src={icon} className="icon-img" />
            <h2>Movie <br/> recommend</h2>
        </div>
            {
                
                        array.map((value,pos)=>{
                            return(
                                <li><a href="#" key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                            )
                        })
                    }
              
            </ul>
        </nav>

        <form>
            <div className='search'>
                <input type="text" placeholder="Enter name" className='input-search' onChange={(e)=>{setsearch(e.target.value)}} 
                    value={search} onKeyPress={searchmovie}></input>
                <button><BiSearch/></button>
            </div>
        </form>


    </div>
    <div className='container'>
      { (moviedata.length==0)?<p className='notfound'>Please make sure you are connected to the internet</p>
      : moviedata.map((res,pos)=>{
        return(
            <Card info={res} key={pos} />
        )
      })
}
    </div>
    <hr/>
    <Footer/>
    </>
  )
}

export default Main









/* const searchMovie=(evt)=>{
    if(evt.key=="Enter")
    {
        url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
        setUrl(url);
        setSearch(" ");
    }
}
return(
    <>
        <div className="header">
            <nav>
                <ul>
                    {
                        arr.map((value,pos)=>{
                            return(
                                <li><a href="#" key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                            )
                        })
                    }
                   
                </ul>
            </nav>
            <form>
                <div className="search-btn">
                    <input type="text" placeholder="Enter Movie Name" 
                    className="inputText" onChange={(e)=>{setSearch(e.target.value)}} 
                    value={search} onKeyPress={searchMovie}>
                    </input>
                    <button><i className="fas fa-search"></i></button>
                </div>
            </form>
        </div>
        <div className="container">
            {
                (movieData.length==0)?<p className="notfound">Not Found</p>: movieData.map((res,pos)=>{
                    return(
                        <Card info={res} key={pos}/>
                    )
                })
            }</div>*/