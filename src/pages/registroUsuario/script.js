const registro = document.querySelector('#form-register');

registro.addEventListener('submit', (e) =>{
  e.preventDefault

  const userName = document.querySelector('#nombre').value;
  
  const nickname = document.querySelector('#nickname').value;
  const userEmail = document.querySelector('#email').value;

  const userPassword = document.querySelector('.userPassword').value;
  const passwordConfirm = document.querySelector('.password_confirm').value;

  const listUsers = JSON.parse(localStorage.getItem('users')) || []
  
  const  isUserRegistered = listUsers.find(user => user.userEmail ===userEmail)


  if(isUserRegistered){
    return alert('El  usuario Ya Existe!, intente con otro')
  }

  listUsers.push({
    userName : userName,
    nickname: nickname,
    userEmail : userEmail,
    userPassword : userPassword,
    passwordConfirm:passwordConfirm,
  })
  localStorage.setItem('users', JSON.stringify(listUsers))
  alert('Registro exitoso');

  window.location.href="/src/pages/inicioSesion/inicioSesion.html"

})
