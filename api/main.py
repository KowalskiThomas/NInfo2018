from flask import Flask, request
import json
from db import DB
from classes import *
import rer

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

@app.route('/ue/comments/<ue_id>', methods = ['POST'])
def add_comment_for_ue(ue_id):
    ue = DB.get_ue(ue_id)
    if not ue:
        return json.dumps({
            "status": 404,
            "message": "UE not found."
        })

    try:
        author = request.form["author"]
        content = request.form["content"]
    except KeyError:
        return json.dumps({
            "status": 401,
            "message": "Missing parameter."
        })
    
    ue_comment = UEComment(
        ue_id = ue_id,
        author = author,
        content = content
    )

    new_comment = DB.add_comment(ue_comment)

    return json.dumps({
        "status": 200,
        "response": new_comment.to_dict() 
    })

@app.route('/rer/next')
def all_next_rer():
    next_rer = rer.get_next_rer()
    return json.dumps({
        "status": 200,
        "response": next_rer
    })

@app.route('/rer/next/<count>')
def next_count(count):
    next_rer = rer.get_next_rer(count)
    return json.dumps({
        "status": 200,
        "response": next_rer
    })

if __name__ == '__main__':
    app.run(debug=True)