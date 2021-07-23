import React, { Component} from "react";

class R006_LifecycleEx extends Component{
    static getDeerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call :' + props.prop_value);
        return {};
    }
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }

    render(){
        console.log('3. render call');
        return(
            <h2>[This is construction function]</h2>
        )
    }
}

export default R006_LifecycleEx;

