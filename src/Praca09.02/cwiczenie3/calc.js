import React from "react";

export default class Calc extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }
    showPrompt = () => {
        var value = prompt("Podaj Liczbe");
        let tempVal=this.state.number + parseInt(value);
        this.setState({number: tempVal})
    }
    render() {



        return (
            <div>
                <button onClick={this.showPrompt}>Wprowadz liczbe</button>
                <p>Wynik: {this.state.number}</p>
            </div>
        );
    }
}
