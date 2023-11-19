let src =document.querySelectorAll ("button")
let img =document.querySelector("img")
let title =document.querySelector (".tilte")


src[0].onclick = function() {
    img.src = "./Joseph.png";
    console.log("ff");
}
src[1].onclick =function () {
    title.textContent="Now its better!";
}
src[2].onclick =function () {
    title.style="color :red;"
}