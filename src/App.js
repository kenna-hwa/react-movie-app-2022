import React from 'react';



function Food(props){
  console.log(props)
  return <h4>I like potato</h4>
}


function App(){
 return (
   <div>
     <h1>Hello!!!!!</h1>
    <Food fav="kimchi" something={true} papapa={[1, 2, 3, "haha"]}/>

   </div>
 );
}

export default App;
