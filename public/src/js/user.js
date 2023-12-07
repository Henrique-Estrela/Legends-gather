import * as functions from "./functions.js";



var Nickname = document.getElementById("nicknameuser");

var UserNickname = document.querySelector(".inputname");
var Useremail = document.querySelector(".inputemail");
var Userpassword = document.querySelector(".inputsenha");


var User = functions.push_user();

UserNickname.value = User.nome;
Useremail.value = User.email;
Userpassword.value = User.senha;

Nickname.textContent = User.nome;

