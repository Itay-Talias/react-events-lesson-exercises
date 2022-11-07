import React, { Component } from "react";

class Task extends Component {
    complete = () => {
        this.props.complete(this.props.text);
    };

    render() {
        return (
            <div>
                <span>{this.props.text}</span>
                <button onClick={this.complete}>complete</button>
            </div>
        );
    }
}

export default Task;
