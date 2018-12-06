import sys

class IncompleteObjectException(Exception):
    def __init__(self, message = None):
        self.message = message

class UE:
    def __init__(self, ue_id = None, name = None, comments = None, creation_time = None):
        self.name = name
        self.id = ue_id
        self.comments = comments
        self.creation_time = creation_time

    def __repr__(self):
        return "<UE {id}: {name}>".format(
            id = self.id,
            name = self.name
        )
    
    def str(self):
        return "[{id}] {name}".format(
            self.id,
            self.name
        )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }

class UEComment:
    def __init__(self, comment_id = None, ue_id = None, author = None, content = None, creation_time = None):
        self.id = comment_id
        self.ue_id = ue_id
        self.author = author
        self.content = content
        self.creation_time = creation_time

    def __repr__(self):
        return "<UEComment {id} on {ue}>".format(
            id = self.id,
            ue = self.ue_id
        )
    
    def str(self):
        return "[{id}] on {ue} by {author} '{content}'".format(
            id = self.id,
            ue = self.ue_id,
            author = self.author,
            content = self.content
        )

    def to_dict(self):
        return {
            "id": self.id,
            "ue_id": self.ue_id,
            "author": self.author,
            "content": self.content
        }