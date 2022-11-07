import React, { Component } from "react";

class Exercise1 extends Component {
    constructor() {
        super();
        this.state = {
            images: [
                "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
                "https://img.purch.com/rc/300x200/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA3Ni85MTYvb3JpZ2luYWwvc3BpbmFjaC5qcGc=",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg",
            ],
            currentImg: 0,
        };
    }
    shiftImageBack = () => {
        let newCurrentImg = this.state.currentImg - 1;
        if (newCurrentImg < 0) {
            newCurrentImg = 2;
        }
        this.setState({ currentImg: newCurrentImg });
    };
    shiftImageForward = () => {
        let newCurrentImg = Math.abs((this.state.currentImg + 1) % 3);
        this.setState({ currentImg: newCurrentImg });
    };

    render() {
        return (
            <div>
                <button onClick={this.shiftImageBack}>Previous</button>
                <img
                    src={this.state.images[this.state.currentImg]}
                    alt="dasfsdfsdfdsd"
                ></img>
                <button onClick={this.shiftImageForward}>Next</button>
            </div>
        );
    }
}

export default Exercise1;
