import React from 'react';

import LowestChild from "./lowestChild";
import LowestLowestChild from "./lowestLowestChild";
import NestedInParent from "./nestedInParent";

export default class Parent extends React.Component {
    render(){
        const author = {name: "Dawid", surname: "Matecki"};

        return (
            <div>
                <NestedInParent display={author}/>

            </div>
        );
    }
}
