import sys

import classes

import psycopg2

class DB:
    @staticmethod
    def init():
        try:
            DB.conn = psycopg2.connect(
                "dbname='ninfo' user='ninfo' host='localhost' password='nympho'"
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
        for comment_id, ue_id, author, content in results:
            returned.append(classes.UEComment(
                comment_id,
                ue_id,
                author,
                content
            ))
        return returned

    @staticmethod
    def get_ue(ue_id):
        SQL = "SELECT * FROM UE WHERE ID = %s"
        DB.cur.execute(SQL, (ue_id, ))
        result = DB.cur.fetchone()
        if not result:
            return None

        ue_id, name = result
        return classes.UE(
            ue_id,
            name,
            comments = DB.get_comments_for_ue(ue_id)
        )

    @staticmethod
    def add_ue(ue : classes.UE):
        SQL = "INSERT INTO UE (Name) VALUES (%s)"
        DB.cur.execute(SQL, (ue.name, ))
        DB.conn.commit()

    @staticmethod
    def get_all_ue():
        SQL = "SELECT * FROM UE"
        DB.cur.execute(SQL)
        res = DB.cur.fetchall()
        if not res:
            return list()

        return res

    @staticmethod
    def add_comment(comment : classes.UEComment):
        SQL = "INSERT INTO Comments (UE_ID, Author, Content) VALUES (%s, %s, %s)"
        DB.cur.execute(SQL, (comment.ue_id, comment.author, comment.content))
        DB.conn.commit()

DB.init()

if __name__ == '__main__':
    if "drop" in sys.argv:
        print("Dropping & creating tables")
        SQL = [
            "DROP SCHEMA public CASCADE;",
            "CREATE SCHEMA public;",
            "CREATE TABLE UE (ID SERIAL PRIMARY KEY, Name TEXT)",
            "CREATE TABLE Comments (ID SERIAL PRIMARY KEY, UE_ID INTEGER, Author TEXT, Content TEXT)"
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
