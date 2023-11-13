let result = document.getElementById('result');
function clear(){
    result.value = "";
}
function back() {
    result.value = result.value.slice(0, -1);
}

function pointdec() {
    let lastChar = result.value[result.value.length - 1];
    if (lastChar === '.' || lastChar === '/' || lastChar === '-' || lastChar === '+' || lastChar === '*'){
        result.value = result.value.slice(0, -1) + ".";
        
    }
    else{
        result.value += ".";
    }
    
}

function div() {
    let lastChar = result.value[result.value.length - 1];
    if (lastChar === '.' || lastChar === '/' || lastChar === '-' || lastChar === '+' || lastChar === '*') {
        result.value = result.value.slice(0, -1) + "/";
    }
    else {
        result.value += "/";
    }
    
}

function seven(){
    result.value+="7";
}
function eight() {
    result.value += "8";
}
function nine() {
    result.value += "9";
}
function mul() {
    let lastChar = result.value[result.value.length - 1];
    if (lastChar === '.' || lastChar === '/' || lastChar === '-' || lastChar === '+' || lastChar === '*') {
        result.value = result.value.slice(0, -1) + "*";

    }
    else {
        result.value += "*";
    }
    
}
function four() {
    result.value += "4";
}
function five() {
    result.value += "5";
}
function six() {
    result.value += "6";
}
function minus() {
    let lastChar = result.value[result.value.length - 1];
    if (lastChar === '.' || lastChar === '/' || lastChar === '-' || lastChar === '+' || lastChar === '*') {
        result.value = result.value.slice(0, -1) + "-";

    }
    else {
        result.value += "-";
    }
    
}
function one() {
    result.value += "1";
}
function two() {
    result.value += "2";
}
function three() {
    result.value += "3";
}
function plus() {
    let lastChar = result.value[result.value.length - 1];
    if (lastChar === '.' || lastChar === '/' || lastChar === '-' || lastChar === '+' || lastChar === '*') {
        result.value = result.value.slice(0, -1) + "+";

    }
    else {
        result.value += "+";
    }
    
}
function double_zero() {
    result.value += "00";
}
function zero() {
    result.value += "0";
}

function equal() {
    result.value = eval('0'+result.value)  ;
}






document.getElementById('ac').addEventListener('click', clear);
document.getElementById('de').addEventListener('click', back);
document.getElementById('dec').addEventListener('click', pointdec);
document.getElementById('div').addEventListener('click', div);
document.getElementById('seven').addEventListener('click', seven);
document.getElementById('eight').addEventListener('click', eight);
document.getElementById('nine').addEventListener('click', nine);
document.getElementById('mul').addEventListener('click', mul);
document.getElementById('four').addEventListener('click', four);
document.getElementById('five').addEventListener('click', five);
document.getElementById('six').addEventListener('click', six);
document.getElementById('minus').addEventListener('click', minus);
document.getElementById('one').addEventListener('click', one);
document.getElementById('two').addEventListener('click', two);
document.getElementById('three').addEventListener('click', three);
document.getElementById('plus').addEventListener('click', plus);
document.getElementById('double_zero').addEventListener('click', double_zero);
document.getElementById('zero').addEventListener('click', zero);
document.getElementById('equeal').addEventListener('click', equal);