import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './MovieList.css'
import Card from '../Card/Card'

function MoviList() {

    const { type } = useParams()
    const [movieList, setmovieList] = useState([])


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=8fd52c3f385f787c6c9c347320f4e236`)
            .then(data => setmovieList(data.data.results))
            // eslint-disable-next-line
    }, [])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=8fd52c3f385f787c6c9c347320f4e236`)
            .then(data => setmovieList(data.data.results))
            // eslint-disable-next-line
    }, [type])

    
    return (
        <div className='movie_list'>
            <h2 className="list_title">{(type ? type : 'POPULAR').toUpperCase()}</h2>
            <div className="list_cards">
                {
                    movieList.map((movie) => (
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MoviList