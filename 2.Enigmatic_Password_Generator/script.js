const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()_~+|\/=-[]{};:',.<>?";



let uppercase_input = document.getElementById('uppercase');
let lowercase_input = document.getElementById('lowercase');
let number_input = document.getElementById('number');
let symbol_input = document.getElementById('symbol');
let len_input = (document.getElementById('pass_len'));
const password_out = document.getElementById('password_out');


function pass_gen() {
    let passkey = "";
    password_out.value = "";
    console.log("uppercase_input " + uppercase_input.checked);
    console.log("lowercase_input " + lowercase_input.checked);
    console.log("number_input " + number_input.checked);
    console.log("symbol_input " + symbol_input.checked);
    console.log("len_input " + len_input.value);
    if (len_input.value < 4 || len_input.value > 18) {
        document.getElementById('error').style.display = 'block';
        return -1;
    } else {
        document.getElementById('error').style.display = 'none';
    }
    if (symbol_input.checked) {
        passkey += symbol;
    }
    if (uppercase_input.checked) {
        passkey += uppercase;
    }
    if (number_input.checked) {
        passkey += number;
    }
    if (lowercase_input.checked) {
        passkey += lowercase;
    }
    
    

    for (var i = 0; i < len_input.value; i++) {
        password_out.value += passkey.charAt(Math.floor(Math.random() * passkey.length));
        console.log("error");
    }

}
function copyFN() {
    const textToCopy = document.getElementById("password_out").value;

    if ('clipboard' in navigator) {
        navigator.clipboard.writeText(textToCopy)
            .then(function () {
                if(textToCopy===""){
                    console.log("Nothing to copy.")
                    return -1;
                }
                document.getElementById('check').style.display = 'inline';
                document.getElementById('copyb').style.display = 'none';
                setTimeout(function () {
                    document.getElementById('check').style.display = 'none';
                    document.getElementById('copyb').style.display = 'inline';
                }, 1500); 
            })
            .catch(function (err) {
                console.error("Unable to copy text to the clipboard: ", err);
            });
    } else {
        // Clipboard API not supported, provide a fallback or error message
        console.error("Clipboard API is not supported in this browser");
    }
}



function clear() {
    password_out.value = "";
}

document.getElementById('submit').addEventListener('click', pass_gen);
document.getElementById("copy").addEventListener('click', copyFN);
document.getElementById("clear").addEventListener('click', clear);

