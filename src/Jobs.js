import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Jobs extends Component {
    constructor(props){
        super(props);
        this.state = {
          data: props.data,
          match: props.match,
          filteredData: this.queryData(props.match.match.params.query, props.data)
        }
    }
    componentWillReceiveProps(props){
        this.setState({data: props.data, filteredData: this.queryData(this.state.match.match.params.query, props.data)});
    }
    queryData(query, data){
        let filteredData = data.filter(x => x.title.includes(query) || x.description.includes(query))
        return filteredData;
    }
    renderData() {
        let renderedData=this.state.filteredData.map(x=>{
            return(
                <tr key={x.id}>
                    <td><Link to={`/Info/${x.id}`} >{x.title}</Link></td>
                </tr>
            );
        });
        return renderedData;
    }
    render () {
        let renderedData = this.renderData();
        return (
            <div>
                <h1>List of Jobs</h1>
                {
                    renderedData.length>0 ?
                    <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderedData}
                    </tbody>
                    </table>
                    :
                    <h2>No Jobs Found</h2>
                }
            </div>
        );
    }
}

export default Jobs;