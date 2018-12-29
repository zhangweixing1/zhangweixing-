document.addEventListener("DOMContentLoaded",function(){
    


    //连接数据库查看是否已存在用户名
    var email = document.querySelector("#email");
    var email_pwd = document.querySelector("#email_pwd");
    var email_pwds = document.querySelector("#email_pwd_again");
    var btn = document.querySelector("#btn");

    console.log(btn);
    var check = document.querySelector(".tps_checkbox");
    var font =document.querySelector(".font");
     var fonts =document.querySelector(".fonts");

    email.onblur=function(){
        var _email = email.value;
        if(_email.trim() != ""){
                var xhr1 = new XMLHttpRequest();
                xhr1.onreadystatechange=function(){
                    if(xhr1.readyState == 4 && (xhr1.status == 200 || xhr1.status == 304)){
                        
                       font.innerHTML = xhr1.responseText;

                    }
                }
                xhr1.open("get","../php/details.php?email="+_email,true);
                xhr1.send(null);

        }else{
                font.innerHTML = "输入正确的邮箱";

        }
        
    }
    btn.onclick = function(){
        // console.log(6666);
        if(check.checked == true && email.value.trim() != ""){
            if(email_pwd.value !== email_pwds.value){
                fonts.innerHTML = "密码不一致";
            }else{
                var register = true;
                var xhr33 = new XMLHttpRequest();
                xhr33.onreadystatechange = function(){
                    if(xhr33.readyState == 4 && (xhr33.status == 200 || xhr33.status == 304)){
                      if(xhr33.responseText == "注册成功"){
                        alert(xhr33.responseText);
                        email.value="";
                        email_pwd.value="";
                        email_pwds.value="";
                        chakan.innerHTML="";
                        check.checked = false;
                      }
                        
                    }
                }
                xhr33.open("get",`../php/details.php?email=${email.value}&word=${email_pwd.value}&register=${register}`,true);
                xhr33.send(null);
            }
        }else{
            alert("帐号密码不能为空或者未勾选条款");
        }
    }
   









})


