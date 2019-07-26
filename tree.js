
//declare node for binarysearchtree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//declare class binarysearchtree
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //insert a node

    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode;
        } else {

            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode) {
        if (node.value > newNode.value) {
            if (node.left == null) {
                node.left = newNode
            } else {
                node = node.left
                this.insertNode(node, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                node = node.right
                this.insertNode(node, newNode)
            }
        }
    }

    inOrderTraverse(cb) {

        this.inOrderTraverseNode(this.root, cb)
    }
    
    inOrderTraverseNode(node, cb) {

    }

}

let bst = new BinarySearchTree()

bst.insert(8)
bst.insert(6)
bst.insert(9)
bst.insert(5)
console.log(bst)

