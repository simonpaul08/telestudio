import React from 'react'

const MovieTile = () => {
  return (
    <div className='content-item'>
        <div className="tile-image"></div>
        <div className="tile-content">
            <h3 className='tile-content-name'>Jawan HDRip 2022</h3>
            <div className='tile-content-details'>
              <div className="tile-language">Hindi, English, Spanish</div>
              <div className="tile-views">29K</div>
            </div>
        </div>
    </div>
  )
}

export default MovieTile