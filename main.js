function preload()
{

}

function setup()
{
  canvas=createCanvas(640,480);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();

  tint_color="";
}

function draw()
{
    image(video,0,0,640,480);
    tint(tint_color);
    rect(30, 20, 55, 55);
    describe('white rect with black outline in mid-right of canvas');
}

function take_snapshot()
{
    save('Swara.png');
}



