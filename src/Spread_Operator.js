import React, { Component } from "react";

class Spread_Operator extends Component{

    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {

        var varArray1 = ['num1', 'num2'];
        var varArray2 = ['num3', 'num4'];
        var sumVar = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
        console.log('1. sumVar : '+ sumVar);


        let sumLetArr = [...varArray1, ...varArray2];
        console.log('sumletarr: ' + sumLetArr)

        const [sum1, sum2, ...remain] = sumLetArr;
        console.log('3. sum1: ' + sum1 + ' sum2 :' + sum2 + ' remain: ' + remain);

        var vobj1 = { key1: 'val1', key2: 'val2'};
        var vobj2 = { key3: 'val3', key4: 'val2'};

        var sumvarobj = Object.assign({}, vobj1, vobj2);
        console.log(sumvarobj);
        console.log('4. sumvarobj: '+ JSON.stringify(sumvarobj));

        var sumLetobj = {...vobj1, ...vobj2};
        console.log('sumletobj: ' + JSON.stringify(sumLetobj));

        var {key1, key2, ...other} = sumLetobj;
        console.log('key1: ' + key1 + ' key2: ' + key2 + ' other: ' + JSON.stringify(other));

    }

    render(){
        return (
            <h2>[Spread_Operator]</h2>
        )
    }
}

export default Spread_Operator;