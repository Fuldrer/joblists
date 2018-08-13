import React, { Component } from 'react';
import logo from './logo.svg';
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import axios from 'axios';
import Jobs from "./Jobs";

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }
 
  componentWillMount() {
    axios.get("./positions.json").then(x=>this.setState({data: x.data}));
  }
  render() {
    let {data} = this.state;
    return (
      <BrowserRouter>
        <div>
          <div className="header"></div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Jobs/:query" render={(match)=><Jobs data={data} match={match}/>}/>
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
          <div className="footer"></div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
