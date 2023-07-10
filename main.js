var corPadrao = 'rgb(139, 154, 160)';
var corClick = 'rgb(71, 198, 230)';
    
var btn1 = document.getElementById('btn-1')
var btn2 = document.getElementById('btn-2')
var btn3 = document.getElementById('btn-3')

btn1.onclick=()=>{
    document.getElementById('tab-img').src = 'imgs/img1.jpg';
    btn1.style.background = corClick;
    btn2.style.background = corPadrao;
    btn3.style.background = corPadrao;
}

btn2.onclick=()=>{
    document.getElementById('tab-img').src = 'imgs/img2.jpg';
        btn1.style.background = corPadrao;
        btn2.style.background = corClick;
        btn3.style.background = corPadrao;
}

btn3.onclick=()=>{
    document.getElementById('tab-img').src = 'imgs/img3.jpg';
        btn1.style.background = corPadrao;
        btn2.style.background = corPadrao;
        btn3.style.background = corClick;
}




