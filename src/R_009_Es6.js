import React, { Component } from "react";

class R_009_Es6 extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var js1 = "자바스크립트"
        var js2 = "입니다\n "
        console.log(js1 + js2);

        var es1 = 'ES6'
        var es2 = '입니다'
        console.log(`${es1} ${es2}.`);

        var ls = 'ES6 string was added.'
        console.log('startWith : '+ ls.startsWith('ES6 String'));
        console.log('endsWith : '+ ls.endsWith('was added.'));
        console.log('includes :' + ls.includes('string was'));

    }

    render(){
        return (
            <h2>[This is ES6 string]</h2>
        )
    }

}

export default R_009_Es6;