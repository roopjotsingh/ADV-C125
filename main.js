function setup()
{
    video = createCapture(VIDEO);
    video.size(400, 400);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("Pose", gotPoses);
}
function draw()
{
    
}
function modelLoaded()
{
    console.log("ModelLoaded");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}