const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
let slider = document.querySelector(".slide");
let name = document.querySelector("#name");
let testimonial = document.querySelector("#testimonial");
let occu = document.querySelector("#occu");

console.log(name);

const images = [];
images[0] = "/images/image-tanya.jpg";
images[1] = "/images/image-john.jpg";

function imgSlide() {
  if (slider.src.match(images[0])) {
    slider.src = images[1];
    name.textContent = "John Tarkpor";
    testimonial.textContent =
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
    occu.textContent = "Junior Front-end Developer";
  } else {
    slider.src = images[0];
    name.textContent = "Tanya Sinclair";
    testimonial.textContent =
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
    occu.textContent = "UX Engineer";
  }
}

nextBtn.addEventListener("click", imgSlide);
prevBtn.addEventListener("click", imgSlide);
