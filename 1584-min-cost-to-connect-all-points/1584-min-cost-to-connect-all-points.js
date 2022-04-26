function minCostConnectPoints(points) {
    const verticiesCount = points.length;
    const pq = new MinPriorityQueue({priority: ([cost]) => cost});
    const visited = new Array(verticiesCount).fill(false);
    let totalCost = 0, connections = 0, current = 0;
    while (++connections < verticiesCount) {
        visited[current] = true;
        for (const [cost, neighbor] of uniqueConnections(current)) {
            pq.enqueue([cost, neighbor]);
        }
        while (visited[pq.front().element[1]]) {
            pq.dequeue();
        }
        const [cost, node] = pq.dequeue().element;
        totalCost += cost;
        current = node;
    }
    return totalCost;
    
    function* uniqueConnections(curr) {
        for (let i = 0; i < verticiesCount; i++) {
            if (i === curr || visited[i]) continue;
            
            yield [dist(points[curr], points[i]), i];
        }
    }
};

function dist([x1, y1], [x2, y2]) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}