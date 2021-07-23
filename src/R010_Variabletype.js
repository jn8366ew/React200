import React, { Component } from "react";

class R010_Variable_type extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varName = 'react';
        console.log('varName1 : ' + varName);
        var varName = '200'
        console.log('varName2 : ' + varName);


        let letName = 'react';
        console.log('letName : ' + letName);
        // Error if re-declare letName
        // let letName = 'react 200';
        // console.log('varName2 : ' + letName);
        letName = 'react-200';
        console.log('letName : ' + letName);


        const constName = 'react';
        console.log('constName : ' + constName);

    }

    render(){
        return(
            <h2>[This is Sec.10]</h2>
        )
    }

}

export default R010_Variable_type;