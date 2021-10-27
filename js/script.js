const items = [
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

console.log(items);
let index = 0;

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

console.log(items);

const slider = document.querySelector(".slider");
const slider = document.querySelector(".text-title");
const slider = document.querySelector(".text-description");


for(let i = 0; i < items.length; i++){
  const imageContainer = document.createElement("div");
  slider.append(imageContainer);


  imageContainer.className = "item";

  console.log(item);

  if(i === index){
    imageContainer.classList.add(" active");
  }

}

next.addEventListener("click", function(){
  items[index].classList.remove("active");
  index++;

  if(index > items.length -1) index = 0;
  items[index].classList.add(" active");

});

prev.addEventListener("click", function(){
  items[index].classList.remove("active");
  index--;
  
  if(index < 0) index = items.length -1;
  items[index].classList.add(" active");
})
