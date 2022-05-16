import React from 'react'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    createNodes() {
        const width = 48;
        const height = 24;

        const grid = [];
        for (let index = 0; index < width * height; index++) {
            grid.push(index);
        }

        const nodes = grid.map((node) =>
            <div className={"node " + "node-" + node}></div>
        )
        return nodes
    }

    render() {
        return (
            <div className="grid-container">{this.createNodes()}</div>
        );
    }
}

export default Board;