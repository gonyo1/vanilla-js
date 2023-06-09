const login = document.querySelector(".login")
const mainpage = document.querySelector("#mainbody-content")

const loginForm = body.querySelector("#login-form")
const signinButton = body.querySelector("#sign-in")
const formCellWrapper = body.querySelector(".form-cell-wrapper")
const loginAccount = body.querySelector("#login_account_name")
const loginInfo = body.querySelector("#login_info")
const AccountName = body.querySelector("#user-name")

const USERNAME_KEY = "username"
const HIDDEN_CLASSNAME = "hidden"

let accountText = 0;
let username = "";
let savedusername = localStorage.getItem(USERNAME_KEY)

// eventlisner 연결
function onKeyPressAccount(event) {
    accountText = event.target.value

    if (accountText.length > 0) {
        signinButton.disabled = false;
    } else {
    signinButton.disabled = true;
    }
}
function patingUsername() {
    var localusername = localStorage.getItem(USERNAME_KEY)
    AccountName.innerText = `Hello, ${localusername} 님`;
}
function onAccountCreate(event){
    event.preventDefault()

    // add hidden class to login div
    login.classList.add(HIDDEN_CLASSNAME);
    mainpage.classList.remove(HIDDEN_CLASSNAME);

    // add username to localstorage
    username = loginAccount.value
    localStorage.setItem(USERNAME_KEY, username)

    // paint Username
    patingUsername()
}

if (savedusername === null) {
    // show the form
    login.classList.remove(HIDDEN_CLASSNAME);
    mainpage.classList.add(HIDDEN_CLASSNAME);
    
    // eventlisner
    loginAccount.addEventListener("keyup", onKeyPressAccount);
    loginForm.addEventListener("submit", onAccountCreate);
} else {
    // hide the form
    mainpage.classList.remove(HIDDEN_CLASSNAME);
    patingUsername()
}