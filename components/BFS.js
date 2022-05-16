const moves = [-1, -48, 1, 48]

const bfs = (graph, start) => {
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
                visited[nextNode] = true;
                distances[nextNode] = distances[node] + 1;
                queue.push(nextNode);
            }
        }
    }
    return distances;
}

export default bfs;