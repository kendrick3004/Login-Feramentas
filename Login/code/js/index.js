function takeValue() {
  var x = document.getElementById("form1");
  var texto = "";
  var i;
  for (i = 0; i < x.length; i++) {
      texto += x.elements[i].value + "<br>";
  }
  
  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;

  if(login == "admin" && senha == "admin")
{
  window.location.href = "Carregando/Carregando.html";
}
  else {

}

function not() {
  document.getElementById('overlay-not').style.display = 'block';
  document.getElementById('activate').style.display = 'block';
} 
}





