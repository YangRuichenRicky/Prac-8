/*let message = "Hello!";
alert(message);
message = "What is your name";
let userName = prompt(message);
while (userName.length <= 0){
 userName = prompt("Please enter a user name that has at least one letter.");
 };
 if (userName.length < 2){alert("I see you are using an initial")}
else{alert("Your userName is now updated");}
function showMessage(prompt) {
 alert(prompt);
 }*/
function showTime() {
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth()+1;
var day = now.getDate();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
alert(""+year+"-"+month+"-"+day+"-"+hours+"-"+minutes+"-"+seconds);
}
