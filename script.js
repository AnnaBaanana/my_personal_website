const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

function daysProgramming(x,y) {
    var start_date = new Date("2/27/2022");
    var date_now = new Date();
    const diffTime = Math.abs(date_now - start_date);
    const diffDays =diffTime/(1000*60*60*24)
    return `So far I have been coding for ${diffDays} days.`;
    
}

daysProgramming();

document.getElementById("program").innerHTML =  daysProgramming();

function zoomIn(event) {
    var element = document.getElementById("overlay");
    element.style.display = "inline-block";
    var img = document.getElementById("imgZoom");
    var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
    var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
    element.style.backgroundPosition=(-posX*2)+"px "+(-posY*4)+"px";
  
  }
  
  function zoomOut() {
    var element = document.getElementById("overlay");
    element.style.display = "none";
  }