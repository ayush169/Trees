//level order or breadth first search
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

function findHeight(root) {
  if (root === null) {
    return -1;
  }
  let leftHeight = findHeight(root.left);
  let rightHeight = findHeight(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

function levelOrder(root) {
  if (root === null) {
    return;
  }
  let queue = [];
  let levelOrder = [];
  queue.push(root);
  while (queue.length > 0) {
    let temp = queue.shift();
    // console.log(temp.data);
    levelOrder.push(temp.data);
    temp.left && queue.push(temp.left);
    temp.right && queue.push(temp.right);
  }
  console.log(levelOrder);
}

let root = null;

root = insert(root, 15);
root = insert(root, 10);
root = insert(root, 20);
root = insert(root, 25);
root = insert(root, 8);
root = insert(root, 12);
root = insert(root, 11);

levelOrder(root);
