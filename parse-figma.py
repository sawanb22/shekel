import json

file_path = r'C:\Users\bhard\.cursor\projects\d-web-peojects-shakeel\agent-tools\e286ff2b-147e-4e5d-8e2b-bf3a0a406a12.txt'

def find_node(node, node_id):
    if isinstance(node, dict):
        if node.get('id') == node_id:
            return node
        children = node.get('children', [])
        for child in children:
            res = find_node(child, node_id)
            if res: return res
    elif isinstance(node, list):
        for item in node:
            res = find_node(item, node_id)
            if res: return res
    return None

def extract_nodes(node, root_box, depth=0):
    if not isinstance(node, dict):
        return
    box = node.get('absoluteBoundingBox', {})
    if box:
        local_x = box.get('x', 0) - root_box.get('x', 0)
        local_y = box.get('y', 0) - root_box.get('y', 0)
        print(f"{'  ' * depth}- {node.get('name', '')} ({node.get('type', '')}): local x={local_x}, local y={local_y}, w={box.get('width', 0)}, h={box.get('height', 0)}")
        if node.get('type') == 'TEXT':
            print(f"{'  ' * (depth+1)}TEXT: {repr(node.get('characters', ''))}")
            style = node.get('style', {})
            print(f"{'  ' * (depth+1)}STYLE: size={style.get('fontSize')}, lineH={style.get('lineHeightPx')}, weight={style.get('fontWeight')}, font={style.get('fontFamily')}, color={node.get('fills', [{}])[0].get('color', {})}")
            
    children = node.get('children', [])
    for child in children:
        extract_nodes(child, root_box, depth + 1)

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # find the first valid {"document":
    start = content.find('{"document"')
    if start == -1:
        start = content.find('{"id":')
        
    if start != -1:
        # We might have extra characters before '{'
        start = content.rfind('{', 0, start+1)
        
        # Try parsing from here
        try:
            data = json.loads(content[start:])
            root = find_node(data, '508:7475')
            if root:
                box = root.get('absoluteBoundingBox', {})
                print(f"ROOT 508:7475: abs x={box.get('x')}, y={box.get('y')}, w={box.get('width')}, h={box.get('height')}")
                extract_nodes(root, box)
            else:
                print("Node 508:7475 not found")
        except json.JSONDecodeError as e:
            print(f"JSON Decode Error at pos {start}: {e}")
            print(f"Content snippet: {content[start:start+100]}")
    else:
        print("Could not find start of JSON payload.")
except Exception as e:
    print(f"Error: {e}")
