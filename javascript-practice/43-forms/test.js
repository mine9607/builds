var myForm = document.forms.myForm;
var myMessage = document.getElementById("message");

myForm.onsubmit = function () {
  if (myForm.name.value == "") {
    message.innerHTML = "please enter a name";
    return false;
  } else {
    message.innerHTML = "";
    return true;
  }
};
