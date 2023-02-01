import React, { useState, useEffect } from 'react'
import "./MovieDetail.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'


function MovieDetail() {

    const { id } = useParams()
    const [currentMovie, setCurrentmovie] = useState()

    useEffect(() => {
        
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8fd52c3f385f787c6c9c347320f4e236`)
        
        .then(data => setCurrentmovie(data.data))
        
        window.scrollTo(0, 0)
        // eslint-disable-next-line
    }, [])


    return (
        <div className='movie'>
            <div className="movie_intro">
                <img className='movie_backdrop' src={`https://image.tmdb.org/t/p/original${currentMovie && currentMovie.backdrop_path}`} alt="" />
            </div>
            <div className="movie_detail">
                <div className="movie_detailLeft">
                    <div className="movie_poster">
                        <img className='movie_poster' src={`https://image.tmdb.org/t/p/original${currentMovie && currentMovie.poster_path}`} alt="" />
                    </div>
                </div>
                <div className="movie_detailRight">
                    <div className="movie_detailRightTop">
                        <div className="movie_name">{`${currentMovie && currentMovie.title} `}</div>
                        <div className="movie_tagline">{`${currentMovie && currentMovie.tagline} `}</div>
                        <div className="movie_rating">{currentMovie && currentMovie.vote_average}
                            <i class="fa fa-star"></i>{" "}
                            <span>({currentMovie && currentMovie.vote_count}){"  "}Vote</span>
                        </div>
                        <div className="movie_runtime">{`${currentMovie && currentMovie.runtime} min`}</div>
                        <div className="movie_releaseDate">{`${currentMovie && "Release Date: " + currentMovie.release_date}  `}</div>
                        <div className="movie_genres">
                            {
                                currentMovie && currentMovie.genres
                                    ?
                                    currentMovie.genres.map(genre => (
                                        <>
                                            <span className='movie_genre' id={genre.id}>{genre.name}</span>
                                        </>
                                    )) : ""
                            }
                        </div>
                    </div>
                    <div className="movi_detailRightBottom">
                        <div className="synopsistext">Synopsis</div>
                        <div>{currentMovie && currentMovie.overview}</div>
                    </div>
                </div>
            </div>
            <div className="movie_links">
                <div className="movie_heading">Useful Links</div>
                {currentMovie && currentMovie.homepage && <a href={currentMovie.homepage} rel="noreferrer" target='_blank' style={{ textDecoration: 'none' }}> <p><span className="movie_homeButton movie_Button">Homepage <i class="newtab fas fa-external-link-alt" aria-hidden="true"></i> </span></p> </a>}
                {currentMovie && currentMovie.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovie.imdb_id} rel="noreferrer" target='_blank' style={{ textDecoration: 'none' }}><p><span className="movie_imdbButton movie_Button">IMDB <i class="newtab fas fa-external-link-alt" aria-hidden="true"></i> </span></p></a>}
            </div>
            <div className="movie_heading">Production Companies</div>
            <div className="movie_production">
                {currentMovie && currentMovie.production_companies && currentMovie.production_companies.map(company => (
                    <>
                        {
                            company.logo_path
                            &&
                            <span className="productionCompanyImage">
                                <img className='movie_productionComapany' src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt="" />
                                <span>{company.name}</span>
                            </span>
                        }
                    </>
                ))}
            </div>
        </div>
    )
}

export default MovieDetail