const formInicio =document.querySelector('.formInicio');  

formInicio.addEventListener('submit', (e) =>{
  e.preventDefault
  const userEmail = document.querySelector('#email').value;

  const userPassword = document.querySelector('.userPassword').value;


  const users = JSON.parse(localStorage.getItem('users')) || []

  const validerUser = users.find(user => user.userEmail === userEmail && user.userPassword === userPassword)


  if(!validerUser){
    alert(`Usuario / password incorrecto intente de nuevo`)
  }
  alert(`Bienvenido ${validerUser.userName}`)
    localStorage.setItem(`Login__Success`, JSON.stringify(validerUser))
    window.location.href ='/index.html'

})