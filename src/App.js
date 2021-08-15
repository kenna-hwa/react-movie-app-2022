import React from 'react';
// import PropTypes from 'prop-types';


class App extends React.Component {

  state = {
    isLoading: true,
    movies: [],
  }

componentDidMount(){
  setTimeout(() => {
    this.setState({isLoading : false})
  }, 6000)
}
  render(){

    const { isLoading } = this.state;
   
    return <div>
      <p>{
        isLoading ? "Loading..." : "We are Ready!"
      }</p>
    </div>
  }
}

export default App;
