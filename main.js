let openContact = document.querySelectorAll(".show-contact");
let container = document.querySelector(".container");
let texts = document.querySelector(".flexing-1");
let button = document.querySelector("button");
let showAbout = document.querySelectorAll('.show-about')
let cross = document.querySelector('.fa-x')
let nav = document.querySelector('nav')
let section2 = document.querySelector('#section-2')
let fotter = document.querySelector('footer')

function toggling(){
  container.classList.toggle("contact-show");
  texts.classList.toggle("text-hide");
  nav.classList.toggle('text-hide');
  section2.classList.toggle('text-hide')
  fotter.classList.toggle('text-hide')
}

openContact.forEach((contacts)=>{
  contacts.addEventListener('click', ()=>{
    toggling()
  })
})

 showAbout.forEach((abouts)=>{
abouts.addEventListener('click',()=>{
  toggling()
})
 })

  cross.addEventListener('click', function(){      //removing toggling
    container.classList.remove('contact-show')
    nav.classList.toggle('text-hide')
    texts.classList.toggle("text-hide");
    section2.classList.toggle('text-hide')
    fotter.classList.toggle('text-hide')
  })


let all = document.querySelector(".all");
let btns = document.querySelectorAll(".buttons");
let textArticles = document.querySelectorAll(".contents");

all.addEventListener("click", function (e) {
  let data = e.target.dataset.id;
  if (data) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    textArticles.forEach(function (articles) {
      articles.classList.remove("active");
    });

    let element = document.getElementById(data);
    element.classList.add("active");
  }
});


let dropdwon = document.querySelector('.fa-bars')
let ul = document.querySelector('.show')

dropdwon.addEventListener('click', ()=>{
ul.classList.toggle('ulshow')
})
