
function toggleMenu(){

const nav = document.getElementById("navLinks");

if(nav.style.display === "flex"){
nav.style.display = "none";
}else{
nav.style.display = "flex";
}

}


const testimonials = document.querySelectorAll(".testimonial");

let index = 0

function showTestimonial(){

 testimonials.forEach(t => t.classList.remove("active"));

 index++

 if(index >= testimonials.length){
 index = 0
 }

 testimonials[index].classList.add("active")

}

setInterval(showTestimonial,6000)


const animatedElements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{ threshold:0.2 });
animatedElements.forEach(el => observer.observe(el));


document.querySelector(".booking-form").addEventListener("submit", function(){
let email = document.getElementById("email").value;
let phone = document.getElementById("number").value;
let message = document.getElementById("message").value;
let name = document.getElementById("name").value;

  if (email !== "") {
    // check if email format is correct
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
      e.preventDefault();
      alert("Please enter a valid email");
    }
  }


let text = `
Name:${name}
PhoneNumber:${phone}
Message:${message}
Email:${email}
`;

window.open(`https://wa.me/256751580728?text=${encodeURIComponent(text)}`);
});