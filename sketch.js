let mobilenet;

let tucan;

function modelReady() {
    console.log('model is ready!');
    mobilenet.predict(tucan, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results);
        let label = results[0].className;
        fill(0);
        textSize(64);
        text(label, 10, height - 100);
        createP(label);
    }
}

function imageReady() {
    image(tucan, 0, 0, width, height);
}

function setup() {
    createCanvas(640, 480);
    background(0);
    tucan = createImg('images/tucan.jpg', imageReady)
    tucan.hide();

    mobilenet= ml5.imageClassifier('MobileNet', modelReady);
}

