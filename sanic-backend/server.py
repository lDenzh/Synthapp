from sanic import Sanic
from sanic.response import json
from sanic import text

app = Sanic("SynthApp")

@app.get('/')
async def hello(request):
    return text("OK!")

#@app.route("/data")
#async def test(request):
#    return json({"message": "Hello from the backend-boi!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)