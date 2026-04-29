import yaml
import sys
import json

file_path = r'C:\Users\bhard\.cursor\projects\d-web-peojects-shakeel\agent-tools\e286ff2b-147e-4e5d-8e2b-bf3a0a406a12.txt'

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        try:
            from yaml import CLoader as Loader
        except ImportError:
            from yaml import Loader
        data = yaml.load(f, Loader=Loader)
except Exception as e:
    print(f"Error reading YAML: {e}")
    sys.exit(1)

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

root_node = find_node(data, '508:7438') or find_node(data, '508-7438')
if not root_node:
    print("Node 508:7438 not found")
    sys.exit(0)

def get_box(node):
    return node.get('absoluteBoundingBox') or node.get('absoluteRenderBounds') or {}

root_box = get_box(root_node)
root_x = root_box.get('x', 0)
root_y = root_box.get('y', 0)

def format_color(c):
    if not isinstance(c, dict): return str(c)
    r = int(c.get('r', 0) * 255)
    g = int(c.get('g', 0) * 255)
    b = int(c.get('b', 0) * 255)
    a = c.get('a', 1.0)
    if a == 1.0:
        return f"#{r:02X}{g:02X}{b:02X}"
    return f"rgba({r}, {g}, {b}, {a:.2f})"

def extract_fills(fills):
    if not fills: return 'none'
    if not isinstance(fills, list): return str(fills)
    res = []
    for f in fills:
        if f.get('visible') is False: continue
        t = f.get('type', '')
        if t == 'SOLID':
            color = format_color(f.get('color'))
            opacity = f.get('opacity', 1.0)
            res.append(f"SOLID: {color}" + (f" (opacity: {opacity})" if opacity != 1.0 else ""))
        elif 'GRADIENT' in t:
            stops = [f"{format_color(s.get('color'))} @ {s.get('position')}" for s in f.get('gradientStops', [])]
            res.append(f"{t}: [{', '.join(stops)}]")
        else:
            res.append(t)
    return " | ".join(res)

def extract_effects(effects):
    if not effects: return ''
    if not isinstance(effects, list): return str(effects)
    res = []
    for e in effects:
        if e.get('visible') is False: continue
        t = e.get('type', '')
        if t in ['DROP_SHADOW', 'INNER_SHADOW']:
            c = format_color(e.get('color'))
            off = e.get('offset', {})
            ox = off.get('x', 0)
            oy = off.get('y', 0)
            rad = e.get('radius', 0)
            res.append(f"{t} {c} offset={ox},{oy} radius={rad}")
        else:
            res.append(t)
    return ", ".join(res)

def print_node(node, depth=0):
    indent = '  ' * depth
    box = get_box(node)
    w = box.get('width') or node.get('size', {}).get('x', 0)
    h = box.get('height') or node.get('size', {}).get('x', 0)
    abs_x = box.get('x', 0)
    abs_y = box.get('y', 0)
    
    rel_x = abs_x - root_x
    rel_y = abs_y - root_y
    
    name = node.get('name', 'Unnamed')
    nid = node.get('id', '')
    ntype = node.get('type', 'UNKNOWN')
    
    # skip purely structural frames if they have no visual props?
    # Actually, let's just print them all, but be concise.
    info = f"{indent}- [{ntype}] {name} (id: {nid})"
    info += f"\n{indent}  Pos(rel): x={rel_x:.2f}, y={rel_y:.2f}, w={w:.2f}, h={h:.2f}"
    
    fills = node.get('fills') or node.get('background')
    if fills:
        info += f"\n{indent}  Fills: {extract_fills(fills)}"
    
    strokes = node.get('strokes')
    if strokes:
        sw = node.get('strokeWeight', 0)
        info += f"\n{indent}  Strokes: {extract_fills(strokes)} (weight: {sw})"
        
    cr = node.get('cornerRadius')
    if cr:
        info += f"\n{indent}  Corner Radius: {cr}"
    elif node.get('rectangleCornerRadii'):
        info += f"\n{indent}  Corner Radii: {node.get('rectangleCornerRadii')}"
        
    eff = extract_effects(node.get('effects'))
    if eff:
        info += f"\n{indent}  Effects: {eff}"
        
    if ntype == 'TEXT':
        style = node.get('style', {})
        chars = node.get('characters', '')
        # Escape newlines
        chars_esc = chars.replace('\n', '\\n')
        info += f"\n{indent}  Text: \"{chars_esc}\""
        
        lh = style.get('lineHeightPx') or style.get('lineHeightPercentFontSize') or style.get('lineHeightPercent') or 'auto'
        font = f"{style.get('fontFamily')} {style.get('fontWeight')}"
        size = style.get('fontSize')
        ls = style.get('letterSpacing', 0)
        align = style.get('textAlignHorizontal', 'LEFT')
        
        info += f"\n{indent}  Font: {font}, Size: {size}, LineHeight: {lh}, LetterSpacing: {ls}, Align: {align}"
    
    print(info)
    
    for child in node.get('children', []):
        print_node(child, depth + 1)

print("ROOT NODE INFO:")
root_w = root_box.get('width', 0)
root_h = root_box.get('height', 0)
print(f"Canvas W: {root_w}, Canvas H: {root_h}")
fills = root_node.get('fills') or root_node.get('background')
print(f"Root Fills: {extract_fills(fills)}")
print("\nHIERARCHY:")
print_node(root_node)
