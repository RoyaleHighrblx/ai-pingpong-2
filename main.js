function preload(){

}

function setup(){
    canvas = createCanvas(550, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(800, 400);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded!");
}
