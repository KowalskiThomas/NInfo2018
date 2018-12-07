import json
import requests

key = "AIzaSyBAk6DhDyvN5PeuQKmyam-VJHsuYDXOJo8"
def get_routes(orig, dest):
    url = "https://maps.googleapis.com/maps/api/directions/json?origin={orig}&destination={dest}&key={key}&mode=walking&language=fr".format(
        orig = orig,
        dest = dest,
        key = key
    )
    r = requests.get(url)
    j = r.json()
    if j.get("status", "") == "NOT_FOUND":
        return None

    legs = j["routes"][0]["legs"]
    return legs

if __name__ == '__main__':
    get_routes("qsjlkdqksjdlkqjsd", "pjqjskkjlqsd")
    get_routes("evry france", "paris")
