from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def home():
    return render_template('home.html')


@app.route("/background-gradient/")
def background_gradient():
    return render_template('background-gradient.html')


@app.route("/background-noise/")
def background_noise():
    return render_template('background-noise.html')


@app.route("/box-shadow/")
def box_shadow():
    return render_template('box-shadow.html')


@app.route("/border-radius/")
def border_radius():
    return render_template('border-radius.html')


@app.route("/css-arrow/")
def css_arrow():
    return render_template('css-arrow.html')


@app.route("/text-gradient/")
def text_gradient():
    return render_template('text-gradient.html')


@app.route("/text-shadow/")
def text_shadow():
    return render_template('text-shadow.html')


@app.route("/font-styler/")
def font_styler():
    return render_template('font-styler.html')


@app.route("/font-face/")
def font_face():
    return render_template('font-face.html')


if __name__ == '__main__':
    app.run(debug=True)
