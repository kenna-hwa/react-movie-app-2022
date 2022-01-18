import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigation.css';

function Navigation(){
    return (<section className="nav">
        <Link to="/" className="nav_home">Home</Link>
        <Link to="/about" className="nav_about">About</Link>
        <Link to="/movielist" className="nav_movielist">Filmos</Link>
        <Link to="/signin" className="nav_signin">Signin</Link>
    </section>)
}
export default Navigation;