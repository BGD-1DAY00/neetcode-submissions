/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;
        let map = new Map(); 
        let graphSet = new Set(); 

        function stepOne(node){
            if(graphSet.has(node)) return;

            graphSet.add(node)
            let newNode = new Node(node.val)
            map.set(node, newNode)
            for(let i = 0; i < node.neighbors.length; i++){
                stepOne(node.neighbors[i])
            }
        }

    
        // function stepTwo(node){
        //     if(graphSet.has(node)) return;

        //     graphSet.add(node)
        //     let currNode = map.get(node)

        //     for(let i = 0; i < node.neighbors.length; i++){
        //         currNode.neighbors.push(map.get(node.neighbors[i]))
        //         stepTwo(node.neighbors[i])
        //     }
        // }
        function stepTwo(node) {  // Pass visited set as parameter
            console.log("step 1: ", graphSet);
            console.log("first")
            console.log(node.val, graphSet)
            if(graphSet.has(node)) return;  // Only check visited
            
            graphSet.add(node);
            let cloneNode = map.get(node);
            
            for(let neighbor of node.neighbors) {  // Can use for...of here
                cloneNode.neighbors.push(map.get(neighbor));  // Add clone of neighbor
                stepTwo(neighbor);  // Pass visited set
            }
        }

        stepOne(node);
        graphSet.clear(); 
        console.log("here set cleared ", graphSet)

        stepTwo(node);
        console.log(map);
        return map.get(node);

    }
}
