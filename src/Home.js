import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(){
        super();
        this.state= {
            query: ""
        }
    }
    handleChange = (e) => {
        this.setState({query: e.target.value}); 
    }
    render() {
        return (
            <div>
                <h1>Job Search</h1>
                <input type="text" onChange={this.handleChange} name="search" /> 
                <Link className="search "to={`/Jobs/${this.state.query}`}>Search</Link>
            </div>
        );
    }
}

export default Home;