'use strict';

let leftImage = document.getElementById('left-image');
let middleImage = document.getElementById('middle-image');
let rightImage = document.getElementById('right-image');

let round =25;
let leftIndex;
let middleIndex;
let rightIndex;

let countsClick = 0;


function Product(name , pathOfImg ){
    this.name = name;
    this.pathOfImg= pathOfImg;
    this.seen=0;
    this.fav=0;
    Product.allProducts.push(this);
}
Product.allProducts=[];


new Product('bag', './img/bag.jpg');
new Product('banana', './img/banana.jpg');
new Product('bathroom', './img/bathroom.jpg');
new Product('boots', './img/boots.jpg');
new Product('breakfast', './img/breakfast.jpg');
new Product('bubblegum', './img/bubblegum.jpg');
new Product('chair', './img/chair.jpg');
new Product('cthulhu', './img/cthulhu.jpg');
new Product('dog-duck', './img/dog-duck.jpg');
new Product('dragon', './img/dragon.jpg');
new Product('pen', './img/pen.jpg');
new Product('pet-sweep', './img/pet-sweep.jpg');
new Product('scissors', './img/scissors.jpg');
new Product('shark', './img/shark.jpg');
new Product('sweep', './img/sweep.png');
new Product('tauntaun', './img/tauntaun.jpg');
new Product('unicorn', './img/unicorn.jpg');
new Product('usb', './img/usb.gif');
new Product('water-can', './img/water-can.jpg');
new Product('wine-glass', './img/wine-glass.jpg');


function displayThreeImgs (){
    leftIndex=generateRandomIndex();
    middleIndex=generateRandomIndex();
    rightIndex=generateRandomIndex();

    while(leftIndex===rightIndex || rightIndex===middleIndex || leftIndex===middleIndex){
        leftIndex=generateRandomIndex();
        rightIndex=generateRandomIndex();
    }

    leftImage.src=Product.allProducts[leftIndex].pathOfImg;
    middleImage.src=Product.allProducts[middleIndex].pathOfImg;
    rightImage.src=Product.allProducts[rightIndex].pathOfImg;


    if(countsClick <= round){
    Product.allProducts[leftIndex].seen++;
    Product.allProducts[middleIndex].seen++;
    Product.allProducts[rightIndex].seen++;
    }
  
}
displayThreeImgs();

function generateRandomIndex(){
    let randomIndex = Math.floor(Math.random()*Product.allProducts.length);
    return randomIndex;
}


leftImage.addEventListener('click',handleclicking);
middleImage.addEventListener('click',handleclicking);
rightImage.addEventListener('click',handleclicking);

function handleclicking(event){
    countsClick++;
    if(round>=countsClick){
    if(event.target.id==='left-image'){
        Product.allProducts[leftIndex].fav++;
    }else if(event.target.id==='middle-image'){
        Product.allProducts[middleIndex].fav++;
    }else if(event.target.id==='right-image'){
        Product.allProducts[rightIndex].fav++;
    }
    displayThreeImgs();
}else {
    console.log(Product.allProducts);
    gettingList();
    leftImage.removeEventListener('click',handleclicking);
    middleImage.removeEventListener('ckick',handleclicking);
    rightImage.removeEventListener('click',handleclicking);

    }
}


document.getElementById('button').onclick =function gettingList(){
    let ul = document.getElementById('third');
    for(let i = 0 ; i <Product.allProducts.length; i++ ){
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${Product.allProducts[i].name} had ${Product.allProducts[i].fav} Votes , and was seen ${Product.allProducts[i].seen} Times. `;
    }
  
  }
  



