import React, { Component} from "react";

class R004_Lifecycle extends Component{

    // return 된 html 코드를 render함수를 사용해 화면에 표시
    render() {
        console.log('3. rendercall');
        return (
            <h2>[This Render Function]</h2>
        )
    }
}

export default R004_Lifecycle