import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(){
    super();
    this.state = {
      customers: [],
      backend: ''
    };
  }

  componentDidMount(){
    fetch('/api/hello')
    .then(res => res.json())
    .then( (customers,backend) => this.setState({customers , backend}) )

  }



  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.customers }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   return body;
  // };

  render() {
console.log(this.state.backend);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <p className="App-intro">{this.state.customers}</p> */}
        {
          this.state.customers.map((obj,index)=>{
            return(
              <div key={index}> 
              user: {index}
              <li>  name: {obj.name} </li>
              {/* <li>  id  : {obj.id} </li>
              <li>  age : {obj.age} </li> */}
              <br/><br/>
            </div>
            )
          })
        }

        {this.state.backend}
      </div>
    );
  }
}

export default App;

