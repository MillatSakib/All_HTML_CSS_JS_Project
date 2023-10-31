function strength_chk(){
    if ((document.getElementById('password_inp').value).length === 0) {
        document.getElementById('result').innerHTML = ''
    }
    else if ((document.getElementById('password_inp').value).length<4){
        document.getElementById('result').innerHTML = '***Weak Password'
        document.getElementById('result').style.color = 'red'
    }
    else if ((document.getElementById('password_inp').value).length<9){
        document.getElementById('result').innerHTML = '**Midum Password'
        document.getElementById('result').style.color = '#ffa801'
    }
    else{
        document.getElementById('result').innerHTML = 'Now Strong Password'
        document.getElementById('result').style.color = '#20bf6b'
    }
    
}


document.getElementById('password_inp').addEventListener('input', strength_chk);