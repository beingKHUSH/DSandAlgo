let Graph = function (v) {
  this.v = v;
  this.adj = new Array(v);
};

Graph.prototype.addEdge = function (u, v) {
  if (!this.adj[u]) {
    this.adj[u] = new Array();
  }
  this.adj[u].push(v);
};

Graph.prototype.printGraph = function () {
  this.adj.shift();
  console.log(this.adj);
};

Graph.prototype.bfsGraphTraversal = function () {
  let visited = new Array(this.v).fill(false);
  let u = 0;
  let queue = new Array();
  visited[u] = true;
  queue.push(u);
  console.log(u);
  while (queue.length !== 0) {
    let v = queue.shift();
    for (let i = 0; i < this.adj[v].length; i++) {
      if (!visited[this.adj[v][i]]) {
        visited[this.adj[v][i]] = true;
        queue.push(this.adj[v][i]);
        console.log(this.adj[v][i]);
      }
    }
  }
};

Graph.prototype.dfsGraphTraversal = function () {
  let visited = new Array(this.v).fill(false);
  let u = 0;
  let stack = new Array();
  visited[u] = true;
  stack.push(u);
  while (stack.length !== 0) {
    let count = 0;
    let v = stack[stack.length - 1];
    for (let i = 0; i < this.adj[v].length; i++) {
      if (!visited[this.adj[v][i]]) {
        count = 1;
        visited[this.adj[v][i]] = true;
        stack.push(this.adj[v][i]);
        break;
      }
    }
    if (count === 0) {
      console.log(stack.pop());
    }
  }
};

Graph.prototype.recursiveDFSGraphTraversal = function () {
  let visited = new Array(this.v).fill(false);
  DFS = (u) => {
    visited[u] = true;
    for (let i = 0; i < this.adj[u].length; i++) {
      if (!visited[this.adj[u][i]]) {
        DFS(this.adj[u][i]);
      }
    }
    console.log(u);
  };
  DFS(0);
};

let graph1 = new Graph(6);
graph1.addEdge(0, 1);
graph1.addEdge(1, 2);
graph1.addEdge(1, 4);
graph1.addEdge(2, 1);
graph1.addEdge(2, 3);
graph1.addEdge(2, 4);
graph1.addEdge(3, 5);
graph1.addEdge(4, 2);
graph1.addEdge(4, 5);
graph1.addEdge(5, 3);
graph1.addEdge(5, 4);

graph1.bfsGraphTraversal();

console.log();

graph1.recursiveDFSGraphTraversal();
