import requests, re, json

# Try the chunk files which might have the API key
chunk_urls = [
    'https://www.regulations.gov/assets/chunk.27.a5488a95adbaf3318aed.js',
    'https://www.regulations.gov/assets/chunk.143.f0f3e2a6910cb56061ad.js',
]

for url in chunk_urls:
    resp = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=60)
    print(f'URL: {url}')
    print(f'Size: {len(resp.text)}')
    
    # Search for API key
    text = resp.text
    
    # Look for api.data.gov key format
    patterns = [
        r'api[_-]?key["\'\s:=]+([A-Za-z0-9]{20,50})',
        r'X-Api-Key["\'\s:=]+([A-Za-z0-9]{20,50})',
        r'"key"\s*:\s*"([A-Za-z0-9]{20,50})"',
    ]
    
    for pattern in patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        if matches:
            print(f'  Pattern matches: {matches[:3]}')
    
    # Look for api.regulations.gov
    if 'api.regulations.gov' in text:
        idx = text.find('api.regulations.gov')
        print(f'  Found API URL: {text[max(0,idx-100):idx+200]}')
    
    print()

# Also check the main app bundle more carefully
resp = requests.get('https://www.regulations.gov/', headers={'User-Agent': 'Mozilla/5.0'}, timeout=30)
# Find all script sources
scripts = re.findall(r'src="([^"]+\.js)"', resp.text)
print('All script sources:', scripts)
