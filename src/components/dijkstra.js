// A Javascript program for Dijkstra's single
// source shortest path algorithm.
// The program is for adjacency matrix
// representation of the graph

// A utility function to find the
// vertex with minimum distance
// value, from the set of vertices
// not yet included in shortest
// path tree
function minDistance(dist, sptSet, V) {
	// Initialize min value
	let min = Number.MAX_VALUE;
	let min_index = -1;

	for (let v = 0; v < V; v++) {
		if (sptSet[v] == false && dist[v] <= min) {
			min = dist[v];
			min_index = v;
		}
	}
	return min_index;
}

// A utility function to print
// the constructed distance array
function printSolution(dist, V, visited) {
	console.log("Vertex \t\t Distance from Source");
	for (let i = 0; i < V; i++) {
		console.log(i + " \t\t " + dist[i]);
	}
	// console.log("Vertex \t\t Nodes Visited");
	// for (let i = 0; i < V; i++) {
	// 	console.log(i + " \t\t " + visited[i]);
	// }
}

// Function that implements Dijkstra's
// single source shortest path algorithm
// for a graph represented using adjacency
// matrix representation
function dijkstra(graph, src, V) {
	let dist = new Array(V);
	let sptSet = new Array(V);
	let visited = new Array(V);

	// Initialize all distances as
	// INFINITE and stpSet[] as false
	for (let i = 0; i < V; i++) {
		dist[i] = Number.MAX_VALUE;
		sptSet[i] = false;
		visited[i] = src + "->";
	}

	// Distance of source vertex
	// from itself is always 0
	dist[src] = 0;

	// Find shortest path for all vertices
	for (let count = 0; count < V - 1; count++) {
		// Pick the minimum distance vertex
		// from the set of vertices not yet
		// processed. u is always equal to
		// src in first iteration.
		let u = minDistance(dist, sptSet, V);

		// Mark the picked vertex as processed
		sptSet[u] = true;

		// Update dist value of the adjacent
		// vertices of the picked vertex.
		for (let v = 0; v < V; v++) {
			// Update dist[v] only if is not in
			// sptSet, there is an edge from u
			// to v, and total weight of path
			// from src to v through u is smaller
			// than current value of dist[v]
			// console.log(v);

			if (
				!sptSet[v] &&
				graph[u][v] != 0 &&
				dist[u] != Number.MAX_VALUE &&
				dist[u] + graph[u][v] < dist[v]
			) {
				dist[v] = dist[u] + graph[u][v];
				console.log(v, dist[u], graph[u][v]);
				visited[v] += u + "->" + v + "->";
			}
		}
	}
	// console.log(visited);

	// Print the constructed distance array
	printSolution(dist, V, visited);
}

function tryMe() {
	// Driver code
	// let graph = [
	// 	[0, 4, 0, 0, 0, 0, 0, 8, 0],
	// 	[4, 0, 8, 0, 0, 0, 0, 11, 0],
	// 	[0, 8, 0, 7, 0, 4, 0, 0, 2],
	// 	[0, 0, 7, 0, 9, 14, 0, 0, 0],
	// 	[0, 0, 0, 9, 0, 10, 0, 0, 0],
	// 	[0, 0, 4, 14, 10, 0, 2, 0, 0],
	// 	[0, 0, 0, 0, 0, 2, 0, 1, 6],
	// 	[8, 11, 0, 0, 0, 0, 1, 0, 7],
	// 	[0, 0, 2, 0, 0, 0, 6, 7, 0],
	// ];
	// dijkstra(graph, 0, graph.length);

	const graph = {
		a: { b: 5, c: 2 },
		b: { a: 5, c: 7, d: 8 },
		c: { a: 2, b: 7, d: 4, e: 8 },
		d: { b: 8, c: 4, e: 6, f: 4 },
		e: { c: 8, d: 6, f: 3 },
		f: { e: 3, d: 4 },
	};

	const graph1 = {
		Algeria: {
			Tunisia: 628,
			Morocco: 949,
			Libya: 1013,
			Mauretania: 2780,
		},
		Morocco: { Algeria: 949, Mauretania: 1978 },
		Tunisia: { Algeria: 628, Libya: 521 },
		Libya: {
			Tunisia: 521,
			Algeria: 1013,
		},
		Mauretania: {
			Algeria: 2780,
			Morocco: 1978,
		},
	};

	console.log(graph1);

	dijkstra1(graph1, "Morocco", "Libya");
}

const printTable = (table) => {
	return Object.keys(table)
		.map((vertex) => {
			var { vertex: from, cost } = table[vertex];
			return `${vertex}: ${cost} via ${from}`;
		})
		.join("\n");
};

const tracePath = (table, start, end) => {
	var path = [];
	var next = end;
	while (true) {
		path.unshift(next);
		if (next === start) {
			break;
		}
		next = table[next].vertex;
	}

	return path;
};

const formatGraph = (g) => {
	const tmp = {};
	Object.keys(g).forEach((k) => {
		const obj = g[k];
		const arr = [];
		Object.keys(obj).forEach((v) => arr.push({ vertex: v, cost: obj[v] }));
		tmp[k] = arr;
	});
	return tmp;
};

export const dijkstra1 = (graph, start, end) => {
	var map = formatGraph(graph);

	var visited = [];
	var unvisited = [start];
	var shortestDistances = { [start]: { vertex: start, cost: 0 } };

	var vertex;
	while ((vertex = unvisited.shift())) {
		// Explore unvisited neighbors
		var neighbors = map[vertex].filter((n) => !visited.includes(n.vertex));

		// Add neighbors to the unvisited list
		unvisited.push(...neighbors.map((n) => n.vertex));

		var costToVertex = shortestDistances[vertex].cost;

		for (let { vertex: to, cost } of neighbors) {
			var currCostToNeighbor =
				shortestDistances[to] && shortestDistances[to].cost;
			var newCostToNeighbor = costToVertex + cost;
			if (
				currCostToNeighbor == undefined ||
				newCostToNeighbor < currCostToNeighbor
			) {
				// Update the table
				shortestDistances[to] = { vertex, cost: newCostToNeighbor };
			}
		}

		visited.push(vertex);
	}

	console.log("Table of costs:");
	console.log(printTable(shortestDistances));

	const path = tracePath(shortestDistances, start, end);

	console.log(
		"Shortest path is: ",
		path.join(" -> "),
		" with weight ",
		shortestDistances[end].cost
	);
	let finalDistance = shortestDistances[end].cost;
	return { path, finalDistance };
};

export default tryMe;
