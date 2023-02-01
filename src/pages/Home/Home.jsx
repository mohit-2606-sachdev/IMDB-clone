import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MovieList from '../../components/MovieList/MoviList';


function Home() {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8fd52c3f385f787c6c9c347320f4e236`)
            .then(data => setPopularMovies(data.data.results))
    }, [])


    return (
        <>
            <div className='poster'>
                <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false}>
                    {popularMovies.map((movie) =>
                       (<>
                       <Link style={{textDecoration:'none', color:'white'}} to={`/movie/${movie.id}`}>
                       <div className='posterImage' key={movie.title}>
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie.title} />
                        </div>
                        <div className='posterImage_overlay'>
                            <div className="posterImage_title">{movie? movie.original_title:''}</div>
                            <div className="posterImage_runtime">
                                {movie ? movie.release_date:''}
                                <span className='posterImage_rating'>
                                    {movie ? movie.vote_average:''}
                                    <i class="fa fa-star"></i>{" "}
                                </span>
                            </div>
                            <div className='posterImage_description'>
                                {movie ? movie.overview : ''}
                            </div>
                        </div>
                        </Link></>)
                    )}
                </Carousel>
                <MovieList/>
            </div>
            
        </>
    )
}

export default Home