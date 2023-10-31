function show_hide(){
    let pass_state = document.getElementById('password_inp');
    if(pass_state.type==='password'){
        document.getElementById('show').style.display = 'none';
        document.getElementById('hide').style.display = 'inline-block';
        pass_state.type='text';
    }else{
        document.getElementById('hide').style.display = 'none';
        document.getElementById('show').style.display = 'inline-block';
        pass_state.type = 'password';
    }
}


document.getElementById('eye').addEventListener('click', show_hide);