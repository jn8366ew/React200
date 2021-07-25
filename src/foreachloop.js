import React, { Component } from "react";

class Foreachloop extends Component{

    componentDidMount() {
        var arr = [3,2,8,8];
        var new_arr = [];

        for (var i = 0; i < arr.length; i++){
            new_arr.push(arr[i]);
        }
        console.log(new_arr)

        var arr2 = [1,2,3,4];
        var new_arr2 = [];

        arr2.forEach((result) => {
            new_arr2.push(result);
        })
        console.log(new_arr2);
    }

    render(){
        return (
            <h2>Foreach</h2>
        )
    }
}

export default Foreachloop;