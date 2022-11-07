const LoginForm = document.getElementById("LoginForm");
const RegForm = document.getElementById("RegForm");
const Indicator = document.getElementById("Indicator");

const registerBtn = document.getElementById("registrationBtn");
const loginBtn = document.getElementById("loginBtn");
const allRegistrationInputs = document.querySelectorAll("input");
const formContainer = document.getElementsByClassName("form-container");

function register() {
  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(100px)";
}

function login() {
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(0px)";
}

/////////////////////////Registration Information////////////

const usersRegistration = [];
let obj = {};

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const isEmpty = [...allRegistrationInputs].slice(2).some((e) => !e.value);
  if (isEmpty) {
    alert("Inputs shouldn't be empty");
    return;
  }

  const registrationData = new FormData(RegForm);
  const registrationArr = [...registrationData];
  const singleUser = Object.entries(registrationArr);

  singleUser.forEach((elem) => {
    const [key, value] = elem[1];
    obj[key] = value;
  });
  usersRegistration.push(obj);
  const storedArr = JSON.parse(localStorage.getItem("usersArray"));

  if (storedArr && storedArr.length >= 1) {
    const updatedArr = [...storedArr, ...usersRegistration];
    localStorage.setItem("usersArray", JSON.stringify(updatedArr));
  } else {
    localStorage.setItem("usersArray", JSON.stringify(usersRegistration));
  }

  alert("Your Account has been successfully created");

  window.location.href = "index.html";
});

////////////////////Login Form//////////////
const usersLogin = [];
let singleLogin = {};
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const isEmpty = [...allRegistrationInputs].slice(0, 2).some((e) => !e.value);
  if (isEmpty) {
    alert("Inputs shouldn't be empty");
    window.location.href = "index.html";
    return;
  }

  const loginData = new FormData(LoginForm);
  const loginArr = [...loginData];
  const singleUser = Object.entries(loginArr);

  singleUser.forEach((elem) => {
    const [key, value] = elem[1];
    singleLogin[key] = value;
  });
  const storedArr = JSON.parse(localStorage.getItem("usersArray"));
  if (!storedArr) {
    alert("No user found.");
    window.location.href = "index.html";
    return;
  }
  let findUser;
  for (const key in singleLogin) {
    findUser = storedArr.find((elem) => {
      return elem[key] === singleLogin[key] ? (findUser = elem) : null;
    });
  }
  if (!findUser) {
    alert("Either userName or password is wrong.");
    window.location.href = "index.html";
    return;
  } else {
    window.location.href = "userLoginPage.html";
  }
});
