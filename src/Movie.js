import React from 'react';
import PropTypes from 'prop-types';
 
function Movie({id, year, title}){
    return <h4>
        { title }
    </h4>
}

Movie.propTypes = {
    id : PropTypes.string.isRequired,
    year : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
}

export default Movie;