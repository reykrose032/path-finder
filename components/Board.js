import React from 'react'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            grid: [],
            history: []
        }
    }
    
    componentDidMount() {
        const width = 48;
        const height = 24;

        const grid = [];
        for (let index = 0; index < width * height; index++) {
            grid.push({index, visited: false});
        }

        this.setState({
            grid: grid
        })
    }

    componentDidUpdate() {
        
    }

    createNodes() {
        const nodes = grid.map((node) =>
            <div className={"node " + "node-" + node}></div>
        )
        return nodes
    }

    
    bfs (graph, start) {
        const moves = [-1, -48, 1, 48]

        var queue = [];
        queue.push(start);

        var visited = [];
        visited[start] = true;

        var distances = [];
        distances[start] = 0;

        while (queue.length > 0) {
            var node = queue.shift();

            for (var i = 0; i < 4; i++) {
                const nextNode = node + moves[i]
                if (graph[nextNode] && !visited[nextNode]) {
                    // Finish when destiny is found. Restart bfs for every new destiny
                    // For each 4 moves iteration, update state
                    this.setState({
                        history: this.state.history.concat([])
                    })
                    visited[nextNode] = true;
                    distances[nextNode] = distances[node] + 1;
                    queue.push(nextNode);
                }
            }
        }
        return distances;
    }

    render() {
        return (
            <div className="grid-container">{this.createNodes()}</div>
        );
    }
}

export default Board;