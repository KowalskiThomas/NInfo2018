from flask import Flask, request
import json

from classes import *
from db import DB
import rer
import weather

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

@app.route('/announcements/', methods = ['POST'])
def new_announcement():
    try:
        author = request.form["author"]
        content = request.form["content"]
    except KeyError:
        return json.dumps({
            "status": 401,
            "message": "Missing parameter"
        })

    new_ann = DB.add_announcement(Announcement(
        author = author,
        content = content
    ))

    return json.dumps({
        "status": 200,
        "response": new_ann.to_dict()
    })

@app.route('/announcements/', methods = ['GET'])
def get_announcements():
    announcements = DB.get_all_announcements()
    return json.dumps({
        "status": 200,
        "response": [
            x.to_dict() for x in announcements
        ]
    })   

@app.route('/weather/<coord>')
def get_weather(coord):
    try:
        lat, lng = map(float, coord.split(","))
    except:
        return json.dumps({
            "status": 401,
            "message": "Wrong parameters."
        })

    w = weather.get_weather_list(lat, lng)

    return json.dumps({
        "status": 200,
        "response": w
    })

if __name__ == '__main__':
    app.url_map.strict_slashes = False
    app.run(
        host = '0.0.0.0',
        debug = False
    )