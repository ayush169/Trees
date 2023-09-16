function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function insert(root, data) {
  if (root === null) {
    root = new Node(data);
  } else if (data <= root.data) {
    root.left = insert(root.left, data);
  } else {
    root.right = insert(root.right, data);
  }
  return root;
}

function search(root, data) {
  if (root === null) {
    return false;
  } else if (root.data === data) {
    return true;
  } else if (data < root.data) {
    return search(root.left, data);
  } else {
    return search(root.right, data);
  }
}

function findMin(root) {
  if (root === null) {
    return null;
  } else if (root.left === null) {
    return root.data;
  } else {
    return findMin(root.left);
  }
}

function inorder(node) {
  if (node !== null) {
    inorder(node.left);
    console.log(node.data);
    inorder(node.right);
  }
}

let root = null;

root = insert(root, 15);
root = insert(root, 10);
root = insert(root, 20);
root = insert(root, 25);
root = insert(root, 8);
root = insert(root, 12);

// console.log(search(root, 12));

// inorder(root);
