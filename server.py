from flask import Flask
from flask import  request


app = Flask (__name__)

@app.route('/tester', methods = ['GET'])
def names():
    args = request.args.to_dict(flat= False)
   
    message = "User Not Found"
    firstName = ""

    if 'name' in args:
        firstName = request.args.get('name')
    if firstName.lower() == "jason" :
        message = "D'Souza"
    else:
        message = "User Not Found"

    return{
        "lastname": message
    }




if __name__ == "__main__":
    app.debug
    app.run()

