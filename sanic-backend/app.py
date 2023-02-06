from sanic import Sanic
from sanic.response import json
from sanic import text
from cors import add_cors_headers
from options import setup_options

app = Sanic("SynthApp")

@app.get('/')
async def hello(request):
    return text("Backend runs on localhost:8000")

@app.route('/data')
async def test(request):
    return json({"message": "Hello from the backend-boi!"})

    
# Add OPTIONS handlers to any route that is missing it
app.register_listener(setup_options, "before_server_start")

# Fill in CORS headers
app.register_middleware(add_cors_headers, "response")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)

    
