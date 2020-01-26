import React from 'react';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            errormessagename: '',
            errormessageage: ''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        var errAge = '';
        var errName = '';
        if (nam === "age") {
            if (val != "" && !Number(val)) {
                errAge = <strong>Your age must be a number</strong>;
            }
            this.setState({errormessageage: errAge});
        }
        if (nam === "username") {
            if (val.length <= 2) {
                errName = <strong>Length of name must be higher than 2 characters</strong>;
            }
            this.setState({errormessagename: errName});
        }

        this.setState({[nam]: val});
    }
    render() {
        return (
            <form>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>{this.state.errormessagename}</p>

                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler}
                />
                <p>{this.state.errormessageage}</p>
            </form>
        );
    }
}