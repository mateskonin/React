import React from 'react';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: 'The content of a textarea goes in the value attribute'
        };
    }
    render() {
        return (
            <form>
                <textarea value={this.state.description} />
            </form>
        );
    }
}