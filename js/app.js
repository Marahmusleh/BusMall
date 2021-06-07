'use strict';
let container =document.getElementById('first');
let leftImage = document.getElementById('left-image');
let middleImage = document.getElementById('middle-image');
let rightImage = document.getElementById('right-image');

let round =25;
let leftIndex;
let middleIndex;
let rightIndex;

let countsClick = 0;
let arrFav=[];
let arrSeen=[];
let arrName=[];


function Product(name , pathOfImg ){
    this.name = name;
    this.pathOfImg= pathOfImg;
    this.seen=0;
    this.fav=0;
    Product.allProducts.push(this);
    arrName.push(this.name);

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

let lastSeen = [];

function displayThreeImgs (){
    leftIndex=generateRandomIndex();
    middleIndex=generateRandomIndex();
    rightIndex=generateRandomIndex();

    while(leftIndex===rightIndex || rightIndex===middleIndex || leftIndex===middleIndex || lastSeen.includes(leftIndex) || lastSeen.includes(middleIndex) || lastSeen.includes(rightIndex)){
        leftIndex=generateRandomIndex();
        rightIndex=generateRandomIndex();
        middleIndex=generateRandomIndex();
    }

    lastSeen[0]=leftIndex;
    lastSeen[1]=middleIndex;
    lastSeen[2]=rightIndex;


    

    leftImage.src=Product.allProducts[leftIndex].pathOfImg;
    Product.allProducts[leftIndex].seen++;
    middleImage.src=Product.allProducts[middleIndex].pathOfImg;
    Product.allProducts[middleIndex].seen++;
    rightImage.src=Product.allProducts[rightIndex].pathOfImg;
    Product.allProducts[rightIndex].seen++;
  
}
displayThreeImgs();

function generateRandomIndex(){
    let randomIndex = Math.floor(Math.random()*Product.allProducts.length);
    return randomIndex;
}

first.addEventListener('click',handleclicking);
let btn;

function handleclicking(event){
    countsClick++;
    if(round>=countsClick){
    if(event.target.id==='left-image'){
        Product.allProducts[leftIndex].fav++;
    }else if(event.target.id==='middle-image'){
        Product.allProducts[middleIndex].fav++;
    }else if(event.target.id==='right-image'){
        Product.allProducts[rightIndex].fav++;
    }else{
        alert('You should click on the image');
        countsClick--;
    }
    displayThreeImgs();
}else {
    btn = document.getElementById('button');
    btn.addEventListener('click',handleShowing);
    first.removeEventListener('click',handleclicking);
    }
    }


    
function handleShowing(){
    gettingList();
    gettingChart();
    btn.removeEventListener('click',handleShowing);
  }



    function gettingList(){
    let ul = document.getElementById('third');
    for(let i = 0 ; i <Product.allProducts.length; i++ ){
        arrFav.push(Product.allProducts[i].fav);
        arrSeen.push(Product.allProducts[i].seen);
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${Product.allProducts[i].name} had ${Product.allProducts[i].fav} Votes , and was seen ${Product.allProducts[i].seen} Times. `;
    }
  }
  
  function gettingChart(){

  let chartEl = document.getElementById('chart');
  let chart = new Chart(chartEl, {
      type : 'bar',
      data : {
          labels: arrName,
          datasets: [{
              label:'Total of Votes',
              data : arrFav,
              backgroundColor: [
                'rgba(255, 87, 132, 0.4)',
              ],
          },{
            label: 'Number of viewed products',
            data: arrSeen,
            backgroundColor: [
                'rgba(200, 120, 132, 0.5)',
            ],
          }

          ]
      },
  }); 
}
