from sanic import Sanic
from sanic.response import json

app = Sanic("SynthApp")

@app.route("/data")
async def test(request):
    return json({"message": "Hello from the backend-boi!"})

if name == "main":
    app.run(host="0.0.0.0", port=8000)