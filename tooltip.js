const text = document.querySelector('.text');
const btn = document.querySelector('.clipboard');
const tooltip = document.querySelector('.tooltip');
const bubble = document.querySelector('.bubble');

btn.addEventListener('mouseover', ()=>{
    bubble.style.opacity = "1";
});

btn.addEventListener('mouseout', ()=>{
    bubble.style.opacity = "0";
});

btn.addEventListener('click', ()=>{
    bubble.style.opacity = "0";
    text.style.opacity ="1";
    setTimeout(() => {
        text.style.opacity ="0";
    }, 3000);
})