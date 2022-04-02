input = "";
status = "";
objects = "";
img = "";

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380);
}
function draw() {
    image(video, 0, 0, 380, 380);

        if(status != "")
        {
            r = random(255);
            b = random(255);
            g = random(255);
          for (i = 0; i < objects.length; i++)
          {
            
              fill(r,g,b);
              percent = floor(objects[i].confidence * 100);
              text(objects[i].label + " " + percent + "%", objects[i].x + 15,  objects[i].y + 15);
              noFill();
              stroke(r,g,b);
              rect(objects[i].x,  objects[i].y,  objects[i].width,  objects[i].height);
          }
        }
        if( input == objects)
        {   
            video.stop();
            objectDetector.detect(gotResult);
            document.getElementById("status").innerHTML = "Found mentioned "+objects;
            speech = speechSynthesis;
            utterThis =  SpeechSynthesisUtterance;
            speech.speak(utterThis);         
        }
        else
        {
            document.getElementById("status").innerHTML = "Have not found the mentioned "+objects;        
        }
}
function start()
{
    console.log('cocossd' , modelLoaded)
    document.getElementById("status").innerHTML = "Found mentioned object";
   input = document.getElementById("input").value;
}
function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
}
function gotResult(results)
{
    objects = results;

}