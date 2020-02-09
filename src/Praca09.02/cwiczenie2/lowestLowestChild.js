import React from 'react';

export default class LowestLowestChild extends React.Component{
    render() {
        return (
            <div>
                <p>(Lowest lowest child) Imie: {this.props.displayToLL.name}, Nazwisko: {this.props.displayToLL.surname}</p>
                <LowestLowestChild displayToLowestLowestName={this.props.display}/>
            </div>
        )
    }
}
