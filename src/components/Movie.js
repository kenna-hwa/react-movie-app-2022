import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/Movie.css';

 
class Movie extends React.Component{
    render(){
    const {year, title} = this.props;
    return ( 
        <Link to={{
            pathname: `/movie?movieCd=${year}`,
            state: {year, title},
            }}>
            <article className="movies_info">
                <div className="movies_text">
                    <h4 className="movies_title">{ title }</h4> 
                    <p className="movies_year">{ year.slice(0,4) }</p> 
                </div>
            </article>
        </Link>
    ) 
    }
}

Movie.propTypes = {
    year : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
}

export default Movie;