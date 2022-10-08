let pass1 = document.getElementById("password")
let pass2 = document.getElementById("confirm")
pass1.addEventListener("keyup", checkPass)
pass2.addEventListener("keyup", checkPass )

function checkPass () {
  if (pass1.value != "") {
    if (pass1.value != pass2.value) {
      pass2.style.border = "3px solid red"
    } else if (pass1.value == pass2.value) {
      pass2.style.border = "3px solid green"
    }
      else {
        pass2.style.border = "3px solid red"
      }
  }
}

  
  
