from flask import Flask
import json
from db import DB

app = Flask(__name__)

@app.route('/')
def index():
    return json.dumps({
        "status": 200,
        "message": "Hello world!"
    })

@app.route('/ue/list')
def all_ue():
    ue = DB.get_all_ue()
    return json.dumps({
        "status": 200,
        "response": [
            x.to_dict() for x in ue
        ]
    })

@app.route('/ue/comments/<ue_id>')
def comments_for_ue(ue_id):
    ue = DB.get_ue(ue_id)
    if not ue:
        return json.dumps({
            "status": 404,
            "message": "UE not found."
        })

    comments = DB.get_comments_for_ue(ue_id)
    return json.dumps({
        "status": 200,
        "response": [
            x.to_dict() for x in comments
        ]
    })


if __name__ == '__main__':
    app.run(debug=True)