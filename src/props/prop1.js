import React from "react";

class Car extends React.Component {

    render(){

        var car= prompt("Change car");

        return (<h2>I am a car {car} !</h2>)
            ;
    }
}

export default class Garage extends React.Component{
    render(){

        return(
            <div>
                <h1>Who lives in my garage?</h1>
                <Car brand="Ford"/>
            </div>
        )}


        }


