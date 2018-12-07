import sys
import time

import classes

import psycopg2

class DB:
    @staticmethod
    def init():
        try:
            DB.conn = psycopg2.connect(
                "dbname='ninfo' user='ninfo' host='db' password='nympho'"
            )
        except:
            print("Couldn't connect to database")
            sys.exit(1)

        DB.cur = DB.conn.cursor()

    @staticmethod
    def get_comments_for_ue(ue_id):
        SQL = "SELECT * FROM Comments WHERE UE_ID = %s"
        DB.cur.execute(SQL, (ue_id, ))
        results = DB.cur.fetchall()
        if not results:
            return list()

        returned = list()
        for comment_id, ue_id, author, content, creation in results:
            returned.append(classes.UEComment(
                comment_id,
                ue_id,
                author,
                content,
                creation_time = creation
            ))
        return returned

    @staticmethod
    def get_ue(ue_id):
        SQL = "SELECT * FROM UE WHERE ID = %s"
        DB.cur.execute(SQL, (ue_id, ))
        result = DB.cur.fetchone()
        if not result:
            return None

        ue_id, name, creation = result
        return classes.UE(
            ue_id,
            name,
            comments = DB.get_comments_for_ue(ue_id),
            creation_time = creation
        )

    @staticmethod
    def get_ue_comment(comment_id):
        SQL = "SELECT * FROM Comments WHERE ID = %s"
        DB.cur.execute(SQL, (comment_id, ))
        result = DB.cur.fetchone()
        if not result:
            return None

        comment_id, ue_id, author, content, timestamp = result
        return classes.UEComment(
            comment_id = comment_id,
            ue_id = ue_id,
            author = author,
            content = content,
            creation_time = timestamp
        )

    @staticmethod
    def add_ue(ue : classes.UE):
        SQL = "INSERT INTO UE (Name, Creation) VALUES (%s, %s)"
        DB.cur.execute(SQL, (ue.name, time.time()))
        DB.conn.commit()

    @staticmethod
    def get_all_ue():
        SQL = "SELECT * FROM UE"
        DB.cur.execute(SQL)
        res = DB.cur.fetchall()
        if not res:
            return list()

        l = list()
        for ue_id, name, creation in res:
            l.append(classes.UE(ue_id, name, creation_time = creation))
        return l

    @staticmethod
    def add_comment(comment : classes.UEComment):
        SQL = "INSERT INTO Comments (UE_ID, Author, Content, Creation) VALUES (%s, %s, %s, %s) RETURNING ID"
        DB.cur.execute(SQL, (comment.ue_id, comment.author, comment.content, time.time()))
        new_record_id,  = DB.cur.fetchone()
        DB.conn.commit()

        return DB.get_ue_comment(new_record_id)

DB.init()

if __name__ == '__main__':
    if "drop" in sys.argv:
        print("Dropping & creating tables")
        SQL = [
            "DROP SCHEMA public CASCADE;",
            "CREATE SCHEMA public;",
            "CREATE TABLE UE (ID SERIAL PRIMARY KEY, Name TEXT, Creation INTEGER)",
            "CREATE TABLE Comments (ID SERIAL PRIMARY KEY, UE_ID INTEGER, Author TEXT, Content TEXT, Creation INTEGER)"
        ]

        for sql in SQL:
            try:
                print(sql)
                DB.cur.execute(sql)
            except Exception as e:
                print(type(e))
                print(e)

        DB.conn.commit()

    elif "addue" in sys.argv:
        name = input("UE Name: ")
        DB.add_ue(classes.UE(name = name))
        print("Done")

    elif "getue" in sys.argv:
        ues = DB.get_all_ue()
        for ue in ues:
            print(ue)

    elif "addcomment" in sys.argv:
        ue_id = input("UE ID: ")
        author = input("Author Name: ")
        comment = input("Comment: ")
        DB.add_comment(classes.UEComment(
            ue_id = ue_id,
            author = author,
            content = comment
        ))
        print("Done")

    elif "getcomments" in sys.argv:
        ue_id = input("UE ID: ")
        ue = DB.get_ue(ue_id)
        if ue:
            for c in ue.comments:
                print(c)
