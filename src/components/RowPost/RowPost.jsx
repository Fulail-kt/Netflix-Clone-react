import React from 'react'
import './RowPost.css'
import { useState,useEffect } from 'react'
import Youtube from 'react-youtube'
import {IMAGE_URL,API_KEY} from '../../Constants/Constants'
import axios from '../../Axios/Axios'

function RowPost(props) {

    const [movies,Setmovies]=useState([])
    const [urlId,setUrlId]=useState('')
    const [loading,setLoading]=useState('')

    useEffect(()=>{

        axios.get(props.url).then((response)=>{
            console.log(response.data.results)

            Setmovies(response.data.results)
        })

    },[])

    const opts={
      height:'390',
      width:'100%',
      playerVars:{

        autoplay:0,
      },
    }

    const handleMovie = (id) => {
      console.log(id);

      setLoading(true)
    
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
          
        } else {
          console.log('empty');

        }
        setLoading(false);
      });
    }
    

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((item,index)=>{
         return(   <img  onClick={()=> handleMovie(item.id)} className={props.isSmall?'smallPoster':'poster'} src={IMAGE_URL+item.backdrop_path}  key={index} alt="" />)
        })}
      </div>
{loading?(<p style={{width:'100',textAlign:'center'}}>Loading......</p>):(
urlId &&  <Youtube opts={opts} videoId={urlId.key}/>
)}
    </div>
  )
}

export default RowPost
