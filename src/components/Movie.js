import React from 'react';
import PropTypes from 'prop-types';
import '../css/Movie.css';

 
function Movie({id, year, title}){
    return <article className="movies_info">
        <div className="movies_text">
            {/* <img src={"../images/poster" + id + ".jpg" } alt={ title }></img> */}
            <h4 className="movies_title">{ title }</h4> 
            <p className="movies_year">{ year.slice(0,4) }</p> 
        </div>
    </article>
}

Movie.propTypes = {
    year : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
}

export default Movie;