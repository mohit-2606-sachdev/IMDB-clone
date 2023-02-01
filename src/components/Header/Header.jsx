import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='px-4 py-3'>
        <div>
            <Link  to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" width='80px' alt="logo" />
            </Link>
            <Link className='link' to="/movies/popular">Popular</Link>
            <Link className='link' to="/movies/top_rated"> Top Rated</Link>
            <Link className='link' to="/movies/upcoming">Upcoming</Link>
        </div>
    </div>
  )
}

export default Header