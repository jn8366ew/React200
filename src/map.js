import React, {Component} from "react";


class Map extends Component{
    componentDidMount() {
        var map_arr = [3,2,1,6];
        // map 함수를 이용해 배열의 원소를 순서대로 쌓아 올리기
        let map_newarr = map_arr.map(x => x);
        console.log(map_newarr);

        // 배열의 원소에 *2 를 곱해서 저장
        let map_multiarr = map_arr.map(x => x * 2)
        console.log(map_multiarr);

        // 배열안에 오브젝트 생성
        var objarray = [{key: 'react', value: '200'},
            {key: '리액트', value: '300'}];

        let map_objarr = objarray.map((obj, index) => {
            console.log((index), JSON.stringify(obj))
            var new_objarr = {};
            new_objarr[obj.key] = obj.value;
            return new_objarr;

        });
        console.log(JSON.stringify(map_objarr))
    }

    render(){
       return(
           <h2>This is map</h2>
             )
    }


}

export default Map;