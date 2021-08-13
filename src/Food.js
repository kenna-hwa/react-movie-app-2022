import React from 'react';
import PropTypes from 'prop-types';


//객체를 가진 배열
const foodIlike = [{
  id: 1,
  name : "kimchi",
  image : "https://images.unsplash.com/photo-1583224964978-2257b960c3d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2ltY2hpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  rating: 4.1,
},
{
  id: 2,
  name : "cake",
  image : "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  rating: 4.9,
},
{
  id: 3,
  name : "pancakes",
  image : "https://images.unsplash.com/flagged/photo-1557609786-fd36193db6e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFuY2FrZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  rating: 4.2,
},
{
  id: 4,
  name : "chocolate",
  image : "https://images.unsplash.com/photo-1511381939415-e44015466834?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  rating: 4.6,
},
{
  id: 5,
  name : "beef",
  image : "https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVlZnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  rating: 4.8,
}];



function Food({ name, picture, rating }){
  return <div>
  <h4>I like {name}</h4> 
  <p>rating: {rating} / 5.0 </p>
  <img src={picture} alt={name} title={name} />
  </div>
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
}

function App(){
 return (
   <div>
     {foodIlike.map(dish => {
       return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
     })}

   </div>
 );
}

export default App;
