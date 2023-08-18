// let signin_form = document.querySelector('.signin_form');
// let user = document.querySelector('#username');
// let user_clear = document.querySelector('.user-clear');
// let password = document.querySelector('#password');
// let password_toggle = document.querySelector('.password-toggle');


// user_clear.addEventListener('click', () => {
//   user.value = '';
// });

// password_toggle.addEventListener('click', () => {
//   if (password_toggle.getAttribute('name') === "eye-off-outline") {
//     password_toggle.setAttribute('name', 'eye-outline');
//     password.type = 'text';
//   } else {
//     password_toggle.setAttribute('name', 'eye-off-outline');
//     password.type = 'password';
//   }
// });
// signin_form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   let form_data = {
//     Email: email.value,
//     Password: password.value
//   }
//   console.log(form_data);
//   signin_form.reset();
// });
let btnSubmit = document.querySelector('.submit');
let errorMessage = document.getElementById('error-message');

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  // Retrieve the latest values of user and pass during form submission
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  var userLocal = localStorage.getItem("user");
  var passLocal = localStorage.getItem("passwords");

  console.log(userLocal, passLocal);
  console.log(user, pass);

  if (user === userLocal && pass === passLocal) {
    window.location.href = "../HTML/index-person.html";
  } else {
    errorMessage.textContent = "Thông tin đăng nhập không đúng.";
  }
});
function changeTypePassword() {
  let password = document.getElementById('password');
  let eyeIcon = document.querySelector('.fa-regular');
  
  if (password.type === 'text') {
      password.type = 'password';
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
  } else {
      password.type = 'text';
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
  }
}

