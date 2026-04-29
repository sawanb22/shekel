import yaml
import sys
import re

file_path = r'C:\Users\bhard\.cursor\projects\d-web-peojects-shakeel\agent-tools\e286ff2b-147e-4e5d-8e2b-bf3a0a406a12.txt'

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        try:
            from yaml import CLoader as Loader
        except ImportError:
            from yaml import Loader
        data = yaml.load(f, Loader=Loader)
except Exception as e:
    sys.exit(1)

styles = data.get('globalVars', {}).get('styles', {})

def resolve(val):
    if isinstance(val, str) and val in styles:
        return resolve(styles[val])
    elif isinstance(val, list):
        return [resolve(v) for v in val]
    elif isinstance(val, dict):
        return {k: resolve(v) for k, v in val.items()}
    return val

def find_node(obj, target_id):
    if isinstance(obj, dict):
        if str(obj.get('id', '')) == target_id:
            return obj
        for k, v in obj.items():
            res = find_node(v, target_id)
            if res:
                return res
    elif isinstance(obj, list):
        for item in obj:
            res = find_node(item, target_id)
            if res:
                return res
    return None

def get_dimensions(node):
    w, h, x, y = 0, 0, 0, 0
    if 'absoluteBoundingBox' in node and isinstance(node['absoluteBoundingBox'], dict):
        dim = node['absoluteBoundingBox']
        w = dim.get('width', 0)
        h = dim.get('height', 0)
        x = dim.get('x', 0)
        y = dim.get('y', 0)
    elif 'layout' in node and isinstance(node['layout'], dict):
        dim = node['layout'].get('dimensions', {})
        w = dim.get('width', 0)
        h = dim.get('height', 0)
        pos = node['layout'].get('locationRelativeToParent', {})
        x = pos.get('x', 0)
        y = pos.get('y', 0)
    return w, h, x, y

def extract_fills(fills):
    if not fills: return 'none'
    if not isinstance(fills, list): 
        if isinstance(fills, dict): fills = [fills]
        else: return str(fills)
    res = []
    for f in fills:
        if isinstance(f, str):
            res.append(f)
            continue
        if f.get('visible') is False: continue
        t = f.get('type', '')
        if t == 'SOLID':
            color = f.get('color', {})
            opacity = f.get('opacity', 1.0)
            res.append(f"SOLID: {color}" + (f" (opacity: {opacity})" if opacity != 1.0 else ""))
        elif 'gradient' in f:
            res.append(f"GRADIENT: {f['gradient']}")
        else:
            res.append(t)
    return " | ".join(res)

def extract_typography(style):
    if not isinstance(style, dict): return str(style)
    font = f"{style.get('fontFamily', '')} {style.get('fontWeight', '')}"
    size = style.get('fontSize', '')
    lh = style.get('lineHeight', '')
    ls = style.get('letterSpacing', 0)
    align = style.get('textAlignHorizontal', 'LEFT')
    return f"Font: {font}, Size: {size}, LineHeight: {lh}, LetterSpacing: {ls}, Align: {align}"

def print_node(node, depth=0):
    indent = '  ' * depth
    w, h, x, y = get_dimensions(node)
    
    name = node.get('name', 'Unnamed')
    nid = node.get('id', '')
    ntype = node.get('type', 'UNKNOWN')
    
    info = f"{indent}- [{ntype}] {name} (id: {nid})"
    info += f"\n{indent}  Pos: x={x}, y={y}, w={w}, h={h}"
    
    fills = node.get('fills') or node.get('background')
    if fills: info += f"\n{indent}  Fills: {extract_fills(fills)}"
    
    strokes = node.get('strokes')
    if strokes: info += f"\n{indent}  Strokes: {extract_fills(strokes)} (weight: {node.get('strokeWeight', 0)})"
        
    cr = node.get('cornerRadius')
    if cr: info += f"\n{indent}  Corner Radius: {cr}"
        
    if node.get('effects'):
        eff = [e.get('type') for e in node['effects'] if isinstance(e, dict) and e.get('visible') is not False]
        info += f"\n{indent}  Effects: {', '.join(eff)}"
        
    if ntype == 'TEXT':
        style = node.get('textStyle', {})
        if isinstance(style, str) and style in styles:
            style = styles[style]
            
        raw_text = node.get('text', '')
        clean_text = re.sub(r'\{/?ts\d+\}', '', raw_text)
        clean_text = clean_text.replace('\n', '\\n')
        
        info += f"\n{indent}  Text: \"{clean_text}\""
        info += f"\n{indent}  Typography: {extract_typography(style)}"
        if 'fills' in node:
            info += f"\n{indent}  Text Color: {extract_fills(node['fills'])}"
    
    print(info)
    
    for child in node.get('children', []):
        if isinstance(child, dict) and child.get('visible', True) is not False:
            print_node(child, depth + 1)

nodes_to_find = ['508:7674', '508:7520']
for n_id in nodes_to_find:
    node = find_node(data.get('nodes', data), n_id) or find_node(data.get('nodes', data), n_id.replace(':', '-'))
    if node:
        node = resolve(node)
        print(f"\n--- NODE {n_id} ---")
        print_node(node)
    else:
        print(f"\n--- NODE {n_id} NOT FOUND ---")
