import React from "react";
import LowestChild from "./lowestChild";
export default class NestedInParent extends React.Component {
    render(){
        return (
            <div>
                <p>(nestedInParent) Imie: {this.props.display.name}, Nazwisko: {this.props.display.surname}</p>
                <LowestChild displayToLowestName={this.props.display}/>

            </div>
        );
    }
}
