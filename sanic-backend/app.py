from sanic import Sanic
from sanic.response import json as JSONResponse
from sanic import text
from cors import add_cors_headers
from options import setup_options
import json


app = Sanic(__name__)

@app.get('/')
async def hello(request):
    return text("Backend runs on localhost:8000")

@app.route('/data')
async def data(request):
    return JSONResponse({"message": "Hello from the backend-boi!"})

@app.route('/users/request', methods=['POST'])
async def json_request(req):
    
    json_print = json.loads(req)

    print(json_print["id"] + '/n')
    print(json_print["first_name"] + '/n')
    print(json_print["last_name"] + '/n')
    print(json_print["email"])
    
    return JSONResponse({"message": "post method activate"})

    
# Add OPTIONS handlers to any route that is missing it
app.register_listener(setup_options, "before_server_start")

# Fill in CORS headers
app.register_middleware(add_cors_headers, "response")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)

    
