document.getElementById('check').onclick = function (){
    let login = document.getElementById('login').value
    let password = document.getElementById('password').value

    if(login =='ivan' && password == '334455'){
      alert('Welcome') }
    else if (login == 'lexa' && password == '777') {
        alert('Welcome') }
    else   {
          alert('Goodbye')
    }

}