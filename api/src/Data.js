import React from 'react';
//import ReactDOM from 'react-dom';


class Data extends React.Component{

    constructor(){
        super();
        this.state={color:'red'}
    }

    render(){
        return(
            <>
            <h1>{this.state.color}</h1>
            <h2>{this.props.name}</h2>
            </>
        );
    }
}

export default Data