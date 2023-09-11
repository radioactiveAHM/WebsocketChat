from flask import Flask, render_template, request
from flask_socketio import SocketIO
from flask_cors import CORS
from werkzeug.utils import secure_filename
from os import path
from json import dumps

# Create flask app
app = Flask(__name__)
# Set random secret required for socketIO
app.secret_key = "pqihgf^&asfdasud#fiehg%"
# Add ./static/ route as Public folder
app.config['UPLOAD_FOLDER'] = "./static/"
# Setup cors policy
CORS(app)
# Setup socketIO and allow cross origin policy from all
socketio = SocketIO(app, async_mode='eventlet', cors_allowed_origins="*")

# Get chat page content
@app.get("/")
def ui():
    return render_template("index.html")

# Handle Images upload
@app.post("/image")
def image():
    
    image = request.files
    # sender name list(image)[0]
    filename = secure_filename(image[list(image)[0]].filename)
    image[list(image)[0]].save(path.join(app.config['UPLOAD_FOLDER'], filename))

    report = {"sender":list(image)[0],"message":path.join(app.config['UPLOAD_FOLDER'], filename)}
    socketio.emit("message", dumps(report))

    return "yes"

# BroadCast incoming messages
@socketio.on("message")
def mess(message):
    socketio.emit("message", message)

# Run on local
socketio.run(app, host="0.0.0.0", port=2500)