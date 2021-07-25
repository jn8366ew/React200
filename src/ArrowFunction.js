import React, {Component} from "react";

class ArrowFunction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrowFuc: 'React',
            n: 3
        };
    }

    componentDidMount() {
        this.f1(1,1);
        // this.f2(1,3);
        this.f3();
        this.f4(0,2,3);

    }

    f1 = (n1, n2) => {
        let n3 = n1 + n2;
        console.log(n3, this.state.arrowFuc);
    }

    // f2() {
    //     var this_bind = this;
    //     setTimeout(function() {
    //         console.log(this_bind.state.num);
    //         console.log(this.state.arrowFuc);
    //     }, 100);
    // }

    f3() {
        setTimeout(function (){
            console.log(this.state.arrowFuc);
        }.bind(this), 100);
    }

    f4 = (n1,n2,n3) => {
        const n4 = n1 + n2 + n3;
        setTimeout(() => {
            console.log(n4, this.state.arrowFuc);
        }, 100);
    }

    render() {
        return (
            <h2> ArrowFuncton </h2>
        )
    }
}
export default ArrowFunction;