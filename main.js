var element = document.getElementById("music")
var x;
var body = document.getElementsByTagName("body")
reset()
function reset() {
    element.style.left = "-250px";
    x = false
}
function hideShow() {
    if(x){
        x = false;
        element.style.left = "-250px";
        body.style.MarginLeft = "0px";
    } else {
        x = true;
        element.style.left = "0px";
        body.style.MarginLeft = "250px";
    }
}