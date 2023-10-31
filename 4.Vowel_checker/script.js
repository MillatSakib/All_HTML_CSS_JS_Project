function vowel_count(){
    let text = document.getElementById('text_inp');
    let vowel_number = 0;
    for(var i = 0; i< (text.value).length;i++){
        if (is_vowel((text.value.charAt(i)).toLowerCase())){
            vowel_number++;
            
        }
    }
    document.getElementById('result').innerHTML = "Result: Total Vowels: "+vowel_number;
}

function is_vowel(char){
    let vowel = ["a","e","i","o","u"];
    return vowel.includes(char);
}

function result_clear(){
    document.getElementById('result').innerHTML = "";
}

function clear() {
    document.getElementById('text_inp').value = "";
    document.getElementById('result').innerHTML = "";
}

document.getElementById('submit').addEventListener('click', vowel_count)
document.getElementById('text_inp').addEventListener('input', result_clear)
document.getElementById("clear").addEventListener('click', clear);