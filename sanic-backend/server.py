from sanic import Sanic
from sanic.response import json

app = Sanic()

@app.route("/data")
async def test(request):
    return json({"message": "Hello from the backend!"})

if name == "main":
    app.run(host="0.0.0.0", port=8000)