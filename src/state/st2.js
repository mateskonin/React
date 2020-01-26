import React from 'react';

export default class Car extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964,
            adress: {
                street: 123,
                no: 31231,
                counter: 0,

            }
        };
    }
     changeColor = (color) => {
        this.setState({counter: this.state.counter + 1, color:color})
        }
        requestColor = () => {
        var color = prompt("Wpisz kolor");
        this.changeColor(color);
        }





     //changeColor=()=> {
     //   this.setState({color:"blue"});
    // function changeColor(){this.setState({color:"blue"});}

    render(){
        return(
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model}

                    from {this.state.year}.
                </p>
                <button
                    type="button"
                    onClick={this.requestColor}
                    >Change color</button>
                <p>Kliknięto {this.state.counter}</p>
            </div>
        );
    }
}