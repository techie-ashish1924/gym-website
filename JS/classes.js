


var bck_img = document.getElementById('background');

var slides = ['image2.jpg','image3.jpg','image4.jpg','image6.jpg'];

const prevBtn = document.getElementById('btn-left');
const nextBtn = document.getElementById('btn-right');

var Start=0;

prevBtn.addEventListener("click", Decrement);

function Decrement() {

        // alert('hello');
        console.log('hello');
        Start--;
        if(Start < 0)
        {
            Start = Start + slides.length;
        }
        // console.log('previos btn');
        // console.log(Start);
        const url1 = '../images/crouserImage/' + slides[Start];
        bck_img.style.backgroundImage = "url('" + url1 + "')";
    
}

nextBtn.addEventListener("click", Increment);

function Increment() {
   
    Start++;

    if(Start >= slides.length)
    {
        Start = Start % slides.length;
    }
    const url1 = '../images/crouserImage/' + slides[Start];
    bck_img.style.backgroundImage = "url('" + url1 + "')";

}


