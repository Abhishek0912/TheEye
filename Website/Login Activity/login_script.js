var user;
  var pwd;
  function getAccess(){
    user=document.getElementById("username").value;
    pwd=document.getElementById("password").value;
    if(user=="abcdef" && pwd=="123456"){
      var but=document.getElementById("loginbutton");
      but.type="submit";
    }else{
      document.getElementById("status").innerHTML="Incorrect Username or Password!";
    }
  }