class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (this.root === null) {
      return new Node(data);
    } else if (data < this.root.data) {
      this.root.left = this.insert(data);
    } else {
      this.root.right = this.insert(data);
    }
    return root;
  }

  inorder() {
    if (this.root !== null) {
      inorder(this.root.left);
      console.log(this.root.data);
      inorder(this.root.right);
    }
  }

  search(data) {
    if (this.root === null) {
      return false;
    } else if (this.root.data === data) {
      return true;
    } else if (data < this.root.data) {
      return this.search(this.root.left, data);
    } else {
      return this.search(this.root.right, data);
    }
  }
}

const bst = new BinarySearchTree();
root = bst.insert(15);
root = bst.insert(10);
// bst.insert(20);
// bst.insert(25);
// bst.insert(8);
// bst.insert(12);

console.log(root);

bst.inorder();
