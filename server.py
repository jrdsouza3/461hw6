from flask import Flask

app = Flask (__name__)


def names():
    return{
        "lastname": "D'Souza"
    }

if __name__ == "__main__":
    app.debug
    app.run()