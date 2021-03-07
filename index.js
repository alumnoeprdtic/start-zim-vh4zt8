var scaling = "fit";
var width = 1024;
var height = 768;
var color = light;
var outerColor = dark;

var frame = new Frame({
  scaling: scaling,
  width: width,
  height: height,
  color: color,
  outerColor: outerColor,
  assets: [
    "https://drive.google.com/file/d/1-3swjCME7N9Pq6r8P4DDXcOlk3XwmGw7/view?usp=sharing"
  ]
});
frame.on("ready", function() {
  zog("ready from ZIM Frame");

  var stage = frame.stage;
  var stageW = frame.width;
  var stageH = frame.height;

  let foto = asset(
    "https://drive.google.com/file/d/1-3swjCME7N9Pq6r8P4DDXcOlk3XwmGw7/view?usp=sharing"
  ).center();

  stage.update();
}); // end of ready
