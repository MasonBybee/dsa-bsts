class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let current = this.root;
    while (current) {
      if (val < current.val) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(val);
          return this;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(val);
          return this;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    if (val > node.val) {
      if (node.right) {
        this.insertRecursively(val, node.right);
      } else {
        node.right = new Node(val);
        return this;
      }
    } else {
      if (node.left) {
        this.insertRecursively(val, node.left);
      } else {
        node.left = new Node(val);
        return this;
      }
    }
  }

  // /** find(val): search the tree for a node with value val.
  //  * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return;
    let current = this.root;
    while (current) {
      if (val === current.val) return current;
      if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          return;
        }
      } else {
        if (current.left) {
          current = current.left;
          return;
        }
      }
    }
  }

  // /** findRecursively(val): search the tree for a node with value val.
  //  * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (!node) return;
    if (node.val === val) {
      return node;
    }
    if (val > node.val) {
      return node.right ? this.findRecursively(val, node.right) : undefined;
    } else {
      return node.left ? this.findRecursively(val, node.left) : undefined;
    }
  }

  // /** dfsPreOrder(): Traverse the array using pre-order DFS.
  //  * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, nums = []) {
    if (!node) return nums;
    nums.push(node.val);

    if (node.left) {
      this.dfsPreOrder(node.left, nums);
    }

    if (node.right) {
      this.dfsPreOrder(node.right, nums);
    }
    return nums;
  }

  // /** dfsInOrder(): Traverse the array using in-order DFS.
  //  * Return an array of visited nodes. */

  dfsInOrder(node = this.root, nums = []) {
    if (!node) return [];
    if (node.left) {
      this.dfsInOrder(node.left, nums);
    }
    nums.push(node.val);

    if (node.right) {
      this.dfsInOrder(node.right, nums);
    }
    return nums;
  }

  // /** dfsPostOrder(): Traverse the array using post-order DFS.
  //  * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, nums = []) {
    if (!node) return [];

    if (node.left) {
      this.dfsPostOrder(node.left, nums);
    }

    if (node.right) {
      this.dfsPostOrder(node.right, nums);
    }

    nums.push(node.val);

    return nums;
  }

  // /** bfs(): Traverse the array using BFS.
  //  * Return an array of visited nodes. */

  bfs() {
    if (!this.root) return [];
    const bfsQueue = [];
    const visited = [];
    let current = this.root;
    while (current) {
      visited.push(current.val);
      if (current.left) bfsQueue.push(current.left);
      if (current.right) bfsQueue.push(current.right);

      if (bfsQueue.length) {
        current = bfsQueue.shift();
      } else current = false;
    }
    return visited;
  }

  // /** Further Study!
  //  * remove(val): Removes a node in the BST with the value val.
  //  * Returns the removed node. */

  // remove(val) {

  // }

  // /** Further Study!
  //  * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  // /** Further Study!
  //  * findSecondHighest(): Find the second highest value in the BST, if it exists.
  //  * Otherwise return undefined. */

  // findSecondHighest() {

  // }
}

module.exports = BinarySearchTree;
