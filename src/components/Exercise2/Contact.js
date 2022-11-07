import React, { Component } from "react";

class Contact extends Component {
    displayConvo = () => {
        this.props.displayConvo(this.props.name);
    };
    render() {
        return (
            <div className="contact" onClick={this.displayConvo}>
                {this.props.name}
            </div>
        );
    }
}

export default Contact;
