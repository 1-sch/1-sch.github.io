var slideIndex = [1,1,1,1,1,1,1];
var slideId = ["gal1", "gal2", "gal3", "gal4", "gal5", "gal6", "gal7"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

function om(nm){
    document.getElementById("mga" + nm).style.display = "block";
}

function cm(nm) {
  document.getElementById("mga"+nm).style.display = "none";
}

var smi = [1,1,1,1,1,1,1];
var smid = ["mgas1", "mgas2", "mgas3", "mgas4", "mgas5", "mgas6", "mgas7"]
sm(1,0);
sm(1,1);
sm(1,2);
sm(1,3);
sm(1,4);
sm(1,5);
sm(1,6);
// Next/previous controls
function ps(n, no) {
  sm(smi[no] += n, no);
}

// Thumbnail image controls
function currentSlide(n) {
  sm(smi[no] = n, no);
}

function sm(n, no) {
  var i;
  var sl = document.getElementsByClassName(smid[no]);
  if (n > sl.length) {smi[no] = 1}
  if (n < 1) {smi[no] = sl.length}
  for (i = 0; i < sl.length; i++) {
    sl[i].style.display = "none";
  }
  sl[smi[no]-1].style.display = "block";
}