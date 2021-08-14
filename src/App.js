import React from 'react';
// import PropTypes from 'prop-types';


class App extends React.Component {

  constructor(props){
    super(props)
    console.log("=>Constructor");
  }
  componentDidMount(){
    console.log("=>componentDidmount")
  }
  componentDidUpdate(){
    console.log("=>componentDidUpdate ")
  }
  componentWillUnmount(){
    console.log("=> Bye")
  }
  state = {
    count : 0,
  }

  add = () => {
    this.setState(nowState => ({ count: nowState.count + 1 }));
  }
  minus = () => {
    this.setState(nowState => ({ count: nowState.count - 1 }))

  }
  render(){
    console.log("=>render");

    return <div>
      <h2>The number is {this.state.count}</h2>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
