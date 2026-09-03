function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = "rgb("+ r +", " + g + ", " + b + ")"
  return rgb;
}
function showText(){
  if(  document.getElementById('hiddenText').style.visibility =="hidden"){

    document.getElementById('hiddenText').style.visibility = "visible"
  } else {
      document.getElementById('hiddenText').style.visibility = "hidden"
  }
}
function main(){
    document.getElementById("title").style.color = randomRgbColor()
console.log("Main run")
}

main();