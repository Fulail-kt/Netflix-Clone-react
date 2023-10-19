import React, { useEffect, useState } from 'react'
import axios from '../../Axios/Axios'
import { API_KEY,IMAGE_URL } from '../../Constants/Constants'
import './Banner.css'

function Banner() {

    const [movie,Setmovie]=useState()

    useEffect(()=>{

        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{

        console.log(response.data.results[0])

        const value=Math.floor(Math.random() * 21)

        Setmovie(response.data.results[value])
    })
    },[])


  return (
    
    <div style={{backgroundImage:`url(${movie ? IMAGE_URL+movie.backdrop_path : ""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:''}</h1>
            <div className='banner_btn'>
            <button className='btn'>Play</button>
            <button className='btn'>My list</button>
            </div>
        <h1 className='description'>{movie?movie.overview:''}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
