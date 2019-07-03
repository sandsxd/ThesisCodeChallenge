function toggleVisibility() {
  var pass = document.getElementById("pass");
  var icon = document.getElementById("eye");
  if (pass.type === "password") {
    pass.type = "text";
    icon.src = "images/openEye.png";
  } else {
    pass.type = "password";
    icon.src = "images/crossEye.png";
  }
}

function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
