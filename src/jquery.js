import React, {Component} from "react";
import $ from 'jquery';


class Jquery_prac extends Component{
    input_alert = (e) => {
        var input_val = $('#inputID').val();
        alert(input_val);
    }

    render(){
        return (
            <div>
                <h2>Jquery</h2>
                <input id="inputID" name="inputName" />
                <button id="buutonID" onClick={e => this.input_alert(e)}>
                    Jquery
                </button>
            </div>
        )
    }

}

export default Jquery_prac;