const images = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
];

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
];

console.log(images);


const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

console.log(images);


const slider = document.querySelector(".slider");


for(let i = 0; i < images.length; i++){
  const imageContainer = document.createElement("div");
  slider.append(imageContainer);
  

  // console.log(imageContainer);
  imageContainer.className = "item";

  if(i == 0){
    imageContainer.classList += (" active");

    
  }

  imageContainer.innerHTML= `
  <img src=${images[i]} alt="immagine">
  `
  ;

  console.log(imageContainer);
}

const counter = document.getElementsByClassName("item");

let index = 0;

next.addEventListener("click", function(){
  counter[index].classList.remove("active");
  index++;

  if(index > counter.length -1) index = 0;
  counter[index].classList += (" active");

});

prev.addEventListener("click", function(){
  counter[index].classList.remove("active");
  index--;
  
  if(index < 0) index = counter.length -1;
  counter[index].classList += (" active");
})
