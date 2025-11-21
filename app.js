const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', ()=> {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})


let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}

// Price Card Motion
VanillaTilt.init(
    document.querySelectorAll(".js-tilt"), {
        max: 25,
        speed: 400,
    });

//Get the li elements
const sizes = document.querySelectorAll(".size");

//Add a click event to each
for (let i = 0; i < sizes.length; i++) {
    sizes[i].addEventListener("click", () => {
        //Remove active style from all
        for (let i = 0; i < sizes.length; i++) {
            sizes[i].classList.remove("active");
        }
        //Add active style to the clicked one
        sizes[i].classList.toggle("active");
    });
}


