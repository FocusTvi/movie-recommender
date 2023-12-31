from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import engine

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/api/health")
def health():
    return jsonify({"status": "ok"})


@app.route("/api/recommendation", methods=["GET"])
def recommendation():
    title = request.args.get("title")
    results = engine.get_recommendation(title)
    if (results == "No movies found"):
        return jsonify({"status": "error", "message": "No movies found"}), 404

    return jsonify({"movies": results})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
