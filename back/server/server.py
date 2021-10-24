from time import sleep
from multiprocessing import Process, Value
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/", methods=['POST', 'GET'])
def index():
    return render_template('test.html')


def record_loop(loop_on):
    x = 0
    y = 0

    while True:
        file = open("static/test.json", "w")
        file.write("coordinates = '{\"x\": " +
                   str(x) + ", \"y\": " + str(y) + "}'")
        x += 1
        y += 1
        sleep(1)


if __name__ == "__main__":
    recording_on = Value('b', True)
    p = Process(target=record_loop, args=(recording_on,))
    p.start()
    app.run(debug=True, use_reloader=False)
    p.join()
