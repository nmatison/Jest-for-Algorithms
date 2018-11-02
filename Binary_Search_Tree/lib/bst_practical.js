var kthLargest = function(node, k) {
  let height = nodeCount(node.right);
  if (height === k - 1) return node;
  if (height >= k) return kthLargest(node.right, k)
  return kthLargest(node.left, k - height - 1)

  
};

const nodeCount = (root) => {
  if (root === null) {
    return 0;
  }
  return 1 + nodeCount(root.left) + nodeCount(root.right);
}
module.exports = kthLargest;