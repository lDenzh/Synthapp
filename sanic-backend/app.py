from sanic import Sanic
from sanic.response import json, text 
from sanic import text #vet ikke om trenger?
from sanic_ext import Extend, cors
from sanic_cors.extension import CORS

app = Sanic(__name__)

CORS_OPTIONS = {"resources": r'/*', "origins": "*", "methods": ["GET", "POST", "HEAD", "OPTIONS"]}
# Disable sanic-ext built-in CORS, and add the Sanic-CORS plugin
Extend(app, extensions=[CORS], config={"CORS": False, "CORS_OPTIONS": CORS_OPTIONS})

@app.route('/test', methods=['GET'])
async def hello(request):
    return text("Backend runs on localhost:8000")

@app.route('/data', methods=['GET'])
async def data(request):
    return json({"message": "Hello from the backend-boi!"})


@app.route('/json', methods=['POST'])
@cors(allow_methods="POST")
async def post_json(request):
    return json({ "received": True, "message": request.json, })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)

    
