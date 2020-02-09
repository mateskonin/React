import React from 'react';
import lowestLowestChild from "./lowestLowestChild";
export default class LowestChild extends React.Component{
    render() {
        return (
            <div>
                <p>(Lowest child) Imie: {this.props.displayToLowestName.name}, Nazwisko: {this.props.displayToLowestSurname.surname}</p>
                <LowestChild displayToLL={this.props.displayToLowestName}/>
            </div>
        )
    }
}
