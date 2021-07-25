import React, {Component} from "react";
import datatype from 'prop-types';


class Props2 extends Component{
    render(){
        let { Objectjson } = this.props;
        return (
            <div style={{padding: "0px"}}>
                {JSON.stringify(Objectjson)}
            </div>
        )
    }
}

Props2.proptypetype = {
    Objectjson: datatype.shape({
        react: datatype.string,
        twohundred: datatype.number
    })
}

export default Props2;