const fs = require('fs');
let text = fs.readFileSync('C:\\Users\\bhard\\.cursor\\projects\\d-web-peojects-shakeel\\agent-tools\\e286ff2b-147e-4e5d-8e2b-bf3a0a406a12.txt', 'utf8');

// The file might start with "metadata:\n" or similar.
const firstBrace = text.indexOf('{');
if (firstBrace > 0) {
  text = text.substring(firstBrace);
}

const data = JSON.parse(text);

function findNode(node, id) {
  if (node.id === id) return node;
  if (node.children) {
    for (let c of node.children) {
      const found = findNode(c, id);
      if (found) return found;
    }
  }
  return null;
}

const rootNode = findNode(data.document, '508:7475');
if (!rootNode) {
  console.error("Node not found");
  process.exit(1);
}

console.log(`Root Node: ${rootNode.name} (${rootNode.id}) - W: ${rootNode.absoluteBoundingBox.width}, H: ${rootNode.absoluteBoundingBox.height}`);

function printNode(node, indent = "") {
  let pos = "";
  if (node.absoluteBoundingBox) {
    const localX = node.absoluteBoundingBox.x - rootNode.absoluteBoundingBox.x;
    const localY = node.absoluteBoundingBox.y - rootNode.absoluteBoundingBox.y;
    pos = `[x: ${localX}, y: ${localY}, w: ${node.absoluteBoundingBox.width}, h: ${node.absoluteBoundingBox.height}]`;
  }
  console.log(`${indent}- ${node.name} (${node.type}) ${pos}`);
  if (node.children) {
    node.children.forEach(c => printNode(c, indent + "  "));
  }
}

printNode(rootNode);
