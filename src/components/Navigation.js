import React from 'react';
import { Link } from 'react-router-dom';
// import '../css/Navigation.css';

function Navigation(){
    return (<section className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </section>)
}
export default Navigation;