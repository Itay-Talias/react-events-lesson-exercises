import React, { Component } from "react";

class Conversation extends Component {
    backHandler = () => {
        this.props.displayConvo();
    };
    render() {
        const sender = this.props.sender;
        return (
            <div>
                {this.props.convo.map((c, i) => {
                    return (
                        <div key={i}>
                            <span>{c.sender === "self" ? sender : "Me"}:</span>
                            <span>{c.text}</span>
                        </div>
                    );
                })}
                <button onClick={this.backHandler}>Back</button>
            </div>
        );
    }
}

export default Conversation;
