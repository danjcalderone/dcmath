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


// let slideDecks = document.getElementById("slide-container1");
// var node = slideDecks.createElement('p');

function addSlides(name){
    // let slideDecks = document.getElementById("slide-container1");
    // var node = slideDecks.createElement('p');
    // var maxNum = 'maxNum9';
    let path = '/dcmath/figs/flips/' + name + '/' + name + '_'
    let maxNum = document.getElementById(name).getAttribute("any");


    var newDots = document.createElement('div')
    newDots.style = "text-align:center"


    for (let i = 1; i < maxNum; i++) {

      var newDot = document.createElement('span')
      newDot.classList.add('dot');
      var onDotClickString = "currentSlide('"+name+"',"+String(i)+")"
      newDot.setAttribute('onclick',onDotClickString)
      newDots.append(newDot)
      // outcome:
      // <span class="dot" onclick="currentSlide('specific1',1)"></span>

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
    var onClickString = "plusSlides('"+name+"',-1)"
    prevButton.setAttribute('onclick',onClickString)
    prevButton.innerHTML = "&#10094;"

    nextButton.class="next"
    nextButton.classList.add("next")
    onClickString = "plusSlides('"+name+"',1)"
    nextButton.setAttribute('onclick',onClickString)
    nextButton.innerHTML = "&#10095;"

    document.getElementById(name).appendChild(prevButton)
    document.getElementById(name).appendChild(nextButton)
    document.getElementById(name).appendChild(newDots)


}




function addSlideDecks() {
  let x = document.getElementsByClassName('flips')
  for (let i = 0; i < x.length; i++) {
    addSlides(x.id)
    slideIndexes[x.id] = 1;
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
  let slides = document.getElementsByClassName(name);
  let dots = document.getElementsByClassName("dot");
  slideIndexes[name] = n
  if (n > slides.length) {slideIndexes[name] = 1}
  if (n < 1) {slideIndexes[name] = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexes[name]-1].style.display = "block";
  dots[slideIndexes[name]-1].className += " active";
}


// showSlides(name,slideIndex);

// Next/previous controls
function plusSlides(name,n) {
  showSlides(name,slideIndexes[name] += n);
}
// Thumbnail image controls
function currentSlide(name,n) {
  showSlides(name,slideIndexes[name] = n);
}



var name = 'KALMAN1024'
var maxNum = 'maxNum9';
var slideIndexes ={'specific1':1,
                   'KALMAN1024':1,
                   'EVECS2X2'}

addSlides('KALMAN1024'); //,parseInt(maxNum[6
showSlides('KALMAN1024',slideIndexes['KALMAN1024']);

addSlides('EVECS2X2'); //,parseInt(maxNum[6
showSlides('EVECS2X2',slideIndexes['EVECS2X2']);
// showSlides('specific1',slideIndexes['specific1']);



// showSlides(name,slideIndexes[name]);


//
// function loopSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }




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
