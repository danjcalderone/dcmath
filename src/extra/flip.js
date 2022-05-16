// let slideIndex = 0;
// showSlides();



// export function addSlides(path,maxNum) {
//   // let slideDecks = document.getElementById("slide-container1");
//   // var node = slideDecks.createElement('p');
//   for (let i = 0; i < maxNum; i++) {
//     // var newNode = document.createElement('p');
//     var htmlText = 'yo'
//     var newNode = document.createElement('p');
//     var textNode = document.createTextNode(htmlText);
//     newNode.append(textNode);
//     document.getElementById('slide-container1').appendChild(newNode)
//   //     // "<div class="mySlides fade">
//   //     //   <div class="numbertext">1 / 3</div>
//   //     //   <img src="./img1.png" style="width:100%">
//   //     // <div class="text">Caption Text</div>
//   //     // </div>"
//     }
//   }

function addSlides(name,maxNum){

var path = '/dcmath/figs/flips/' + name + '/' + name + '_'

for (let i = 1; i < maxNum; i++) {
  // var newNode = document.createElement('p');
  // var htmlText = 'yo'
  // var newNode = document.createElement('p');
  // var frag = document.createDocumentFragment();
  var newFig = document.createElement('div');
  // newFig.classList.add("mySlides","fade")
  newFig.classList.add(name)

  // document.getElementById('slide-container1').appendChild(newFig)
  var newNumText = document.createElement('div')
  var newImg = document.createElement('img')
  var newCaption = document.createElement('div')
  newNumText.classList.add("numbertext")
  newCaption.classList.add('text')


  // <div class="mySlides fade">
  //   <div class="numbertext">1 / 3</div>
  //   <img src="./img1.png" style="width:100%">
  //   <div class="text">Caption Text</div>
  // </div>
  //
  // newNumText.textContent= String(i) +' / ' + String(maxNum)
  newImg.src = path + String(i) + '.png'
  newImg.style = "width:100%"
  newNumText.textContent= '1 / 5'
  newCaption.textContent='Caption Text'
  newFig.append(newNumText)
  newFig.append(newImg)
  newFig.append(newCaption)
  document.getElementById(name).appendChild(newFig)
  // document.getElementById('slide-container1').appendChild(newNumText)
  // document.getElementById('slide-container1').appendChild(newImg)
  // document.getElementById('slide-container1').appendChild(newCaption)

  //
  // var textNode = document.createTextNode(htmlText);
  // newNode.append(textNode);
  // document.getElementById('slide-container1').appendChild(newNode)
//     // "<div class="mySlides fade">
//     //   <div class="numbertext">1 / 3</div>
//     //   <img src="./img1.png" style="width:100%">
//     // <div class="text">Caption Text</div>
//     // </div>"

}

var prevButton = document.createElement('a')
var nextButton = document.createElement('a')

prevButton.class="prev"
prevButton.classList.add("prev")
prevButton.setAttribute('onclick',"plusSlides(-1)")
prevButton.innerHTML = "&#10094;"

nextButton.class="next"
nextButton.classList.add("next")
nextButton.setAttribute('onclick',"plusSlides(1)")
nextButton.innerHTML = "&#10095;"

document.getElementById(name).appendChild(prevButton)
document.getElementById(name).appendChild(nextButton)




// <div style="text-align:center">
//   <span class="dot" onclick="currentSlide(1)"></span>
//   <span class="dot" onclick="currentSlide(2)"></span>
//   <span class="dot" onclick="currentSlide(3)"></span>
// </div>


}




function addSlideDecks() {
  let x = document.getElementsByClassName('flips')
  for (let i = 0; i < x.length; i++) {
    addSlides(x.id)
  }
}

// function showSlideDecks() {
//   let x = document.getElementsByClassName('flips')
//   for (let i = 0; i < x.length; i++) {
//     showSlides(x.id)
//   }
// }


// function showSlidesNew(name,n) {
//   let slides = document.getElementsByClassName(name);
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }




function showSlides(name,n) {
  let i;
  let slides = document.getElementsByClassName(name);
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





function loopSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


let slideIndex = 1;
var name = 'specific1'
showSlides(name,slideIndex);
// Next/previous controls
function plusSlides(name,n) {
  showSlides(name,slideIndex += n);
}
// Thumbnail image controls
function currentSlide(name,n) {
  showSlides(name,slideIndex = n);
}



//var path = "/dcmath/figs/slides/KALMAN/KALMAN1024_"
// addSlides("blig",10)




//
//
//
// function addSlideDecks() {
//   let i;
//   let slideDecks = document.getElementsByClassName("slide-container");
//   for (let i = 0; i < slideDecks.length; i++) {
//     let path = slideDecks[i].pathtofile
//     let maxNum = slideDecks[i].maxNum
//     addSlides(path,maxNum)
//   }
//
//
//
//   }
//




//
//
//
// let slideIndex = [1,1];
// /* Class the members of each slideshow group with different CSS classes */
// let slideId = ["mySlides1", "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);
//
// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }
//
// function showSlides(n, no) {
//   let i;
//   let x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex[no]-1].style.display = "block";
// }
