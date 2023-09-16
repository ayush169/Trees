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

//recursive
// function findMin(root) {
//   if (root === null) {
//     return null;
//   } else if (root.left === null) {
//     return root.data;
//   } else {
//     return findMin(root.left);
//   }
// }

//iterative
function findMin(root) {
  if (root === null) {
    return null;
  } else {
    while (root.left !== null) {
      root = root.left;
    }
    return root.data;
  }
}

function findMax(root) {
  if (root === null) {
    return null;
  } else if (root.right === null) {
    return root.data;
  } else {
    return findMax(root.right);
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

let root = null;
root = insert(root, 25);
root = insert(root, 10);
root = insert(root, 35);
root = insert(root, 5);
root = insert(root, 17);
root = insert(root, 40);
root = insert(root, 20);
root = insert(root, 15);
root = insert(root, 3);
root = insert(root, 8);
root = insert(root, 1);
root = insert(root, 4);
root = insert(root, 6);
root = insert(root, 9);
root = insert(root, 39);
root = insert(root, 42);

// console.log(search(root, 12));

// console.log(findMin(root));
// console.log(findMax(root));

console.log(findHeight(root));

// inorder(root);
