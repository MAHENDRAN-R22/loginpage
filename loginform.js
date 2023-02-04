
function myfunction()
{
  var name=document.form1.name.value;
  var password=document.form1.password.value;
  if(name===null || name==="")
  {
    alert("name cant be blank");
    return false;
  }
  else if(password.length<5)
  {
    alert("password should be greater than 5 letters");
    return false;
  }
}
