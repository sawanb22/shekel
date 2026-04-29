const fs = require('fs');

const filePath = 'C:\\Users\\bhard\\.cursor\\projects\\d-web-peojects-shakeel\\agent-tools\\e286ff2b-147e-4e5d-8e2b-bf3a0a406a12.txt';

let data;
try {
    const content = fs.readFileSync(filePath, 'utf8');
    data = JSON.parse(content);
} catch (e) {
    console.error("Error reading or parsing file:", e.message);
    process.exit(1);
}

function findNode(obj, id) {
    if (!obj || typeof obj !== 'object') return null;
    if (obj.id === id) return obj;
    
    if (Array.isArray(obj)) {
        for (let item of obj) {
            const found = findNode(item, id);
            if (found) return found;
        }
    } else {
        for (let key in obj) {
            const found = findNode(obj[key], id);
            if (found) return found;
        }
    }
    return null;
}

const rootNode = findNode(data, '508:7475') || findNode(data, '508-7475');
if (!rootNode) {
    console.log("Node 508:7475 not found.");
    process.exit(0);
}

const rootX = rootNode.absoluteBoundingBox?.x || rootNode.absoluteRenderBounds?.x || 0;
const rootY = rootNode.absoluteBoundingBox?.y || rootNode.absoluteRenderBounds?.y || 0;

function formatColor(color) {
    if (!color) return 'none';
    const r = Math.round(color.r * 255);
    const g = Math.round(color.g * 255);
    const b = Math.round(color.b * 255);
    const a = color.a !== undefined ? color.a : 1;
    if (a === 1) {
        return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}`;
    }
    return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`;
}

function extractFills(fills) {
    if (!fills || !fills.length) return 'none';
    return fills.filter(f => f.visible !== false).map(f => {
        if (f.type === 'SOLID') {
            return `SOLID: ${formatColor(f.color)}${f.opacity ? ` (opacity: ${f.opacity})` : ''}`;
        }
        if (f.type && f.type.includes('GRADIENT')) {
            const stops = f.gradientStops?.map(s => `${formatColor(s.color)} @ ${s.position}`).join(', ');
            return `${f.type}: [${stops}]`;
        }
        return f.type || 'UNKNOWN';
    }).join(' | ');
}

function printNode(node, depth = 0) {
    const indent = '  '.repeat(depth);
    
    const w = node.absoluteBoundingBox?.width || node.size?.x || 0;
    const h = node.absoluteBoundingBox?.height || node.size?.y || 0;
    const absX = node.absoluteBoundingBox?.x || node.absoluteRenderBounds?.x || 0;
    const absY = node.absoluteBoundingBox?.y || node.absoluteRenderBounds?.y || 0;
    
    const relX = absX - rootX;
    const relY = absY - rootY;
    
    let info = `${indent}- [${node.type}] ${node.name} (id: ${node.id})`;
    info += `\n${indent}  Position (rel): x=${relX.toFixed(2)}, y=${relY.toFixed(2)}, w=${w.toFixed(2)}, h=${h.toFixed(2)}`;
    
    if (node.fills && node.fills.length) {
        info += `\n${indent}  Fills: ${extractFills(node.fills)}`;
    } else if (node.background && node.background.length) { // Some old Figma versions
        info += `\n${indent}  Backgrounds: ${extractFills(node.background)}`;
    }
    if (node.strokes && node.strokes.length) {
        info += `\n${indent}  Strokes: ${extractFills(node.strokes)} (weight: ${node.strokeWeight})`;
    }
    if (node.cornerRadius) {
        info += `\n${indent}  Corner Radius: ${node.cornerRadius}`;
    } else if (node.rectangleCornerRadii) {
        info += `\n${indent}  Corner Radii: [${node.rectangleCornerRadii.join(', ')}]`;
    }
    if (node.effects && node.effects.length) {
        const effects = node.effects.filter(e => e.visible !== false).map(e => {
            if (e.type === 'DROP_SHADOW' || e.type === 'INNER_SHADOW') {
                return `${e.type} ${formatColor(e.color)} offset=${e.offset?.x},${e.offset?.y} radius=${e.radius}`;
            }
            return e.type;
        }).join(', ');
        if (effects) info += `\n${indent}  Effects: ${effects}`;
    }
    
    if (node.type === 'TEXT') {
        const style = node.style || {};
        info += `\n${indent}  Text: ${JSON.stringify(node.characters || '')}`;
        info += `\n${indent}  Font: ${style.fontFamily} ${style.fontWeight}, Size: ${style.fontSize}, LineHeight: ${style.lineHeightPx || style.lineHeightPercentFontSize || style.lineHeightPercent || 'auto'}, LetterSpacing: ${style.letterSpacing || 0}, Align: ${style.textAlignHorizontal}`;
        info += `\n${indent}  Text Color: ${node.fills ? extractFills(node.fills) : 'none'}`;
    }
    
    console.log(info);
    
    if (node.children) {
        node.children.forEach(child => printNode(child, depth + 1));
    }
}

console.log("ROOT NODE INFO:");
const w = rootNode.absoluteBoundingBox?.width || rootNode.size?.x;
const h = rootNode.absoluteBoundingBox?.height || rootNode.size?.y;
console.log(`Canvas W: ${w}, Canvas H: ${h}`);
console.log(`Root Fills: ${extractFills(rootNode.fills || rootNode.background)}`);
console.log("\nHIERARCHY:");
printNode(rootNode);
