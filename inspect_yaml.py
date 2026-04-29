import yaml
import sys

file_path = r'C:\Users\bhard\.cursor\projects\d-web-peojects-shakeel\agent-tools\e286ff2b-147e-4e5d-8e2b-bf3a0a406a12.txt'

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        try:
            from yaml import CLoader as Loader
        except ImportError:
            from yaml import Loader
        data = yaml.load(f, Loader=Loader)
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)

print("Keys in data:", data.keys())
if 'globalVars' in data:
    print("Keys in globalVars:", data['globalVars'].keys())
    if 'styles' in data['globalVars']:
        # Let's print the first style
        for k, v in data['globalVars']['styles'].items():
            print(f"Sample style {k}:", v)
            break
