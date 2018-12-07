import json
import requests

def get_next_rer(count = None):
    url = "http://54.36.183.108/json.php"
    r = requests.get(url)
    try:
        j = r.json()
    except json.JSONDecodeError:
        return None

    if count is None:
        return j
    else:
        return j[:min((count, len(j)))]

def get_next_rer_test(count = None):
    with open("sample_rer.json") as f:
        j = json.load(f)

    if count is None:
        return j
    else:
        return j[:min((count, len(j)))]

if __name__ == '__main__':
    print(get_next_rer(1))